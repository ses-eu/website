(function() {
    function dv(){
  
// CAPACITY - Airport ATFM arrival delay - APT - TABLE
  var tbl_aptATFM_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_APT_21',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1WQlLh3Eei5kFpNJ6uIboJfjh9CdT54OjQmjeGy1J424/edit?usp=sharing&sheet=APT_ATFM_APT&range=A5:F155',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [1, 0, 3]
    }
});
tbl_aptATFM_APT.draw();
        
    }

    google.setOnLoadCallback(dv);
 })();
