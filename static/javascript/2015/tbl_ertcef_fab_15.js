(function() {
    function dv(){

 // ER CEF - FAB - TABLE
 var tbl_ertcef_fab = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertcef_fab_15',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1jWrtRM0uPPwNBSh9EMKL9ZJqMf7v3R_xz4PWNU0yu-w/edit?usp=sharing&sheet=ERT_CEF_FAB&range=A2:N11&hl=en_GB',
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
 
