(function() {
    function dv(){

 // CAPACITY - Airport ATFM slot adherence APT - TABLE
 var tbl_aptATFMADH_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_APT_18',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1nrNr3HaDou6A3k3GkTNwRRIGxwHq0vSDIp1sT1i_gxM/edit?usp=sharing&sheet=APT_ATFM_ADH_APT&range=A5:D180',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [1, 2, 0, 3]
    }
});
tbl_aptATFMADH_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
 
