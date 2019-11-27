(function() {
    function dv(){

     // CAPACITY - Airport ATC pre-departure APT - TABLE
     var tbl_aptATC_APT = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'tbl_aptATC_APT_18',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/101WEkDdcwYKKvrNCoWOEUc-5qATg9TtTBK-r27A2gu8/edit?usp=sharing&sheet=APT_ATC_PRE_APT&range=A5:F180',
        options: {
            allowHtml: true,
            width: 470,
            height: 280
        },
        view: {
            columns: [1, 2, 0, 3]
        }
    });
    tbl_aptATC_APT.draw();

    }

    google.setOnLoadCallback(dv);
 })();
