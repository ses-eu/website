(function() {
    function dv(){

  // CAPACITY - Airport ATFM arrival delay - LOC - TABLE
  var tbl_aptATFM_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_LOC_21',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1SC2WHZ-O-CkoEk6u9gE_kJacHWBe5Fmz7WK1b64OI7Y/edit?usp=sharing&sheet=APT_ATFM_LOC&range=A5:E28',
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
 
