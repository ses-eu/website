(function() {
    function dv(){

// CAPACITY - Airport ATFM slot adherence APT - TABLE
  var tbl_aptATFMADH_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_APT_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1az6CqN0NN07jjyY43jj0ZvYOj91t7NeoaxcANS7dGpM/edit?usp=sharing&sheet=APT_ATFM_ADH_APT&range=A5:D180',
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