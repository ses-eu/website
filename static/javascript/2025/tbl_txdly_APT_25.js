(function() {
    function dv(){ 
     
        // ENVIRONMENT - TAXI OUT DLY - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_txdly_APT_25',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1g5eQuoYBKKi8cTfYqI13db4fix3coq4z6qnff9R-JuI/edit?usp=sharing&sheet=TxOut_APT&range=A5:K43',
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
