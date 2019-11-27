(function() {
    function dv(){

        // ENVIRONMENT - TAXI OUT DLY - APT - TABLE
var tbl_txdly_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_txdly_APT_16',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1hLYGdDDyS6-6IXVyblXZiWptQ2FB818qoCn2g0msKas/edit?usp=sharing&sheet=TxOut_APT&range=A5:G180',
    options:{ allowHtml: false, width: 470, height: 280},
    view: {columns: [1,2,0,3]}
}); tbl_txdly_APT.draw();     

    }

    google.setOnLoadCallback(dv);
 })();
