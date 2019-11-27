(function() {
    function dv(){

        // ENVIRONMENT - Horizontal flight efficiency - MM - CHART
var crt_flteffMM = new google.visualization.ChartWrapper({
    chartType: 'LineChart',
    containerId: 'crt_flteffMM_19',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1-NSy70upgGUyNPBCbcIGbNS3xi63FsRxcDtTCxOcOp8/edit?usp=sharing&sheet=FLT_EFF_MM&range=A5:F65&tq=where%20F%3D1',
    options: {
        width: 450,
        height: 190,
        chartArea: {
            left: 50,
            top: 30,
            width: '55%',
            height: '50%'
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
                color: '#c0504d',
                lineWidth: 1,
                pointSize: 4,
                pointShape: 'diamond'
            },
            1: {
                type: 'lines',
                color: '#5D7CBA',
                lineWidth: 1,
                pointSize: 3
            }
        },
        vAxis: {
            title: 'Inefficiency (%)',
            titleTextStyle: {
                color: 'grey',
                fontSize: 10
            },
            minValue: 0.02,
            maxValue: 0.06,
            viewWindow: {
                min: 0.02,
                max: 0.06
            },
            format: '0.0%'
        },
        hAxis: {
            title: 'Monthly values for the SES-RP2 area',
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
        'columns': [0, 3, 4]
    }
});
crt_flteffMM.draw();


        

    }

    google.setOnLoadCallback(dv);
 })();
 
