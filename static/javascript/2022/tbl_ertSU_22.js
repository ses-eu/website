(function() {
    function dv(){

  var tbl_ertSU = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertSU_22',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1di8XUflb-AGrN9RTUfP8p2hqlMs15sXOCIlnoKhl1r0/edit?usp=sharing&sheet=ERT_SU_CZ&range=A5:I35',
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