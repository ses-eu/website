(function() {
    function dv(){

// ENVIRONMENT - Horizontal flight efficiency - TABLE
var tbl_ert_flteff = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ert_flteff_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Dk1vD4mPBZU1Ve3Wjxx1cHrBjV6O7T025vb4wVskPbo/edit?usp=sharing&sheet=ERT_FLT_EFF_FAB&range=A5:E15&hl=en_GB',
    options: {
        allowHtml: true,
        width: 470,
        height: 360,
        //style: {fontSize: 9}
    },
    view: {
        columns: [0, 2, 3, 4]
    }
});
tbl_ert_flteff.draw();     

    }

    google.setOnLoadCallback(dv);
 })();
 
