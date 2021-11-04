(function() {
    function dv(){
    
 // ENVIRONMENT - ASMA DLY - APT - TABLE
 var tbl_ASMAdly_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ASMAdly_APT_21',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/111_cmvA1iaR1lfbHUwjvFStUASfc3_iI2OkL7Yv7H4g/edit?usp=sharing&sheet=ASMA_APT&range=A5:G57',
    options: {
        allowHtml: false,
        width: 950,
        height: 280
    },
    view: {
        columns: [0, 2, 3, 4, 6]
    }
});
tbl_ASMAdly_APT.draw();      

    }

    google.setOnLoadCallback(dv);
 })();