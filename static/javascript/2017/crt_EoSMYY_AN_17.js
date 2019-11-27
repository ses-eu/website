(function() {
    function dv(){

  // EoSM - YY - CHART - [EU_YY]
  var crt_EoSMYY_AN = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_EoSMYY_AN_17',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/19pB4z4HWfkqmMbq3ViPkTJqcnI-JrFNIvToSR-KoRj4/edit?usp=sharing&sheet=EoSM_ANSP_Score&range=A1:E32',
    options: {
        width: 475,
        height: 230,
        chartArea: {
            left: 50,
            top: 30,
            width: '85%',
            height: '50%'
        },
        title: 'Effectiveness of Safety Management score (ANSP level)',
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
            title: 'Verified by NSAs',
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
        'columns': [0, 4]
    }
});
crt_EoSMYY_AN.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
 
