(function() {
    function dv(){
        
// ENVIRONMENT - Horizontal flight efficiency - TABLE
var tbl_ert_flteff = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ert_flteff_Loc_24',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Nc-5Xd5idVBvuhBpplNUU4j2K3t6ZmAwy3zC1de7cm8/edit?usp=sharing&sheet=ERT_FLT_EFF_LOC&range=A5:F33&hl=en_GB',
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
 
