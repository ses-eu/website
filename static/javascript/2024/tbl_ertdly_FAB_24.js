(function() {
    function dv(){
       
  // ERT ATFM DLY - FAB level - TABLE
  var tbl_ertdly_YYtgt = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertdly_FAB_24',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1oxnaVNvcIRpap-yb6BwvV-Wfnu33fKgsDae8ooXOFyQ/edit?usp=sharing&sheet=ERT_ATFM_FAB&range=A5:F15&hl=en_GB',
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
