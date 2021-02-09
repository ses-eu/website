(function() {
    function dv(){
    
// ENVIRONMENT - Horizontal flight efficiency - TABLE
var tbl_ert_flteff = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ert_flteff_Loc_21',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1pJtwbZI7yPvnc4do-AkZ0QQi4reVCnIWBcO3ex-BNbk/edit?usp=sharing&sheet=ERT_FLT_EFF_LOC&range=A5:F34&hl=en_GB',
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
 
