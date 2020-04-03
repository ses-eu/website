(function() {
    function dv(){

        // ENVIRONMENT - TAXI OUT DLY - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_txdly_APT_20',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1fXoQx06mOmoE2hQdAbaQUvq46g2oxUO79yy5TOF8Rqg/edit?usp=sharing&sheet=TxOut_APT&range=A5:G166',
        options: {
            allowHtml: false,
            width: 470,
            height: 280
        },
        view: {
            columns: [1, 2, 0, 3]
        }
    });
    tbl_txdly_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
