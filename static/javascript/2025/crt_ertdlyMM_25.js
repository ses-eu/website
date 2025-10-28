(function() {
    function dv(){
        
// CAPACITY - En-route ATFM delay - MM - CHART
var crt_ertdlyMM = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_ertdlyMM_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1LsBj2ZnG_mejjPA3yAyqQY2nasRpOqH0VeWcowtpiTg/edit?usp=sharing&sheet=ERT_ATFM_MM&range=A5:F89&tq=where%20F%3D1',
    options: {
        width: 450,
        height: 190,
        chartArea: {
            left: 80,
            top: 30,
            width: '60%',
            height: '60%'
        },
        title: 'En-route ATFM delays (SES Area)',
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
            0: {
                type: 'lines',
                color: '#5D7CBA',
                lineWidth: 1,
                pointSize: 6
            },
            1: {
                type: 'bars',
                color: '#7DD2F2'
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
        'columns': [0, 4, 1]
    }
});
crt_ertdlyMM.draw();

    }

    google.setOnLoadCallback(dv);
 })();
 
