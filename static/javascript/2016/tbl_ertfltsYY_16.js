(function() {
    function dv(){

// TRAFFIC - ERT FLTS - TABLE
var tbl_ertflts_YY = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertflts_YY_16',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1Ip-cVibeSuNUR3Hgt_EmfN2hUh-cJyh-gXSy_wKV-20/edit?usp=sharing&sheet=ERT_FLTS_LOC&range=A5:F15',
    options:{allowHtml: false, width: 470, height: 340},
    view: {columns: [0,3,4,5]
    }
}); tbl_ertflts_YY.draw();

        
    }

    google.setOnLoadCallback(dv);
 })();
 
