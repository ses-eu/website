(function() {
    function dv(){ 
    
        // ENVIRONMENT - TAXI OUT DLY - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_txdly_APT_26',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1GoPpZZp0W-Y5IDju-oG6ovAHuKvKWNSJExh1GNYyUwQ/edit?usp=sharing&sheet=TxOut_APT&range=A5:K43',
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
