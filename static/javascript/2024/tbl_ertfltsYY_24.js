(function() {
    function dv(){
        
 // TRAFFIC - ERT FLTS - TABLE 
    var tbl_ertflts_YY = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_ertfltsYY_24',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/17VnSi6nb97_Tyiz0rm1w8sSfLbztv9kmovnRB_7AL_M/edit?usp=sharing&sheet=ERT_FLTS_LOC&range=A5:F34',
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
