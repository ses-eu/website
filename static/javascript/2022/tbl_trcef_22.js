(function() {
    function dv(){
       
 // TR CEF - TABLE
 var tbl_ertcef_state = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_trcef_22',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/10MRRI9vjrSpBI2T-oMk0NBcKeWyyAMsRzNHJC2NKC8w/edit?usp=sharing&sheet=TCZ_COST&range=A2:G28&hl=en_GB',
    options: {
        allowHtml: true,
        width: 950,
        height: 280
    },
    view: {columns: [0, 1, 2, 3, 4,5,6]}
});
tbl_ertcef_state.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
 
