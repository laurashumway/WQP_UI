import log from 'loglevel';
import { TOOLTIP } from './tooltipDefinitions';
import ArcGisOnlineHelpView from './views/arcGisOnlineHelpView';
import DownloadFormView from './views/downloadFormView';
import ShowAPIView from './views/showAPIView';
import SiteMapView from './views/siteMapView';
import DownloadProgressDialog from './downloadProgressDialog';
import { initTooltip } from './uswdsComponents/uswdsTooltip';

$(document).ready(function () {
    // Initialize Vue.js
    var app = new Vue({
        el: '#app',
        delimiters: ['[[', ']]'],
        data: {
            countryTooltip: TOOLTIP.countryTooltip,
            stateTooltip: TOOLTIP.stateTooltip,
            countyTooltip: TOOLTIP.countyTooltip,
            pointLocationTooltip: TOOLTIP.pointLocationTooltip,
            boundingBoxTooltip: TOOLTIP.boundingBoxTooltip,
            siteTypeTooltip: TOOLTIP.siteTypeTooltip,
            orgIDTooltip: TOOLTIP.orgIDTooltip,
            siteIDTooltip: TOOLTIP.siteIDTooltip,
            hucTooltip: TOOLTIP.hucTooltip,
            minSamplingTooltip: TOOLTIP.minSamplingTooltip,
            upDownStreamTooltip: TOOLTIP.upDownStreamTooltip,
            sampleMediaTooltip: TOOLTIP.sampleMediaTooltip,
            charGroupTooltip: TOOLTIP.charGroupTooltip,
            characteristicsTooltip: TOOLTIP.characteristicsTooltip,
            projectIDTooltip: TOOLTIP.projectIDTooltip,
            paramCodeTooltip: TOOLTIP.paramCodeTooltip,
            minimumResultsTooltip: TOOLTIP.minimumResultsTooltip,
            bioSamplingTooltip: TOOLTIP.bioSamplingTooltip,
            assemblageTooltip: TOOLTIP.assemblageTooltip,
            taxNameTooltip: TOOLTIP.taxNameTooltip,
            showAGOLTooltip: TOOLTIP.showAGOLTooltip,
            sortDataTooltip: TOOLTIP.sortDataTooltip,
            dateRangeTooltip: TOOLTIP.dateRangeTooltip,
            databasesTooltip: TOOLTIP.databasesTooltip,
            dataDownloadTooltip: TOOLTIP.dataDownloadTooltip,
            fileFormatTooltip: TOOLTIP.fileFormatTooltip,
        },
        methods: {
            createTooltips: function () {
                // DOM is not updated yet
                this.$nextTick(function () {
                    // DOM is now updated

                    // Identifying all tooltips
                    let elem = $(".tooltip")
                    for (const el of elem) {
                        initTooltip(elem);
                    }
                });
            }
        }
    });

    // create tooltips
    app.createTooltips();

    // Set the loglevel
    if (Config.DEBUG) {
        log.setLevel('debug', false);
    } else {
        log.setLevel('warn', false);
    }

    let $form = $('#params');

    // Create sub views
    let downloadProgressDialog = new DownloadProgressDialog($('#download-status-modal'));
    let downloadFormView = new DownloadFormView({
        $form: $form,
        downloadProgressDialog: downloadProgressDialog
    });
    let siteMapView = new SiteMapView({
        $container: $('#mapping-div'),
        downloadProgressDialog: downloadProgressDialog,
        downloadFormView: downloadFormView
    });
    let showAPIView = new ShowAPIView({
        $container: $('#show-queries-div'),
        getQueryParamArray: $.proxy(downloadFormView.getQueryParamArray, downloadFormView),
        getResultType: $.proxy(downloadFormView.getResultType, downloadFormView)
    });

    let arcGisOnlineHelpView = new ArcGisOnlineHelpView({
        $button: $('#show-arcgis-online-help'),
        $dialog: $('#arcgis-online-modal'),
        $siteMapViewContainer: $('#mapping-div'),
        getQueryParamArray: $.proxy(downloadFormView.getQueryParamArray, downloadFormView)
    });

    //Initialize subviews
    let initDownloadForm = downloadFormView.initialize();
    // siteMapView.initialize();
    showAPIView.initialize();
    arcGisOnlineHelpView.initialize();

    initDownloadForm.fail(function (jqxhr) {
        let $dialog = $('#service-error-dialog');
        if (jqxhr.status === 401 || jqxhr.status === 403) {
            $dialog.find('.modal-body').html('No longer authorized to use the application. Please reload the page to login again');
        }
        $dialog.modal('show');
    });
});
