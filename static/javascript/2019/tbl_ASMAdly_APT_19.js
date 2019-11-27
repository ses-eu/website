(function() {
    function dv(){

 // ENVIRONMENT - ASMA DLY - APT - TABLE
 var tbl_ASMAdly_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ASMAdly_APT_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1qJNlHQmPPO3-nWkejUY47a0GdbdOQReYUKqd-BMhu1U/edit?usp=sharing&sheet=ASMA_APT&range=A5:G180',
    options: {
        allowHtml: false,
        width: 470,
        height: 280
    },
    view: {
        columns: [1, 2, 0, 3]
    }
});
tbl_ASMAdly_APT.draw();      

    }

    google.setOnLoadCallback(dv);
 })();

