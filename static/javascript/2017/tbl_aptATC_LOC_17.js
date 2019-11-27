(function() {
    function dv(){


  // CAPACITY - Airport ATC pre-departure LOC - TABLE
  var tbl_aptATC_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATC_LOC_17',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/12f_aNGxMAQAMKpPHaUVGZkNgc1L6e4t7zTeug19j8kU/edit?usp=sharing&sheet=APT_ATC_PRE_LOC&range=A5:E35',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 4, 1]
    }
});
tbl_aptATC_LOC.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
 
