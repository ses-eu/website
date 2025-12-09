(function() {
    function dv(){ 
      
        // FUA - FUA indicators - CDR - TABLE
    var tbl_fua_cdr = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_fua_cdr_25',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/18Fb1FecHzC_7tiNwz827Z0ItNVAO2Q5QupZBl3fKUt0/edit?usp=sharing&sheet=FUA_IND&range=A5:G37',
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
