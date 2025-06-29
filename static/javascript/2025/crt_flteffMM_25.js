(function() {
    function dv(){
       
        // ENVIRONMENT - Horizontal flight efficiency - MM - CHART
var crt_flteffMM = new google.visualization.ChartWrapper({
    chartType: 'LineChart',
    containerId: 'crt_flteffMM_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1XclNBIYQi_ktTsg20-2m8ODnBCX6S5mri15YLWSVFGE/edit?usp=sharing&sheet=FLT_EFF_MM&range=A5:E89&tq=where%20E%3D1',
    options: {
        width: 450,
        height: 190,
        chartArea: {
            left: 50,
            top: 20,
            width: '60%',
            height: '60%'
        },
        title: 'Horiz. en-route flight efficiency (monthly)',
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
            0: {
                type: 'lines',
                color: '#5D7CBA',
                lineWidth: 1,
                pointSize: 2
            },
            1: {
                type: 'lines',
                color: '#339933',
                lineWidth: 1,
                pointSize: 2
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
            },
            type: 'string',
            slantedText: true,
            slantedTextAngle: 40,
            textStyle: {
                fontSize: 11
            }
        }
    },
    view: {
        'columns': [0,1,2,3]
    }
});
crt_flteffMM.draw();


        

    }

    google.setOnLoadCallback(dv);
 })();
