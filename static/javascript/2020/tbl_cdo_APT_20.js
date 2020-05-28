(function() {
    function dv(){
        
        // ENVIRONMENT - SHARE OF CDO FLIGHTS - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_cdo_APT_20',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1TjRT0KGZIhfusSSC2vVw26MGjGCR-az74UkRycY-OhY/edit?usp=sharing&sheet=CDO_APT&range=A5:F166',
        options: {
            allowHtml: false,
            width: 470,
            height: 280
        },
        view: {
            columns: [1, 2, 0, 5]
        }
    });
    tbl_txdly_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
