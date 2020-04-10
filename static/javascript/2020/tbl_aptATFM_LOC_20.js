(function() {
    function dv(){

  // CAPACITY - Airport ATFM arrival delay - LOC - TABLE
  var tbl_aptATFM_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_LOC_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1dbVbw8wOyO0J41Vs0yT21fX2Q-eW9iOHoFeqst92zSI/edit?usp=sharing&sheet=APT_ATFM_LOC&range=A5:E29',
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
 
