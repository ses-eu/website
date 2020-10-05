(function() {
    function dv(){
  
// CAPACITY - Airport ATFM slot adherence LOC - TABLE
  var tbl_aptATFMADH_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_LOC_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1ruCp1kGSs1LjPrA4zy_qf3Whjf1Phf_xKpOHIqhYhHs/edit?usp=sharing&sheet=APT_ATFM_ADH_LOC&range=A5:E29',
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
 
