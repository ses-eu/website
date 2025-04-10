(function() {
    function dv(){
        
  var tbl_ertSU = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertSU_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1kThllqFR2TWTBa3-1RmX1nA4IRqbT5k163a4tOxT2Gk/edit?usp=sharing&sheet=ERT_SU_CZ&range=A5:I35',
    options: {
        allowHtml: true,
        width: 470,
        height: 400
    },
    view: {
        columns: [0, 3, 6, 8, 5]
    }
});
tbl_ertSU.draw();

    }

    google.setOnLoadCallback(dv);
 })();