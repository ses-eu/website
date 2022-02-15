(function() {
    function dv(){
        
 // TRAFFIC - ERT FLTS - TABLE 
    var tbl_ertflts_YY = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_ertfltsYY_22',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/14l5YoG_OwUWVC0uJf5jnvofwVGz9-hhA4JgggVM5TAc/edit?usp=sharing&sheet=ERT_FLTS_LOC&range=A5:F34',
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
