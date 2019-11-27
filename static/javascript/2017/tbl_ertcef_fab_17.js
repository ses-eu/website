(function() {
    function dv(){


 // ER CEF - FAB - TABLE
 var tbl_ertcef_fab = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertcef_fab_17',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1sLZs7-p6Dkd0ojG0BWWf2z5JvN5Bj6rYK4r4jwSyW0o/edit?usp=sharing&sheet=ERT_CEF_FAB&range=A2:N11&hl=en_GB',
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
 
