(function() {
    function dv(){

// TRAFFIC - ERT FLTS - MM - CHART 
var crt_ertfltsMM = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_ertfltsMM_25',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1aupy2Snn-mQZkxpBchZv8GsjNFjZPR5hFYVPmk5noNk/edit?usp=sharing&sheet=ERT_FLTS_MM&range=A4:I136&tq=where%20I%3D1',
    options: {
        width: 450,
        height: 190,
        chartArea: {
            left: 80,
            top: 30,
            width: '60%',
            height: '60%'
        },
        title: 'Avg. daily IFR flights',
        titleTextStyle: {
            color: 'grey',
            fontSize: 12
        },
        legend: 'none',
        series: {
            0: {
                type: 'bars',
                color: '#7DD2F2',
                targetAxisIndex: 0
            },
            1: {
                type: 'lines',
                color: '#B89470',
                lineWidth: 2,
                pointSize: 6,
                targetAxisIndex: 1
            }
        },
        vAxes: {
            0: {
                title: 'Avg. daily IFR flights',
                titleTextStyle: {
                    color: '#1F1F2E',
                    fontSize: 11
                },
                minValue: 0.00,
                textStyle: {
                    color: '#1F1F2E'
                }
            },
            1: {
                title: 'cum. change vs. prev. year (%)',
                titleTextStyle: {
                    color: '#1F1F2E',
                    fontSize: 11
                },
                maxValue: 0.04,
                textStyle: {
                    color: '#B89470'
                }
            }
        }
    },
    view: {
        columns: [2, 6, 7]
    }
});
crt_ertfltsMM.draw();

    }

    google.setOnLoadCallback(dv);
 })();
 