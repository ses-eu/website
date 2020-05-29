(function() {
    function dv(){

  // EoSM - YY - CHART - [TABLE STATE LEVEL]
  var tbl_EOSM_STA = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_EOSM_STA_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1kp_CFuFfUVLk_4krFAzpOCuJURH6OhIKUm0YiAzAMu0/edit?usp=sharing&sheet=EoSM_State_MIN_LEV&range=A3:J33',
    options: {
        header: true,
        allowHtml: true,
        width: 950,
        height: 150
    },
    view: {
        columns: [1, 3, 4, 5, 6, 7, 8, 9]
    }
});
tbl_EOSM_STA.draw();
    

    }

    google.setOnLoadCallback(dv);
 })();