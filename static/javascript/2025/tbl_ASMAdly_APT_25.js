(function() {
    function dv(){
        
 // ENVIRONMENT - ASMA DLY - APT - TABLE
 var tbl_ASMAdly_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ASMAdly_APT_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1VLt8tguTzrD2He_ZYy9-JCge7DvTabB07TvzR6iEGi8/edit?usp=sharing&sheet=ASMA_APT&range=A5:G43',
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