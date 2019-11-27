(function() {
    function dv(){

  // RAT - YY - CHART - [EU_YY]
  var Y15_crt_RAT = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_RAT_15',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1dLu943x8jVOynkIaoW0LmjDFYay5ap-xvgEbPesMNfw/edit?usp=sharing&sheet=SES_RP2&range=A1:B6',
    options: {
        width: 475,
        height: 230,
        chartArea: {
            left: 50,
            top: 30,
            width: '85%',
            height: '50%'
        },
        title: ' % severity assessed with RAT (EU RP2 States)',
        titleTextStyle: {
            color: 'grey',
            fontSize: 12
        },
        legend: 'none',
        isStacked: 'true',
        seriesType: 'bars',
        colors: ['#b3cccc'],
        vAxis: {
            title: '% severity assessed',
            titleTextStyle: {
                color: 'grey',
                fontSize: 11
            }
        },
        hAxis: {
            title: 'The State level results can be found in the download file',
            titleTextStyle: {
                color: 'grey',
                fontSize: 11
            },
            type: 'string',
            //slantedText:true,
            //slantedTextAngle: 0,
            textStyle: {
                color: 'grey',
                fontSize: 11
            }
        }
    },
    view: {
        'columns': [0, 1]
    }
});
Y15_crt_RAT.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
