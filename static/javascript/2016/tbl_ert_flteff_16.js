(function() {
    function dv(){

 // ENVIRONMENT - Horizontal flight efficiency - TABLE
	var tbl_ert_flteff = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ert_flteff_16',
		dataSourceUrl: '//docs.google.com/spreadsheets/d/1N0EH3rG0k-9ornfJXWWPks8iKBB8LBsx9WyqljHhc8c/edit?usp=sharing&sheet=ERT_FLT_EFF_FAB&range=A5:E15&hl=en_GB',
		options:{
		allowHtml: true,
		width: 470, height: 360,
		//style: {fontSize: 9}
		},
		view: {columns: [0,2,3,4]
		}
	}); tbl_ert_flteff.draw();    

    }

    google.setOnLoadCallback(dv);
 })();
 
