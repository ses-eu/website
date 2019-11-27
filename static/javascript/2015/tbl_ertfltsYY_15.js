(function() {
    function dv(){

// TRAFFIC - ERT FLTS - TABLE
var tbl_ertflts_YY = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertflts_YY_15',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1P86i-AwsgNgBkmgj7tRFbKuEzNSApMMbRs96Y14VQX8/edit?usp=sharing&sheet=ERT_FLTS_LOC&range=A5:D14',
    options:{allowHtml: false, width: 470, height: 340},
    view: {columns: [0,1,2,3]
    }
}); tbl_ertflts_YY.draw();

        
    }

    google.setOnLoadCallback(dv);
 })();
 
