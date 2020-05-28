(function() {
    function dv(){

 // ER CEF - FAB - TABLE
 var tbl_ertcef_fab = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertcef_fab_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1aZLiB6_90_J0Yo1imG3yn8TwHP0uKRUSt8otZwqgCRs/edit?usp=sharing&sheet=ERT_CEF_FAB&range=A2:N11&hl=en_GB',
    options: {
        allowHtml: true,
        width: 950,
        height: 270
    },
    view: {columns: [0, 7, 8, 9,11,12,13]}
});
tbl_ertcef_fab.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();