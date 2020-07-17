(function() {
    function dv(){
  
// CAPACITY - Airport ATFM arrival delay - APT - TABLE
  var tbl_aptATFM_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_APT_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1vlJfrl7Bc6Vvm5jeQ-3mLkyM_VH3SeS8Xsf302lGZ30/edit?usp=sharing&sheet=APT_ATFM_APT&range=A5:F166',
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
