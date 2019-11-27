(function() {
    function dv(){

// Safety
    // EoSM - YY - CHART - [EU_YY]
    var crt_EoSMYY_ST = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'crt_EoSMYY_ST_15',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1B8pP5iI5fc5rfzqkO7PzXVuRWiP5Shjw5RYSFWr1Kw8/edit?usp=sharing&sheet=EoSM_State_Score&range=A1:C31',
        options: {
            width: 475,
            height: 230,
            chartArea: {
                left: 50,
                top: 30,
                width: '85%',
                height: '50%'
            },
            title: 'Effectiveness of Safety Management score (State level)',
            titleTextStyle: {
                color: 'grey',
                fontSize: 12
            },
            legend: 'none',
            isStacked: 'true',
            seriesType: 'bars',
            colors: ['#b3cccc'],
            vAxis: {
                title: 'EoSM score',
                titleTextStyle: {
                    color: 'grey',
                    fontSize: 11
                }
            },
            hAxis: {
                title: 'EASA verified results',
                titleTextStyle: {
                    color: 'grey',
                    fontSize: 11
                },
                type: 'string',
                slantedText: true,
                slantedTextAngle: 90,
                textStyle: {
                    color: 'grey',
                    fontSize: 10
                }
            }
        },
        view: {
            'columns': [0, 2]
        }
    });
    crt_EoSMYY_ST.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
