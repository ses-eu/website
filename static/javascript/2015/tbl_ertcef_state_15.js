(function() {
    function dv(){

// ER CEF - STATE - TABLE
var tbl_ertcef_state = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertcef_state_15',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1jWrtRM0uPPwNBSh9EMKL9ZJqMf7v3R_xz4PWNU0yu-w/edit?usp=sharing&sheet=ERT_CEF_STATE&range=A2:AJ32&hl=en_GB',
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
 
