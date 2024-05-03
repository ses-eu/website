(function() {
    function dv(){
        
 // ER CEF - TABLE
 var tbl_ertcef_state = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertcef_23',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1lUVcEFH2P_hrH9KcN0y42OVwD-LDFKMMsjEd8mVDmSQ/edit?usp=sharing&sheet=ERT_CEF&range=A2:G31&hl=en_GB',
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
 
