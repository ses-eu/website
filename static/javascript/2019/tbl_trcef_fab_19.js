(function() {
    function dv(){

 // TRM CEF - FAB - TABLE
 var tbl_trcef_fab = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_trcef_fab_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Ub4oNRxPbE0wAIxWJ2wLmsmebHmvNQKiCAyVhCzjDlk/edit?usp=sharing&sheet=TRM_CEF_FAB&range=A2:N11&hl=en_GB',
    options: {
        allowHtml: true,
        width: 950,
        height: 270
    },
    view: {columns: [0, 7, 8, 9,11,12,13]}
});
tbl_trcef_fab.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
 
