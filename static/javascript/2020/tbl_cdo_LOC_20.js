(function() {
    function dv(){
// ENVIRONMENT - SHARE OF CDO FLIGHTS - LOC - TABLE
var tbl_txdly_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_cdo_LOC_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1TjRT0KGZIhfusSSC2vVw26MGjGCR-az74UkRycY-OhY/edit?usp=sharing&sheet=CDO_LOC&range=A5:E29',
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
 
