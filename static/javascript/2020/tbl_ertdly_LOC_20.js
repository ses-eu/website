(function() {
    function dv(){

  // ERT ATFM DLY - LOCAL level - TABLE
  var tbl_ertdly_YYtgt = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertdly_LOC_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1SBEcKxOJ6Ir6109ddeH8w_MeVkQ3QR4J7LWO0cOysSk/edit?usp=sharing&sheet=ERT_ATFM_LOC&range=A5:F34&hl=en_GB',
    options: {
        allowHtml: false,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 1, 4, 5]
    }
});
tbl_ertdly_YYtgt.draw();

    }

    google.setOnLoadCallback(dv);
 })();
