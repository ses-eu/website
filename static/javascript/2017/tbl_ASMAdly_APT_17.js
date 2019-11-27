(function() {
    function dv(){

        // ENVIRONMENT - ASMA DLY - APT - TABLE
        var tbl_ASMAdly_APT = new google.visualization.ChartWrapper({
            chartType: 'Table',
            containerId: 'tbl_ASMAdly_APT_17',
            dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1FQzn2r-KuHO5WG6RhB6k096fSbkGOvk6yA7diM-YfnA/edit?usp=sharing&sheet=ASMA_APT&range=A5:G180',
            options: {
                allowHtml: false,
                width: 470,
                height: 280
            },
            view: {
                columns: [1, 2, 0, 3]
            }
        });
        tbl_ASMAdly_APT.draw();  

    }

    google.setOnLoadCallback(dv);
 })();
 
