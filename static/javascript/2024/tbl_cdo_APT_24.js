(function() {
    function dv(){
    
        // ENVIRONMENT - SHARE OF CDO FLIGHTS - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_cdo_APT_24',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Y7fcRgPoWgbKyIg8eYGjMNrtGVmkAQ-zA8Z8Ct7vXI4/edit?usp=sharing&sheet=CDO_APT&range=A5:F155',
        options: {
            allowHtml: false,
            width: 950,
            height: 280
        },
        view: {
            columns: [0, 2, 3, 4, 5]
        }
    });
    tbl_txdly_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
