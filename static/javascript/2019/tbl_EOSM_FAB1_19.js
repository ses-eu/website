(function() {
    function dv(){

  // EoSM - YY - CHART - [TABLE FAB]
  var tbl_EOSM_FAB_1 = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_EOSM_FAB1_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1kp_CFuFfUVLk_4krFAzpOCuJURH6OhIKUm0YiAzAMu0/edit?usp=sharing&sheet=EoSM_FAB_MIN_LEV&range=A3:K12',
    options: {
        header: true,
        allowHtml: true,
        width: 950,
        height: 150
    },
    view: {
        columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
});
tbl_EOSM_FAB_1.draw();


    }

    google.setOnLoadCallback(dv);
 })();
