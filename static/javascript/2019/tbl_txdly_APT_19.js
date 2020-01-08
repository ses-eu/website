(function() {
    function dv(){

        // ENVIRONMENT - TAXI OUT DLY - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_txdly_APT_19',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1qmH-SPzzGZhsNVlGNLVnGU09fL5z6xW8FvDXGx7oD0o/edit?usp=sharing&sheet=TxOut_APT&range=A5:G180',
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
