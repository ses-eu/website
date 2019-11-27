(function() {
    function dv(){
  
// CAPACITY - Airport ATFM arrival delay - APT - TABLE
var tbl_aptATFM_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFM_APT_15',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1zVVd9DxxtVzExBuFLxZiDw7LTD65LDnd1CPaF3kN3HM/edit?usp=sharing&sheet=APT_ATFM_APT&range=A5:F178',
    options:{ allowHtml:true, width: 470, height: 280},
    view: {columns: [1,2,0,3]}
}); tbl_aptATFM_APT.draw();
        
    }

    google.setOnLoadCallback(dv);
 })();
