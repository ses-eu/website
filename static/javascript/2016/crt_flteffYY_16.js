(function() {
    function dv(){

// ENVIRONMENT - Horizontal flight efficiency - YY - CHART
var crt_flteffYY = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_flteffYY_16',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1N0EH3rG0k-9ornfJXWWPks8iKBB8LBsx9WyqljHhc8c/edit?usp=sharing&sheet=FLT_EFF_YY&range=A5:G10',
        options:{
                width: 450, height: 180,
                chartArea: {left: 50, top: 30, width:'55%',height:'60%'},
                title: 'Horiz. en-route flight efficiency (yearly)',
                titleTextStyle : {color: 'grey', fontSize: 11},
        legend: {
                 position: 'right',
                 textStyle: { color: 'grey', fontSize: 10 }
                },
                series: {
                            1: {type:'lines', color:'#5D7CBA', lineWidth: 1, pointSize: 3},
                            0: {type:'lines', color:'#5D7CBA', lineWidth: 1, lineDashStyle: [6, 3]},
                            3: {type:'lines', color:'#c0504d', lineWidth: 1, pointSize: 4, pointShape: 'diamond',},
                            2: {type:'lines', color:'#C0504D', lineWidth: 1, lineDashStyle: [6, 3]}
                        },
                vAxis: {
              title: 'Inefficiency (%)',
              titleTextStyle: { color: 'grey', fontSize: 10 },
              minValue: 0.02,
              maxValue: 0.06,
              viewWindow: { min: 0.02, max: 0.06 },
              format: '0.0%'
           }
                        ,
                hAxis: {title: 'Annual values for the SES-RP2 area', titleTextStyle: {color: 'grey', fontSize: 10}}
            },
            view: {columns: [1,3,4,5,6] , rows: [0,1,2,3,4] }
}); crt_flteffYY.draw();      

    }

    google.setOnLoadCallback(dv);
 })();
 
