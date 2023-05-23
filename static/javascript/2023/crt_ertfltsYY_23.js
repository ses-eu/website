(function() {
   function dv(){
    // TRAFFIC - ERT FLTS - YY - CHART 
      var crt_ertfltsYY = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'crt_ertfltsYY_23',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/18fD66LXnK7bMwZbnA_tdBxRz3xZdGZayHpgwlKlhwxc/edit?usp=sharing&sheet=ERT_FLTS_YY&range=A5:E15',
        options: {
            width: 450,
            height: 170,
            chartArea: {
                left: 80,
                top: 30,
                width: '60%',
                height: '65%'
            },
            title: 'Average daily IFR flights (EU-wide)',
            titleTextStyle: {
                color: '#1F1F2E',
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
                    pointSize: 7,
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
                    title: 'year on year (%)',
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
            columns: [0, 3, 4],
            rows: [0, 1, 2, 3, 4,5,6,7,8,9]
        }
    });
    crt_ertfltsYY.draw();    
   
    }

   google.setOnLoadCallback(dv);
})();
