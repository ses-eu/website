(function() {
    function dv(){

  // CAPACITY - Airport ATFM arrival delay - LOC - TABLE
  var tbl_aptATFM_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_LOC_21',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/18Kdflt6hZ4BvejKySVNay7P2S5GGe9j-iOQmBwqugsg/edit?usp=sharing&sheet=APT_ATFM_LOC&range=A5:E29',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 1, 4]
    }
});
tbl_aptATFM_LOC.draw();
     
    }

    google.setOnLoadCallback(dv);
 })();
 
