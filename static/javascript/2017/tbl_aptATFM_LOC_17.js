(function() {
    function dv(){

  // CAPACITY - Airport ATFM arrival delay - LOC - TABLE
  var tbl_aptATFM_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_LOC_17',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1B7Z0zh1I1ghhK6WwN_YfeWA5rRFlTbFVZgeGr2_mw7M/edit?usp=sharing&sheet=APT_ATFM_LOC&range=A5:G35',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 1, 2, 3, 4]
    }
});
tbl_aptATFM_LOC.draw();
     
    }

    google.setOnLoadCallback(dv);
 })();
 
