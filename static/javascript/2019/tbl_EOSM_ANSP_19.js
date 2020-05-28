(function() {
    function dv(){

  // EoSM - YY - CHART - [TABLE ANSP LEVEL]
  var tbl_EOSM_ANSP = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_EOSM_ANSP_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1kp_CFuFfUVLk_4krFAzpOCuJURH6OhIKUm0YiAzAMu0/edit?usp=sharing&sheet=EoSM_ANSP_MIN_LEV&range=A3:J34',
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
tbl_EOSM_ANSP.draw();
        
    }

    google.setOnLoadCallback(dv);
 })();
