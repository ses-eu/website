(function() {
    function dv(){ 
      
        // FUA - FUA indicators RSA - TABLE
    var tbl_fua_rsa = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_fua_rsa_26',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1bdrJ4geDPrzrTdz3RDcNqGyG8iepJeWhyeIIq-owp6U/edit?usp=sharing&sheet=FUA_IND&range=A5:G37',
        options: {
            allowHtml: false,
            width: 460,
            height: 360
        },
        view: {
            columns: [0, 4, 5, 6]
        }
    });
    tbl_fua_rsa.draw();

    }

    google.setOnLoadCallback(dv);
 })();
