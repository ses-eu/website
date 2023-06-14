(function() {
    function dv(){
        
        // CAPACITY - Airport ATFM arrival delay - YY - CHART
  var crt_aptATFMsesYY = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_aptATFM_YY_23',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1EcbiD78H2JqqjqcfpSBHlWN4JqhrlfMfs-gVKQYX2eE/edit?usp=sharing&sheet=APT_ATFM_SES_YY&range=A5:D14',
    options: {
        width: 450,
        height: 190,
        chartArea: {
            left: 80,
            top: 30,
            width: '60%',
            height: '60%'
        },
        title: 'Airport ATFM arrival delays (SES-RP3 airports)',
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
        seriesType: 'bars',
        colors: ['#7DD2F2'],
        vAxis: {
            title: 'minutes per arrival',
            format: '0.00',
            titleTextStyle: {
                color: 'grey',
                fontSize: 10
            }
        }
    },
    view: {
        columns: [0, 1],
        
    }
});
crt_aptATFMsesYY.draw();      

    }

    google.setOnLoadCallback(dv);
 })();
 
