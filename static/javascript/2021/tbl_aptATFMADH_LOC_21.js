(function() {
    function dv(){
        
// CAPACITY - Airport ATFM slot adherence LOC - TABLE
  var tbl_aptATFMADH_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_LOC_21',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1ZfCg7gpsIxxu2dQvOyFKLgIihzY5Cr5-X3eeq9DNjjk/edit?usp=sharing&sheet=APT_ATFM_ADH_LOC&range=A5:E29',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 1,4]
    }
});
tbl_aptATFMADH_LOC.draw();
   

    }

    google.setOnLoadCallback(dv);
 })();
 
