(function() {
    function dv(){

// ENVIRONMENT - ASMA DLY - LOC - TABLE
var tbl_ASMAdly_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ASMAdly_LOC_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1EJDkwzupnXTKW5DgMO5wAszl8k_So0sqW0MDfRjXZE0/edit?usp=sharing&sheet=ASMA_LOC&range=A5:F35',
    options: {
        allowHtml: false,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 5, 1]
    }
});
tbl_ASMAdly_LOC.draw();

    }

    google.setOnLoadCallback(dv);
 })();
 
