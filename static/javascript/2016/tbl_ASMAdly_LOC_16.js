(function() {
    function dv(){

// ENVIRONMENT - ASMA DLY - LOC - TABLE
var tbl_ASMAdly_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ASMAdly_LOC_16',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1MdhOPUqTN4nvVcyU0LsfBJ3uNOGjv7x5O1VzQKekILg/edit?usp=sharing&sheet=ASMA_LOC&range=A5:F35',
    options:{ allowHtml: false, width: 470, height: 280},
    view: {columns: [0,5,1]}
}); tbl_ASMAdly_LOC.draw();

    }

    google.setOnLoadCallback(dv);
 })();
 
