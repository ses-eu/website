(function() {
    function dv(){
// ENVIRONMENT - TAXI OUT DLY - LOC - TABLE
var tbl_txdly_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_txdly_LOC_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1fXoQx06mOmoE2hQdAbaQUvq46g2oxUO79yy5TOF8Rqg/edit?usp=sharing&sheet=TxOut_LOC&range=A5:E25',
    options: {
        allowHtml: false,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 1, 4]
    }
});
tbl_txdly_LOC.draw();
    }

    google.setOnLoadCallback(dv);
 })();
 
