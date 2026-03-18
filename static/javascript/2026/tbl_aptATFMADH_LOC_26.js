(function() {
    function dv(){
        
// CAPACITY - Airport ATFM slot adherence LOC - TABLE
  var tbl_aptATFMADH_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_LOC_26',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/14yqv9v34IJ_bAwC0CqzeD5Tavb39vek87oiGgcUSQp0/edit?usp=sharing&sheet=APT_ATFM_ADH_LOC&range=A5:E28',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 1,4]
    }
});
tbl_aptATFMADH_LOC.draw();
   

    }

    google.setOnLoadCallback(dv);
 })();
 
