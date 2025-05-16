(function() {
    function dv(){
        
 // CAPACITY - Weighted avg. peak IFR/hr (top 3 hrs, weighted by daily IFR) - ACC - TABLE
 var tbl_CapTrough_ACC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertcap_through_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/18Ebt95Z-p3NVksOP0iMgcOEE_sZvkziqmldGW5pJBUg/edit?usp=sharing&sheet=CAP_ERT_ACC_THROUGH&range=A5:E54',
    options: {
        allowHtml: false,
        width: 950,
        height: 280
    },
    view: {
        columns: [0, 1, 3, 4]
    }
});
tbl_CapTrough_ACC.draw();      

    }

    google.setOnLoadCallback(dv);
 })();