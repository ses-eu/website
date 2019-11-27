(function() {
    function dv(){

// ERT SU - YY - CHART vs target - [EU_YY]
var crt_ertSUYYvstgt = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_ertSUYYvstgt_15',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1wCl2GdiXRu5i6voPakm1vm6pWSSx20XmWa6ig7dMF7Q/edit?usp=sharing&sheet=ERT_SU_CZ&range=A5:M36',
    options:{
                width: 475, height: 400,
                chartArea: {left: 55, top: 30, width:'80%',height:'50%'},
                titleTextStyle : {color: 'grey', fontSize: 12},
                legend: {position:'bottom',textStyle:{color: 'grey', fontSize: 10}},
                series: {
                            0: {type:'bars',color:'#7DD2F2'},
                            1: {type:'lines',color:'green', lineWidth: 1},
                            2: {type:'lines',color:'D80032', lineWidth: 1}
                        },
                vAxis: {title: 'actual vs. determined ERT SU',  format: '0%', viewWindow: { min: -0.15, max: 0.35 }, textStyle: {color: 'grey', fontSize: 11},
                        titleTextStyle: {color: 'grey', fontSize: 10}},
                hAxis: {slantedTextAngle: 90,
                        textStyle: {color: 'grey', fontSize: 10}}
            },
    view: {'columns': [0,8,10,12]}
}); crt_ertSUYYvstgt.draw();

        

    }

    google.setOnLoadCallback(dv);
 })();
 
