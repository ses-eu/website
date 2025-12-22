(function() {
    function dv(){

// ENVIRONMENT - Vertical en-route flight efficiency - TABLE FAB
var tbl_ert_vfe = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ert_vfe_Fab_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/15Lo-zfN-aQ4WNT6PLtT-VjqgK5tyztYYI0Z2xiU9rik/edit?usp=sharing&sheet=ERT_VFE_FAB&range=A5:D15&hl=en_GB',
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