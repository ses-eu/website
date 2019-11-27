(function() {
    function dv(){

  // EoSM - YY - CHART - [EU_YY]
  var crt_EoSMYY_ST = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_EoSMYY_ST_18',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1hVbkaAroiO-uo6hDSZYZ1nF5qExhJ6TwQKRTDcz-uk4/edit?usp=sharing&sheet=EoSM_State_Score&range=A1:F31',
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
        colors: ['#7DD2F2'],
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
        'columns': [0, 5]
    }
});
crt_EoSMYY_ST.draw();
        

    }

    google.setOnLoadCallback(dv);
 })();
