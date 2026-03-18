(function() {
    function dv(){

// CAPACITY - Airport ATFM slot adherence APT - TABLE
  var tbl_aptATFMADH_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_APT_26',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/14yqv9v34IJ_bAwC0CqzeD5Tavb39vek87oiGgcUSQp0/edit?usp=sharing&sheet=APT_ATFM_ADH_APT&range=A5:D155',
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