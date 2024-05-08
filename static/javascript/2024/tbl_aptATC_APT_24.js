(function() {
    function dv(){

  // CAPACITY - Airport ATC pre-departure APT - TABLE
  var tbl_aptATC_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATC_APT_24',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1RCOd9hVYKfJnzaLX4jila5w7gvSGDotUM1axuIZ5NUI/edit?usp=sharing&sheet=APT_ATC_PRE_APT&range=A5:I47',
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
