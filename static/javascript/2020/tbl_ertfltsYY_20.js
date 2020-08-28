(function() {
    function dv(){

 // TRAFFIC - ERT FLTS - TABLE
    var tbl_ertflts_YY = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_ertfltsYY_20',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Mdd8_RcoFOEqAW2c7er2n3hglmL6Df4e6Z30d071gnU/edit?usp=sharing&sheet=ERT_FLTS_LOC&range=A5:F35',
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
