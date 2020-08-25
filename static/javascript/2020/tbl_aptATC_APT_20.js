(function() {
    function dv(){
    
  // CAPACITY - Airport ATC pre-departure APT - TABLE
  var tbl_aptATC_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATC_APT_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Wq-Gz2vlOEasKp5TTM5lFuBJ8268agdf1vk_LQjOh-I/edit?usp=sharing&sheet=APT_ATC_PRE_APT&range=A5:H57',
    options: {
        allowHtml: true,
        width: 950,
        height: 280
    },
    view: {
        columns: [0, 2, 3, 5, 7]
    }
});
tbl_aptATC_APT.draw();     

    }

    google.setOnLoadCallback(dv);
 })();
