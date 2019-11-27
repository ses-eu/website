(function () {
    function dv() {

// CAPACITY - Airport ATFM arrival delay - MM - CHART
var crt_aptATFMsesMM = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'crt_aptATFMsesMM_16',
    dataSourceUrl: '//docs.google.com/spreadsheets/d/1_4ov3Bh400d9X2MNkXt8nH3BBpD7ipyhZULbKuGEAI4/edit?usp=sharing&sheet=APT_ATFM_SES_MM&range=A5:G65&tq=where%20G%3D1',
            options:{
                width: 450, height: 190,
                chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
                title: 'Airport arr. ATFM delays (SES-RP2 airports)',
                titleTextStyle : {color: 'grey', fontSize: 11},
                legend: {position:'right',textStyle:{color: 'grey', fontSize: 10}},
                isStacked : 'true',
                series: {
                            0: {type:'lines',color:'#5D7CBA', lineWidth: 1, pointSize: 6},
                            1: {type:'bars',color:'#7DD2F2'}
                        },
                vAxis: {title: 'minutes per arrival', format: '0.00',
                        titleTextStyle: {color: 'grey', fontSize: 10}}
                    },
    view: {'columns': [1,5,2] }
}); crt_aptATFMsesMM.draw();



    }

    google.setOnLoadCallback(dv);
})();
