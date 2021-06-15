(function() {
    function dv(){
        
        // ENVIRONMENT - SHARE OF CDO FLIGHTS - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_cdo_APT_20',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1m4wvV5KC-CxkrDd57pHPY7PmmxdmRSYlO_DRYyHdQD8/edit?usp=sharing&sheet=CDO_APT&range=A5:F156',
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
