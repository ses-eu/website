(function() {
    function dv(){

  // CAPACITY - Airport ATFM arrival delay - LOC - TABLE
  var tbl_aptATFM_LOC = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_LOC_23',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/14cwbCYNlJm23UXD08VW3ZoI4ghCg61k7jD0UOTSTwpk/edit?usp=sharing&sheet=APT_ATFM_LOC&range=A5:E28',
    options: {
        allowHtml: true,
        width: 470,
        height: 280
    },
    view: {
        columns: [0, 1, 4]
    }
});
tbl_aptATFM_LOC.draw();
     
    }

    google.setOnLoadCallback(dv);
 })();
 
