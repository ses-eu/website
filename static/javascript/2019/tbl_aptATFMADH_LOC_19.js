(function() {
    function dv(){
  
// CAPACITY - Airport ATFM slot adherence LOC - TABLE
  var tbl_aptATFMADH_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_LOC_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1az6CqN0NN07jjyY43jj0ZvYOj91t7NeoaxcANS7dGpM/edit?usp=sharing&sheet=APT_ATFM_ADH_LOC&range=A5:B35',
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
 
