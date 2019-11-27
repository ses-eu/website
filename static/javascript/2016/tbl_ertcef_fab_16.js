(function() {
    function dv(){

 // ER CEF - FAB - TABLE
 var tbl_ertcef_fab = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertcef_fab_16',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Q6DzCPVQP07T2yYBM9O9QjV6QmjGi7ehlMzezI4hsPY/edit?usp=sharing&sheet=ERT_CEF_FAB&range=A2:N11&hl=en_GB',
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
 
