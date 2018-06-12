import contains from 'lodash/collection/contains';
import filter from 'lodash/collection/filter';
import has from 'lodash/object/has';
import last from 'lodash/array/last';
import union from 'lodash/array/union';

import InputValidation from './inputValidationView';
import { CodeSelect, CascadedCodeSelect } from './portalViews';
import { getPostalCode } from '../stateFIPS';
import { getAnchorQueryValues} from '../utils';

const USA = 'US';

/*
 * Initializes and manages the Place inputs
 * @param {Object} options
 *      @prop {Jquery element} $container - div containing the place inputs.
 *      @prop {CachedCodes} countyModel
 *      @prop {CodesWithKeys} stateModel
 *      @prop {CodesWithKeys} countryModel
 * @returns {Object}
 *      @func initialize
 */
export default class PlaceInputView {
    constructor({$container, countyModel, stateModel, countryModel}) {
        this.$container = $container;
        this.countyModel = countyModel;
        this.stateModel = stateModel;
        this.countryModel = countryModel;
    }

    initializeCountrySelect($select, model, initValues=[]) {
        var isMatch = function (searchTerm, lookup) {
            var termMatcher;

            if (searchTerm) {
                termMatcher = new RegExp(searchTerm, 'i');
                return termMatcher.test(lookup.id) || termMatcher.test(lookup.desc);
            } else {
                return true;
            }
        };
        var templateSelection = function(selectData) {
            if (has(selectData, 'id')) {
                return selectData.id;
            } else {
                return null;
            }
        };

        var spec = {
            model: model,
            isMatch: isMatch
        };

        new CodeSelect(
            $select,
            spec, {
            templateSelection: templateSelection
            },
            initValues
        );
    }

    initializeStateSelect($select, model, getCountryKeys, initValues=[]) {
        var isMatch = function (searchTerm, lookup) {
            var termMatcher;
            var codes;
            if (searchTerm) {
                termMatcher = new RegExp(searchTerm, 'i');
                codes = lookup.id.split(':');
                return termMatcher.test(lookup.id) ||
                    termMatcher.test(lookup.desc) ||
                    termMatcher.test(getPostalCode(codes[1]));
            } else {
                return true;
            }
        };
        var spec = {
            model: model,
            isMatch: isMatch,
            getKeys: getCountryKeys
        };

        var templateSelection = function(selectData) {
            var codes;
            var result;
            if (has(selectData, 'id')) {
                codes = selectData.id.split(':');

                if (codes[0] === USA) {
                    result = codes[0] + ':' + getPostalCode(codes[1]);
                } else {
                    result = selectData.id;
                }
            } else {
                result = null;
            }
            return result;
        };

        new CascadedCodeSelect(
            $select,
            spec,
            {
                templateSelection: templateSelection
            },
            initValues
        );
    }

    initializeCountySelect($select, model, getStateKeys, initValues) {
        var isMatch = function(searchTerm, lookup) {
            var termMatcher;
            var county;
            if (searchTerm) {
                termMatcher = new RegExp(searchTerm, 'i');
                county = last(lookup.desc.split(','));
                return termMatcher.test(county);
            } else {
                return true;
            }
        };
        var countySpec = {
            model: model,
            isMatch: isMatch,
            getKeys: getStateKeys
        };

        var templateSelection = function(selectData) {
            var codes;
            var result;

            if (has(selectData, 'id')) {
                codes = selectData.id.split(':');

                if (codes[0] === 'US') {
                    result = codes[0] + ':' + getPostalCode(codes[1]) + ':' + codes[2];
                } else {
                    result = selectData.id;
                }
            } else {
                result = null;
            }
            return result;
        };

        new CascadedCodeSelect(
            $select,
            countySpec,
            {
                templateSelection: templateSelection
            },
            initValues
        );
    }

    /*
     * Initialize the select2's and add event handlers
     * @return Jquery promise
     *      @resolve - When all models have been fetched successfully
     *      @reject - If any of the fetches failed.
     */
    initialize() {
        //Initialize select els
        let $countrySelect = this.$container.find('#countrycode');
        let $stateSelect = this.$container.find('#statecode');
        let $countySelect = this.$container.find('#countycode');

        const initCountries = getAnchorQueryValues($countrySelect.attr('name'));
        const initStates = getAnchorQueryValues($stateSelect.attr('name'));
        const initCounties = getAnchorQueryValues($countySelect.attr('name'));

        const getCountryKeys = function () {
            var results = $countrySelect.val();
            return results.length > 0 ? results : [USA];
        };

        const getStateKeys = function() {
            var results = $stateSelect.val();
            return results.length > 0 ? results : [];
        };

        //Fetch initial model data
        let fetchCountries = this.countryModel.fetch();
        let fetchStates = this.stateModel.fetch(union([USA], initCountries));
        let fetchCounties;
        if (initStates.length) {
            fetchCounties = this.countyModel.fetch(initStates);
        } else {
            fetchCounties = $.Deferred().resolve();
        }
        let fetchComplete = $.when(fetchCountries, fetchStates, fetchCounties);

        //Initialize select2s
        fetchCountries.done(() => {
            this.initializeCountrySelect($countrySelect, this.countryModel, initCountries);
        });
        fetchStates.done(() => {
            this.initializeStateSelect($stateSelect, this.stateModel, getCountryKeys, initStates);
        });
        fetchCounties.done(() => {
            this.initializeCountySelect($countySelect, this.countyModel, getStateKeys, initCounties);
        });

        //Add event handlers
        $countrySelect.on('change', function (ev) {
            /* update states */
            let countries = $(ev.target).val();
            const states = $stateSelect.val();
            const isInCountries = function(state) {
                const countryCode = state.split(':')[0];
                return contains(countries, countryCode);
            };

            if (!countries) {
                countries = [USA];
            }
            $stateSelect.val(filter(states, isInCountries)).trigger('change');
        });

        $stateSelect.on('change', function (ev) {
            var states = $(ev.target).val();
            var counties = $countySelect.val();
            var isInStates = function(county) {
                var codes = county.split(':');
                var stateCode = codes[0] + ':' + codes[1];
                return contains(states, stateCode);
            };

            $countySelect.val(filter(counties, isInStates)).trigger('change');
        });
        new InputValidation({
            inputEl : $countySelect,
            validationFnc : function(val, ev) {
                var result;
                if (getStateKeys().length === 0) {
                    ev.preventDefault();
                    result  = {
                        isValid : false,
                        errorMessage : 'Please select at least one state'
                    };
                } else {
                    result = {
                        isValid : true
                    };
                }
                return result;
            },
            event : 'select2:opening'
        });

        return fetchComplete;
    }
}
