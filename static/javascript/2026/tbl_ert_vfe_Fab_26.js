(function() {
    function dv(){
 
// ENVIRONMENT - Vertical en-route flight efficiency - TABLE FAB
var tbl_ert_vfe = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ert_vfe_Fab_26',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/129Cah0Wx2UB4iSyfRk6t3NCz7nho80JjnX7uRl-1V9Q/edit?usp=sharing&sheet=ERT_VFE_FAB&range=A5:D15&hl=en_GB',
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