(function() {
    function dv(){
    
        // ENVIRONMENT - Vertical flight efficiency - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_vfe_APT_25',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1fQIrZtW_N2UcQiK5i6vDavf1bLOLDeePUsj53LW-4m4/edit?usp=sharing&sheet=CDO_APT&range=A5:I194',
        options: {
            allowHtml: false,
            width: 950,
            height: 280
        },
        view: {
            columns: [0, 2, 5, 8]
        }
    });
    tbl_txdly_APT.draw();

    }
   
    google.setOnLoadCallback(dv);
 })();
