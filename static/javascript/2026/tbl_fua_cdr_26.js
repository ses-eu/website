(function() {
    function dv(){ 
      
        // FUA - FUA indicators - CDR - TABLE
    var tbl_fua_cdr = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_fua_cdr_26',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1bdrJ4geDPrzrTdz3RDcNqGyG8iepJeWhyeIIq-owp6U/edit?usp=sharing&sheet=FUA_IND&range=A5:G37',
        options: {
            allowHtml: false,
            width: 460,
            height: 360
        },
        view: {
            columns: [0, 2, 3]
        }
    });
    tbl_fua_cdr.draw();

    }

    google.setOnLoadCallback(dv);
 })();
