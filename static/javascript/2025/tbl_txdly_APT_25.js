(function() {
    function dv(){ 
     
        // ENVIRONMENT - TAXI OUT DLY - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_txdly_APT_25',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/163vbKuQUpLiZ91Mrtget6xx5hlIcW1AagfGRYiVhbIA/edit?usp=sharing&sheet=TxOut_APT&range=A5:K47',
        options: {
            allowHtml: false,
            width: 950,
            height: 280
        },
        view: {
            columns: [0, 2, 6, 10]
        }
    });
    tbl_txdly_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
