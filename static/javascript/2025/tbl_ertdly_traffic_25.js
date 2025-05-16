(function() {
    function dv(){

 // CAPACITY - Share of en-route ATFM delay when traffic above forecast - ACC - TABLE
 var tbl_CapTraffic_ACC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertdly_traffic_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1dkm_e496ko6SRHt0m4yG01R3VqUb6yAxjQtBlDVU9_s/edit?usp=sharing&sheet=CAP_ERT_DLY_Traffic&range=A5:G55',
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