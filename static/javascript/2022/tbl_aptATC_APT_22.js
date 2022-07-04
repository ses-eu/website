(function() {
    function dv(){
    
  // CAPACITY - Airport ATC pre-departure APT - TABLE
  var tbl_aptATC_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATC_APT_22',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/15Y392y2uXAaUz2JMNiF8tpK-BSIWf_QoI6k-wems45Q/edit?usp=sharing&sheet=APT_ATC_PRE_APT&range=A5:I47',
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
