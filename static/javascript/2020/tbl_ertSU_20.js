(function() {
    function dv(){

  // ERT SU - TABLE
  var tbl_ertSU = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertSU_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/118WRmcjedSMlSM33NUjMJtNZqTgB4hVMyjTD-0fyESQ/edit?usp=sharing&sheet=ERT_SU_CZ&range=A5:I36',
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