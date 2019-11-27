(function() {
    function dv(){

// CAPACITY - En-route ATFM delay - YY - CHART
var crt_ertdlyYY = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_ertdlyYY_16',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1qrQvx2VBM5ig-HGvIIbHk_kkjJoQa5Wx0QOtC_4xIPE/edit?usp=sharing&alt=json&sheet=ERT_ATFM_YY&range=A5:F10',
    options:{
                width: 450, height: 160,
                chartArea: {left: 50, top: 30, width:'55%',height:'60%'},
                title: 'En-route ATFM delays (SES RP2 area)',
                titleTextStyle : {color: 'grey', fontSize: 11},
                legend: {position:'right',textStyle:{color: 'grey', fontSize: 10}},
                isStacked : 'true',
                series: {
                            1: {type:'bars',color:'#7DD2F2'},
                            0: {type:'lines',color:'D80032', lineWidth: 0.5, pointSize: 7}
                        },
                vAxis: {title: 'minutes per flight', format: '0.00',
                        titleTextStyle: {color: 'grey', fontSize: 10}}
            },
    view: {'columns': [0,4,1]}
}); crt_ertdlyYY.draw();

    }

    google.setOnLoadCallback(dv);
 })();
