(function() {
    function dv(){


// ER CEF - STATE - TABLE
var tbl_ertcef_state = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertcef_state_18',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1NvqF2OiMmsH7LB01Or8_wrDCwq6cvwU6ysqyIMeG2MM/edit?usp=sharing&sheet=ERT_CEF_STATE&range=A2:AJ32&hl=en_GB',
    options: {
        allowHtml: true,
        width: 950,
        height: 280
    },
    view: {columns: [0, 29, 30,31,33,34,35]}
});
tbl_ertcef_state.draw();
        

    }

    google.setOnLoadCallback(dv);
 })();
 
