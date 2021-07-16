(function() {
    function dv(){
     
  // ERT SU - TABLE
  var tbl_ertSU = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertSU_21',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/12HBZ7DhtvFvX81PFSDF52XDuXqKFtoKmAoYdbRqsR5Y/edit?usp=sharing&sheet=ERT_SU_CZ&range=A5:I35',
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