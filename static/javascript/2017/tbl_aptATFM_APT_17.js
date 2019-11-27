(function() {
    function dv(){
  
  // CAPACITY - Airport ATFM arrival delay - APT - TABLE
  var tbl_aptATFM_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_APT_17',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1B7Z0zh1I1ghhK6WwN_YfeWA5rRFlTbFVZgeGr2_mw7M/edit?usp=sharing&sheet=APT_ATFM_APT&range=A5:F180',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [1, 2, 0, 3]
    }
});
tbl_aptATFM_APT.draw();
        
    }

    google.setOnLoadCallback(dv);
 })();
