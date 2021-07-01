// Portal / Data Download Tooltips

export class TOOLTIP {
    static get countryTooltip() { return 'Select one or multiple <strong><em>countries</em></strong> represented in the database. Parentheses after each country represent which database(s) it is represented in.';}
    static get stateTooltip() { return 'Select one or multiple <strong><em>states</em></strong>. Parentheses after each state represent which database(s) it is represented in.';}
    static get countyTooltip() { return 'Select one or multiple <strong><em>counties</em></strong> from the selected state(s). Parentheses after each county represent which database(s) it is represented in.';}
    static get pointLocationTooltip() { return 'Enter <em>latitude</em> and <em>longitude</em> (<strong>decimal degrees</strong> referenced to NAD83), and <em>radial distance</em> (<strong>miles</strong>) to create a <strong><em>search area</em></strong>. Longitudes in the western hemisphere begin with a negative sign. Many stations outside the continental US do not have latitude and longitude referenced to NAD83 and cannot be found using these parameters. <br><em>Example:</em> Within: <strong>20</strong> miles of Latitude: <strong>46.12</strong> Longitude: <strong>-89.15</strong>';}
    static get boundingBoxTooltip() { return 'Enter the North and South <em>latitudes</em> and the East and West <em>longitudes</em> (<strong>decimal degrees</strong> referenced to NAD83) to create a <strong><em>bounding box</em></strong>. Longitudes in the western hemisphere should begin with a negative sign. <br><em>Example:</em> North: <strong>46.12</strong>, East: <strong>-89.15</strong>, South: <strong>45.93</strong>, West: <strong>-89.68</strong>';}
    static get siteTypeTooltip() { return '<strong><em>Site type</em></strong> indicates a <em>natural</em> or <em>human-made</em> feature affecting the hydrologic conditions measured at a site. Select one or multiple site types. Parentheses after each site type represent which database(s) it is represented in.';}
    static get orgIDTooltip() { return 'Identifies a unique <strong><em>business</em></strong> or <strong><em>company</em></strong>. Select one or multiple organization IDs. Type at least two characters for a list to appear. For more information on Water Quality Exchange (WQX) Organization IDs, see <a href="https://www.epa.gov/waterdata/water-quality-data">About EPA/WQX</a>';}
    static get siteIDTooltip() { return 'Identifies a <strong><em>monitoring location</em></strong> by a unique name, number, or code. Select one or multiple site IDs. Type at least two characters for a list to appear. <br><em>Examples:</em> For NWIS site: <strong>USGS-301650089215300</strong> <br>For EPA site: <strong>R10BUNKER-CUA005-5</strong>';}
    static get hucTooltip() { return 'Identifies the <strong><em>hydrological unit</em></strong> up to the cataloging unit level of precision. Select one or multiple HUC IDs. Separate multiple HUC IDs with a <strong>semicolon</strong> (";"). Select partial HUCs using <strong>trailing wildcards</strong> ("*"). <br><em>Examples:</em> One site: <strong>01010005</strong> <br>Multiple sites: <strong>01010003;01010004</strong> <br>Partial HUCs: <strong>010801*</strong>';}
    static get minSamplingTooltip() { return 'Returns only sites where at least a minimum number of <strong><em>sampling activities</em></strong> have been reported. Select a value; the default is <strong>1</strong>.';}
    static get upDownStreamTooltip() { return 'Click the Expand button in the upper right of the map. This will show a larger map. Zoom in to see features of interest. The feature source can be changed using the feature select picker in the upper right. Click on a feature to display a popup dialog where you enter the navigation type and optional distance. Then click the Navigate button to show the sites upstream or downstream from the feature. Use a distance with upstream tributaries to restrict the query size and ensure that the result does not crash the page. This tool uses the Network Linked Data Index to navigate.';}
    static get sampleMediaTooltip() { return 'Identifies the <strong><em>environmental medium</em></strong> where a sample was taken. Select one or multiple sample media types. Parentheses after each sample medium represent which database(s) it is represented in.';}
    static get charGroupTooltip() { return 'Groups types of <strong><em>environmental measurements</em></strong>. Select one or multiple characteristic groups. Parentheses after each characteristic group represent which database(s) it is represented in.';}
    static get characteristicsTooltip() { return 'Identifies types of <strong><em>environmental measurements</em></strong>. Select one or multiple characteristics. Parentheses after each characteristic represent which database(s) it is represented in. The names are derived from the <a href="http://iaspub.epa.gov/sor_internet/registry/substreg/home/overview/home.do">USEPA Substance Registry System (SRS)</a>. USGS uses parameter codes for the same purpose and has <a href="http://www.waterqualitydata.us/public_srsnames.jsp">associated most parameters to SRS names</a>.';}
    static get projectIDTooltip() { return 'Uniquely identifies a <strong><em>data collection project</em></strong>. Select one or multiple project IDs. Parentheses after each project ID represent which database it is represented in.';}
    static get paramCodeTooltip() { return 'Identifies a characteristic using <a href="https://nwis.waterdata.usgs.gov/usa/nwis/pmcodes"></em></em><strong><em>NWIS codes</em></strong></a>. Select one or multiple parameter codes. Specifying a parameter code will limit the query to <strong><em>NWIS only</em></strong>.';}
    static get minimumResultsTooltip() { return 'Returns only sites where at least a minimum number of <strong><em>results</em></strong> have been reported. Select a value; the default is <strong>1</strong>.';}
    static get bioSamplingTooltip() { return 'Filter by parameters specific to <strong><em>biological organisms</em></strong>: assemblage and taxonomic name.';}
    static get assemblageTooltip() { return 'An association of <strong><em>interacting populations</em></strong> of organisms in a given water body. <em>Example:</em> macroinvertabrates and fish/nekton.';}
    static get taxNameTooltip() { return '<strong><em>Genus name, species name</em></strong> in binomial nomenclature. <em>Example:</em> for shovelnose strugeon, <em>Scaphirhyncus platorynchus</em>.';}
    static get showAGOLTooltip() { return 'The Water Quality Portal (WQP) Web Services conform to the format defined in the below referenced XML schema.';}
    static get sortDataTooltip() { return '<strong><em>Sorts data</em></strong> by <em>organization</em>, <em>monitoringLocationID</em>, and <em>activityID</em>. Sorting <strong>increases</strong> response time. If you are manually sorting, set <strong>sorted=no</strong>. The sorted document is delivered in the WQX standard.';}
    static get dateRangeTooltip() { return '<strong><em>Start</strong></em> and <strong><em>end dates</strong></em> to be used individually or together. </em>Dates must be entered in <em>MM-DD-YYYY</em> format.'}
    static get databasesTooltip() { return 'Select one or multiple <strong><em>databases</strong></em> from which the data will be retrieved. <strong>All</strong> databases are searched by default.'}
    static get dataDownloadTooltip() { return '<strong><em>Water monitoring data</strong></em> is delivered in a format and nomenclature defined by the <a href="http://www.exchangenetwork.net/schema/WQX/2/WQX_DET_v2.1b.xls">WQX-Outbound Schema</a>. <em>Metadata</em> on these formats is displayed in Tables 4-12 of the User Guide.';}
    static get fileFormatTooltip() { return 'Choose a <strong><em>file format</strong></em> to download the result set.';}
}