(function() {
    function dv(){
        
// CAPACITY - En-route ATFM delay - YY - CHART
var crt_ertdlyYY = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_ertdlyYY_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1x8wCTxCK6Mg07Z8LZKtqoP_TMm-_89PJ6_d4Ksu1JdI/edit?usp=sharing&alt=json&sheet=ERT_ATFM_YY&range=A5:H16',
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
