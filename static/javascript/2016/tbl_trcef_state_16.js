(function() {
    function dv(){

 // TRM CEF - TCZ - TABLE
 var tbl_trcef_state = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_trcef_state_16',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/11HvNJxV1uOvywak5seqy2CXGEKWl7jUJVdBO_MrE98w/edit?usp=sharing&sheet=TRM_CEF_STATE&range=A2:AJ39&hl=en_GB',
    options: {
        allowHtml: true,
        width: 950,
        height: 280
    },
    view: {columns: [0, 29, 30,31,33,34,35]}
});
tbl_trcef_state.draw();

    
    }

    google.setOnLoadCallback(dv);
 })();
 
