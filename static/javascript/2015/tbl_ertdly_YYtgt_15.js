(function() {
    function dv(){
 
// ERT ATFM DLY - YY EU wide - TABLE
var tbl_ertdly_YYtgt = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertdly_YYtgt_15',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1UTQYzB6Ct2IiD0kMpdaMg_CxSKYF_tDSNanmClT3APU/edit?usp=sharing&sheet=ERT_ATFM_LOC&range=A5:F15&hl=en_GB',
    options:{allowHtml: false, width: 470, height: 280},
    view: {columns: [0,1,4,5]
    }
}); tbl_ertdly_YYtgt.draw();

    }

    google.setOnLoadCallback(dv);
 })();
