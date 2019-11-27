(function() {
    function dv(){

 // ENVIRONMENT - ASMA DLY - APT - TABLE
    var tbl_ASMAdly_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_ASMAdly_APT_18',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1SWEjdnPSoUMjV4ro6sw4IXj_WDXp9pcseavJAF7V5E0/edit?usp=sharing&sheet=ASMA_APT&range=A5:G180',
        options: {
            allowHtml: false,
            width: 470,
            height: 280
        },
        view: {
            columns: [1, 2, 0, 3]
        }
    });
    tbl_ASMAdly_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
 
