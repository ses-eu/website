(function() {
    function dv(){

  // ERT ATFM DLY - LOCAL level - TABLE
  var tbl_ertdly_YYtgt = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertdly_LOC_24',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1-NiEoh-kGY8HDMy07c2witfqk_3dhS_qLgkgiaWC3k0/edit?usp=sharing&sheet=ERT_ATFM_LOC&range=A5:F34&hl=en_GB',
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
