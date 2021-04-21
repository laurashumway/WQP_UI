// Portal / Data Download Tooltips

export class TOOLTIP {
    static get countryTooltip() { return 'Countries represented in the database can be selected from the drop down list. The available data sources are listed in parenthesis for each country. Multiple countries may be selected.';}
    static get stateTooltip() { return 'States or provinces for the selected countries can be selected from the drop down list. If the countries select is clear, then US states are available. Selections are shown as XX:YY where XX is the country code and YY is the FIPS code with the exception that postal code is shown for US states. The available data sources are listed in parenthesis for each state. Multiple states may be selected.';}
    static get countyTooltip() { return 'Counties for the selected states can be selected from the drop down list. Selections are shown as XX:YY:ZZZ where XX is the country code, YY is the FIPS or postal code and ZZZ is the county postal code. The available data sources are listed in parenthesis for each county. Multiple counties may be selected.';}
    static get pointLocationTooltip() { return 'Enter a latitude and longitude and a radial distance to create a search area. Distance should be entered in miles. Latitude and longitude should be entered in decimal degrees relative to the NAD83 datum. Longitudes in the western hemisphere should be preceded with a negative sign ('-'). Many stations outside the continental US do not have latitude and longitude referenced to WGS84 and therefore cannot be found using these parameters.';}
    static get boundingBoxTooltip() { return 'Enter the North and South latitudes and the East and West longitudes to create a bounding box. Latitude and Longitude should be entered in decimal degrees relative to the NAD83 datum. Longitudes in the western hemisphere should be preceded with a negative sign ('-').';}
    static get siteTypeTooltip() { return 'A site type is a generalized location in the hydrologic cycle, or a man-made feature thought to affect the hydrologic conditions measured at a site. Site types can be selected from the drop down list. The available data sources are listed in parenthesis for each site type. Multiple site types may be selected.';}
    static get orgIDTooltip() { return 'A designator used to identify a unique business establishment within a context. Select from a list of organization IDs represented in the source databases. Multiple IDs may be selected.';}
    static get siteIDTooltip() { return 'A site id is a designator used to describe the unique name, number, or code assigned to identify the monitoring location. Site IDs are case-sensitive and should be entered in the following format: AGENCY-STATION NUMBER. More than one site ID may be entered, separated by semicolons. If you are entering an NWIS site, use "USGS" as the AGENCY.';}
    static get hucTooltip() { return 'A HUC is a federal code used to identify the hydrologic unit of the monitoring location to the cataloging unit level of precision. Full hydrologic unit codes (HUCs) or partial HUCs using trailing wildcards may be entered. Only trailing wildcards are accepted. More than one HUC may be entered, separated by semicolons. The lists and maps of hydrologic units are available from the USGS.';}
    static get minSamplingTooltip() { return 'This limits the data returned to data from sites where at least a minimum number of sampling activities have been reported that conform to the rest of the query parameters.';}
    static get upDownStreamTooltip() { return 'Click the Expand button in the upper right of the map. This will show a larger map. Zoom in to see features of interest. The feature source can be changed using the feature select picker in the upper right. Click on a feature to display a popup dialog where you enter the navigation type and optional distance. Then click the Navigate button to show the sites upstream or downstream from the feature. Use a distance with upstream tributaries to restrict the query size and ensure that the result does not crash the page. This tool uses the Network Linked Data Index to navigate.';}
    static get sampleMediaTooltip() { return 'A sample media indicates the environmental medium where a sample was taken. Sample media can be selected from the drop down list. The available data sources are listed in parenthesis for each sample media. Multiple sample media may be selected.';}
    static get charGroupTooltip() { return 'A characteristic group can be selected from the drop down list. The available data sources are listed in parenthesis for each characteristic group. Multiple characteristic groups may be selected.';}
    static get characteristicsTooltip() { return 'A characteristic identifies different types of environmental measurements. The names are derived from the USEPA Substance Registry System (SRS). The available data sources are listed in parenthesis for each characteristic. Multiple characteristics may be selected.';}
    static get projectIDTooltip() { return 'The Project identifier is a designator used to uniquely identify a data collection project within a context of an organization.';}
    static get paramCodeTooltip() { return 'A Parameter Code is a 5-digit number used in NWIS to uniquely identify a specific characteristic.   One or more five-digit USGS parameter codes can be requested, separated by semicolons. For more information on NWIS pcodes see http://nwis.waterdata.usgs.gov/usa/nwis/pmcodes \n <strong>Please Note</strong>: Specifying a Parameter Code will limit the query to NWIS only.';}
    static get minimumResultsTooltip() { return 'This limits the data returned to data from sites where at least a minimum number of results have been reported that conform to the rest of the query parameters. For example, if you are looking for stream sites in Wisconsin that have nutrient samples taken beween 2010 and 2015, entering 10 in this box would return only results from sites where at least 10 nutrient result values have been reported';}
    static get bioSamplingTooltip() { return 'These parameters are related to samples of biological organisms, such as species name or the assemblage that a group of organisms belongs to';}
    static get assemblageTooltip() { return 'The Assemblage is specific to biological collection data, and refers to "An association of interacting populations of organisms in a given waterbody." Examples include macroinvertabrates and fish/nekton.';}
    static get taxNameTooltip() { return 'The Taxonomic Name parameter queries the SubjectTaxonomicName in the WQP output. This is typically in Genus species binomial nomenclature form. For example, to look for sites sampled for the shovelnose sturgeon, enter Scaphirhynchus platorynchus ';}
    static get showAGOLTooltip() { return 'The Water Quality Portal (WQP) Web Services conform to the format defined in the below referenced XML schema.';}
}