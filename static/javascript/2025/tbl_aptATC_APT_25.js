(function() {
    function dv(){
        
  // CAPACITY - Airport ATC pre-departure APT - TABLE
  var tbl_aptATC_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATC_APT_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1V2PoqGWVXl-ZLuGwXW4dWKj-QYzlG2MKmi0I_oGd898/edit?usp=sharing&sheet=APT_ATC_PRE_APT&range=A5:I43',
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
 