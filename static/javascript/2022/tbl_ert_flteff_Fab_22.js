(function() {
    function dv(){

// ENVIRONMENT - Horizontal flight efficiency - TABLE
var tbl_ert_flteff = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ert_flteff_Fab_22',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/12mHG_oEVjS7tbPfj4lbbnAtlkcw07YDQh-Y8GO3fHFY/edit?usp=sharing&sheet=ERT_FLT_EFF_FAB&range=A5:F15&hl=en_GB',
    options: {
        allowHtml: true,
        width: 460,
        height: 360,
        //style: {fontSize: 9}
    },
    view: {
        columns: [0, 1, 2, 3, 4, 5]
    }
});
tbl_ert_flteff.draw();     

    }

    google.setOnLoadCallback(dv);
 })();
 
