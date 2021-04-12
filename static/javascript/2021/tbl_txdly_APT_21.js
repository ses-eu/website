(function() {
    function dv(){
        
        // ENVIRONMENT - TAXI OUT DLY - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_txdly_APT_21',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1pH9MhC__KUHSWidMHMR0-szAawpJzTfx7JkZtx2HqFA/edit?usp=sharing&sheet=TxOut_APT&range=A5:G57',
        options: {
            allowHtml: false,
            width: 950,
            height: 280
        },
        view: {
            columns: [0, 2, 3, 4, 6]
        }
    });
    tbl_txdly_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();