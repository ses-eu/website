(function() {
    function dv(){
// ENVIRONMENT - TAXI OUT DLY - LOC - TABLE
var tbl_txdly_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_txdly_LOC_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1STzOX3jmEDKzXg3Bdqj958gciCLyGXwbgBLqVre6qQM/edit?usp=sharing&sheet=TxOut_LOC&range=A5:F35',
    options: {
        allowHtml: false,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 5, 1]
    }
});
tbl_txdly_LOC.draw();
    }

    google.setOnLoadCallback(dv);
 })();
 
