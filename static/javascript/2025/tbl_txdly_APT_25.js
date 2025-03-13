(function() {
    function dv(){ 
     
        // ENVIRONMENT - TAXI OUT DLY - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_txdly_APT_25',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1ojxvYG_mxN89su6t5DPkYRynrDe36OZYImc8NeMV-dk/edit?usp=sharing&sheet=TxOut_APT&range=A5:K43',
        options: {
            allowHtml: false,
            width: 950,
            height: 280
        },
        view: {
            columns: [0, 2, 4, 8]
        }
    });
    tbl_txdly_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
