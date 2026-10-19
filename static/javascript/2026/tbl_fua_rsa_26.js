(function() {
    function dv(){ 
       
        // FUA - FUA indicators RSA - TABLE
    var tbl_fua_rsa = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_fua_rsa_26',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1wO9f3mH1N2_-zdMQDx8eQvdb3qCxRy2A5bnU1VmB53U/edit?usp=sharing&sheet=FUA_IND&range=A5:G37',
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
