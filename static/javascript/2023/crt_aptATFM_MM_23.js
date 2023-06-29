(function () {
    function dv() {
        // CAPACITY - Airport ATFM arrival delay - MM - CHART
        var crt_aptATFMsesMM = new google.visualization.ChartWrapper({
            chartType: 'ComboChart',
            containerId: 'crt_aptATFM_MM_23',
            dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Fm3BEMVdN1wDlyzmspeBfmIjyHxJ8-9UhuOAN_5J-DI/edit?usp=sharing&sheet=APT_ATFM_SES_MM&range=A5:F77&tq=where%20F%3D1',
            options: {
                width: 450,
                height: 190,
                chartArea: {
                    left: 80,
                    top: 30,
                    width: '60%',
                    height: '60%'
                },
                title: 'Airport arr. ATFM delays (SES-RP3 airports)',
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
                series: {
                    0: {
                        type: 'lines',
                        color: '#5D7CBA',
                        lineWidth: 1,
                        pointSize: 6
                    },
                    1: {
                        type: 'bars',
                        color: '#7DD2F2'
                    }
                },
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
                'columns': [0, 4, 1]
            }
        });
        crt_aptATFMsesMM.draw();

    }

    google.setOnLoadCallback(dv);
})();
