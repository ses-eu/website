(function() {
    function dv(){
       
  // CAPACITY - Airport ATFM arrival delay - LOC - TABLE
  var tbl_aptATFM_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_LOC_22',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1wS3yYBd3N0n4n6lM8vzYRgTn4jYTQd9K1z-RpZf6fqU/edit?usp=sharing&sheet=APT_ATFM_LOC&range=A5:E28',
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
 
