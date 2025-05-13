(function() {
    function dv(){ 
      
        // FUA - FUA indicators - TABLE
    var tbl_fua_ind = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_fua_ind_25',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1ATwDWgNk96VciFLbMjwJcnivB-u8NQGKNGKOJ19JNOY/edit?usp=sharing&sheet=FUA_IND&range=A5:I34',
        options: {
            allowHtml: false,
            width: 950,
            height: 280
        },
        view: {
            columns: [0, 2, 3, 4,5,6,7,8]
        }
    });
    tbl_fua_ind.draw();

    }

    google.setOnLoadCallback(dv);
 })();
