(function() {
    function dv(){


  // TRAFFIC - ERT FLTS - TABLE
  var tbl_ertflts_YY = new google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'tbl_ertflts_YY_17',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1irxYqcplRYCCrMR8IuUE-qkcSM-jV_RJxioshC3cxUw/edit?usp=sharing&sheet=ERT_FLTS_LOC&range=A5:F15',
    options: {
        allowHtml: false,
        width: 470,
        height: 340
    },
    view: {
        columns: [0, 3, 4, 5]
    }
});
tbl_ertflts_YY.draw();
        
    }

    google.setOnLoadCallback(dv);
 })();
 
