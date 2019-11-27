(function() {
    function dv(){

// CAPACITY - Airport ATC pre-departure LOC - TABLE
var tbl_aptATC_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATC_LOC_15',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1zXlIq03BmyXP8h8mhYyj8PTPNOHjZz_eYP1v5gVES3c/edit?usp=sharing&sheet=APT_ATC_PRE_LOC&range=A5:E35',
    options:{ allowHtml:true, width: 470, height: 280},
    view: {columns: [0,4,1]}
}); tbl_aptATC_LOC.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
 
