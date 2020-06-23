    var visualization;

function drawVisualization() 	{
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/17cr3UvsjD3idCr8lifsgFUPSU2UUdevZsrCRbe4laR8/edit?usp=sharing&sheet=APT&range=A4:AD1313&hl=en_GB');
	query.send(handleQueryResponse);
								}

function handleQueryResponse(response) {
          if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
        }
var data = response.getDataTable();

// CATEGORY PICKER 1
     var AirportPicker = new google.visualization.ControlWrapper({
		controlType: 'CategoryFilter',
		containerId: 'control2',
		options:{
				filterColumnLabel: 'Airport name',
				ui: {
					labelStacking: 'vertical',
					allowTyping: false,
					allowMultiple: false
					},
				},
		state: {selectedValues: ['Vienna']}
																});
// CATEGORY PICKER 2
	var CountryPicker = new google.visualization.ControlWrapper({
		controlType: 'CategoryFilter',
		containerId: 'control1',
		options:{
				filterColumnLabel: 'State',
				ui:{
					labelStacking: 'vertical',
					allowTyping: false,
					allowMultiple: false
					}
				},
	    state: {selectedValues: ['Austria']}
																});
// TBL GENERAL AIRPORT INFORMATION
    var tblgen = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tblgen',
		options: {
					width: 940, height: 60
					},
		view: {columns: [4,1,0,2,3,28,29] ,rows: [4] }
														});
// IFR flights - YY - CHART [APT]
	var crt_IFRYY = new google.visualization.ChartWrapper({
		chartType: 'LineChart',
		containerId: 'crt_IFRYY',
		options: {
				width: 450, height: 200,
				chartArea: {left: 60, top: 30, width:'60%',height:'60%'},
				title: 'Average daily IFR movements (Arr. + Dep.)',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: 'none',
				series: {
							0: {type: 'bars', color:'#99badb',  targetAxisIndex: 0},
							1: {type: 'lines', color:'#B89470', lineWidth: 2, pointSize: 6, targetAxisIndex: 1}
						},
				vAxes:{
							0:{	title:'Avg. daily IFR movements',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: '#5D7CBA'}},
							1:{	title:'% change',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color:'#B89470'}}
						}
				},
		view: {columns: [4,7,8], rows: [0,1,2,3,4]}
															});

// IFR flights - MM - CHART [APT]
	var crt_IFRMM = new google.visualization.ChartWrapper({
		chartType: 'LineChart',
		containerId: 'crt_IFRMM',
		options: {
				width: 470, height: 200,
				chartArea: {left: 60, top: 30, width:'68%',height:'60%'},
				title: 'Average daily IFR movements (2012)',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
				series: {
							0: {type: 'bars', color:'#99badb'},
							1: {type: 'lines',color:'#c76061', lineWidth: 0, pointShape:'diamond', pointSize: 7}
						},
					vAxis: {title: 'Avg. daily IFR movements',
							titleTextStyle: {color: 'grey', fontSize: 11},
							textStyle:{color: 'grey'}}
				},
		view: {columns: [5,7,9], rows: [5,6,7,8,9,10,11,12,13,14,15,16]}
														});
// TBL Performance Overview
    var tblperf = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tblperf',
		options: { allowHtml: false,
					width: 950, height: 100
					},
		view: {columns: [4,11,18,19,20,21,12,26,23] ,rows: [4] }
														});

// APT ATFM DLY - MM - CHART [APT]
	var crt_aptdlyMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_aptdlyMM',
				options:{
					width: 475, height: 220,
					chartArea: {left: 45, top: 30, width:'65%',height:'65%'},
					title: 'Airport arrival ATFM delays (2012)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
					isStacked : 'true',
					series: {
								0: {type:'lines',color:'#c76061', lineWidth: 0, pointShape:'diamond', pointSize: 7},
								1: {type:'bars',color:'#F08080'},
								2: {type:'bars',color:'#FFA07A'},
								3: {type:'bars', color:'#99FF99'},
								4: {type:'bars',color:'grey'}
							},
					vAxis: {title: 'minutes per arrival', format: '0.00',
							titleTextStyle: {color: 'grey', fontSize: 11},
							textStyle:{color: 'grey'}},
						},
		view: { columns: [5,17,13,14,15,16], rows: [5,6,7,8,9,10,11,12,13,14,15,16]}
	});

	// ASMA - MM - CHART - [APT]
	var crt_ASMAMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ASMAMM',
		options: {
				width: 470, height: 220,
				chartArea: {left: 40, top: 30, width:'67%',height:'65%'},
				title: 'ASMA additional time (2012)',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
								isStacked : 'true',
					series: {
								0: {type:'bars',color:'#99badb', targetAxisIndex: 0},
								1: {type:'bars',color:'#666699', targetAxisIndex: 0}
							},
					vAxes:{
							0:{	title:'[min. per arrival]',format: '0.0',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: 'grey'}}
							}
						},
		view: {columns: [5,25,26], rows: [5,6,7,8,9,10,11,12,13,14,15,16]}
	});

		// Taxi out - MM - CHART - [APT]
	var crt_txoutMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_txoutMM',
		options: {
				width: 470, height: 220,
				chartArea: {left: 40, top: 30, width:'67%',height:'65%'},
				title: 'Taxi out additional time (2012)',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
				isStacked : 'true',
					series: {
								0: {type:'bars',color:'#C2E0D1', targetAxisIndex: 0},
								1: {type:'bars',color:'#339966', targetAxisIndex: 0}
							},
					vAxes:{
							0:{	title:'[min. per departure]',format: '0.0',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: 'grey'}}
							}
						},
		view: {columns: [5,22,23], rows: [5,6,7,8,9,10,11,12,13,14,15,16]}
	});

// Create a dashboard
	new google.visualization.Dashboard(document.getElementById('dashboard')).
        bind(CountryPicker, AirportPicker).
        bind([AirportPicker], [tblgen, crt_IFRYY, crt_IFRMM, tblperf, crt_aptdlyMM, crt_ASMAMM, crt_txoutMM]).
	draw(data);
      }

google.setOnLoadCallback(drawVisualization)
