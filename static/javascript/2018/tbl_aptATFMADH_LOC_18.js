(function() {
    function dv(){
  

     // CAPACITY - Airport ATFM slot adherence LOC - TABLE
     var tbl_aptATFMADH_LOC = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_aptATFMADH_LOC_18',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1nrNr3HaDou6A3k3GkTNwRRIGxwHq0vSDIp1sT1i_gxM/edit?usp=sharing&sheet=APT_ATFM_ADH_LOC&range=A5:B35',
        options: {
            allowHtml: true,
            width: 470,
            height: 280
        },
        view: {
            columns: [0, 1]
        }
    });
    tbl_aptATFMADH_LOC.draw();

    }

    google.setOnLoadCallback(dv);
 })();
 
