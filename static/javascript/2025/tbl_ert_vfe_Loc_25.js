(function() {
    function dv(){
        
// ENVIRONMENT - Vertical en-route flight efficiency - Local TABLE
var tbl_ert_vfe = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ert_vfe_Loc_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1iLYaXDybOyHIB0w_4qj0v4LHPnBmbcL5bwMcX3VZrsc/edit?usp=sharing&sheet=ERT_VFE_LOC&range=A5:D33&hl=en_GB',
    options: {
        allowHtml: true,
        width: 460,
        height: 360,
        //style: {fontSize: 9}
    },
    view: {
        columns: [0, 3]
    }
});
tbl_ert_vfe.draw();     

    }

    google.setOnLoadCallback(dv);
 })();
