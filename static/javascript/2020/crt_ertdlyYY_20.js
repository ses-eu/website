(function() {
    function dv(){

// CAPACITY - En-route ATFM delay - YY - CHART
var crt_ertdlyYY = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_ertdlyYY_20',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1SBEcKxOJ6Ir6109ddeH8w_MeVkQ3QR4J7LWO0cOysSk/edit?usp=sharing&alt=json&sheet=ERT_ATFM_YY&range=A5:H15',
    options: {
        width: 450,
        height: 190,
        chartArea: {
            left: 50,
            top: 30,
            width: '60%',
            height: '60%'
        },
        title: 'En-route ATFM delays (SES area)',
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
        isStacked: 'true',
        series: {
            1: {
                type: 'bars',
                color: '#7DD2F2'
            },
            0: {
                type: 'lines',
                color: 'D80032',
                lineWidth: 0.5,
                pointSize: 7
            }
        },
        vAxis: {
            title: 'minutes per flight',
            format: '0.00',
            titleTextStyle: {
                color: 'grey',
                fontSize: 10
            }
        }
    },
    view: {
        'columns': [1, 5, 2]
    }
});
crt_ertdlyYY.draw();       

    }

    google.setOnLoadCallback(dv);
 })();
