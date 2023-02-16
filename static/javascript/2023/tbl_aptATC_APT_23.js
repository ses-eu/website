(function() {
    function dv(){
       
  // CAPACITY - Airport ATC pre-departure APT - TABLE
  var tbl_aptATC_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATC_APT_23',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1lc407pGbtncGZXrunv9pe1430y8CQmlWTeHcK4Mu6Mo/edit?usp=sharing&sheet=APT_ATC_PRE_APT&range=A5:I47',
    options: {
        allowHtml: true,
        width: 950,
        height: 280
    },
    view: {
        columns: [0, 2, 3, 5, 8]
    }
});
tbl_aptATC_APT.draw();     

    }

    google.setOnLoadCallback(dv);
 })();
