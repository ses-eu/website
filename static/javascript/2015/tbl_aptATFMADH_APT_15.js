(function() {
    function dv(){

// CAPACITY - Airport ATFM slot adherence APT - TABLE
var tbl_aptATFMADH_APT = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_aptATFMADH_APT_15',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1lLqNOucP0VzGB1-hAOb5Tv3NoJToc9rc47fEalvGjVI/edit?usp=sharing&sheet=APT_ATFM_ADH_APT&range=A5:D178',
    options:{ allowHtml:true, width: 470, height: 280},
    view: {columns: [1,2,0,3]}
}); tbl_aptATFMADH_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
 
