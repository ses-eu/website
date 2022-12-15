(function() {
    function dv(){

 // ENVIRONMENT - Horizontal flight efficiency - YY - CHART
 var crt_flteffYY = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_flteffYY_22',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1F6isGeLjNPAqkMLQYO8Cj0J8-JsLq_vDzY_KIDQ0DZE/edit?usp=sharing&sheet=FLT_EFF_YY&range=A5:G14',
    options: {
        width: 450,
        height: 190,
        chartArea: {
            left: 50,
            top: 30,
            width: '60%',
            height: '60%'
        },
        title: 'Horiz. en-route flight efficiency (yearly)',
        titleTextStyle: {
            color: 'grey',
            fontSize: 11
        },
        legend: {
            position: 'right',
            textStyle: {
                color: 'grey',
                fontSize: 10
            }
        },
        series: {
            1: {
                type: 'lines',
                color: '#339933',
                lineWidth: 1,
                pointSize: 2
            },
            0: {
                type: 'lines',
                color: '#5D7CBA',
                lineWidth: 1,
                pointSize: 2
            },
            3: {
                type: 'lines',
                color: '#c0504d',
                lineWidth: 1,
                lineDashStyle: [6, 3],

            },
            2: {
                type: 'lines',
                color: '#C0504D',
                lineWidth: 1,
                pointSize: 4,
                pointShape: 'diamond'
            }
        },
        vAxis: {
            title: 'Inefficiency (%)',
            titleTextStyle: {
                color: 'grey',
                fontSize: 10
            },
            minValue: 0.02,
            maxValue: 0.05,
            viewWindow: {
                min: 0.02,
                max: 0.05
            },
            format: '0.0%'
        },
        hAxis: {
            title: 'SES area (12 months rolling)',
            titleTextStyle: {
                color: 'grey',
                fontSize: 10
            }
        }
    },
    view: {
        columns: [1, 3, 4, 5, 6],
        rows: [0, 1, 2, 3, 4,5,6,7,8]
    }
});
crt_flteffYY.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
 

