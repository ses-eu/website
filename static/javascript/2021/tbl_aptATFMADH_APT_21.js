(function() {
    function dv(){
  
// CAPACITY - Airport ATFM slot adherence APT - TABLE
  var tbl_aptATFMADH_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_APT_21',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1_GCLDnKGKJtwqyrtCSwy8eGfkKVX2mgKbowTtxq0So8/edit?usp=sharing&sheet=APT_ATFM_ADH_APT&range=A5:D166',
    options:  {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [1, 0, 3]
    }
});
tbl_aptATFMADH_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();