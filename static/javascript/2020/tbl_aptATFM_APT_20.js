(function() {
    function dv(){
  
// CAPACITY - Airport ATFM arrival delay - APT - TABLE
  var tbl_aptATFM_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_APT_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/16zDzNhDZUTXI3b56JD1BFqlXSrH1Q125yGT4TyDfSW4/edit?usp=sharing&sheet=APT_ATFM_APT&range=A5:F166',
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
