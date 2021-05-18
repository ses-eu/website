(function() {
    function dv(){
        
        // ENVIRONMENT - SHARE OF CDO FLIGHTS - APT - TABLE
    var tbl_txdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_cdo_APT_21',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1HIvgKjrNXK9w8PO7NGpKDjR6t_Fx82l_A2MEMpyUCbs/edit?usp=sharing&sheet=CDO_APT&range=A5:F166',
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
