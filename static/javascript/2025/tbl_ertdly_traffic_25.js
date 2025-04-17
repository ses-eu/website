(function() {
    function dv(){

 // CAPACITY - Share of en-route ATFM delay when traffic above forecast - ACC - TABLE
 var tbl_CapTraffic_ACC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertdly_traffic_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Mj9Slsje8pbl6eC2SFFyX1ziRn2q-Q_W_dQy9tm1Ars/edit?usp=sharing&sheet=CAP_ERT_DLY_Traffic&range=A5:G55',
    options: {
        allowHtml: false,
        width: 950,
        height: 280
    },
    view: {
        columns: [0, 1, 2, 4, 5,6]
    }
});
tbl_CapTraffic_ACC.draw();      

    }

    google.setOnLoadCallback(dv);
 })();