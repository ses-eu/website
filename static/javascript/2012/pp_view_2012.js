var visualization;
function drawVisualization()
// GET DATA
	{
var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1-RcS3EgVx5-YBe2se2abAAnkObWkkTNGhMx93AxL7PA/edit?usp=sharing&sheet=PP_VIEW&range=A4:BV764&hl=en_GB');
	query.send(handleQueryResponse);
	}
	function handleQueryResponse(response) {
	if (response.isError()) {
	alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
	return;
	}
	var data = response.getDataTable();

// Define category picker
	var categoryPicker1 = new google.visualization.ControlWrapper({
	controlType: 'CategoryFilter',
	containerId: 'control1',
		options:{
					filterColumnLabel: 'Entity',
					ui: {
						labelStacking: 'horizontal',
						allowTyping: false,
						allowMultiple: false }
				},
		state: {selectedValues: ['Austria']}
	});

// IFR flights - YY - CHART [PP_LEVEL]
	var crt_IFRYY = new google.visualization.ChartWrapper({
		chartType: 'LineChart',
		containerId: 'crt_IFRYY',
		options: {
				width: 450, height: 190,
				chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
				title: 'Avg. daily IFR flights (Jan.-Dec.)',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: 'none',
				series: {
							0: {type: 'bars', color:'#99badb',  targetAxisIndex: 0},
							1: {type: 'lines', color:'#B89470', lineWidth: 2, pointSize: 6, targetAxisIndex: 1}
						},
				vAxes:{
							0:{	title:'Avg. daily IFR flights',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: '#5D7CBA'}},
							1:{	title:'% change',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color:'#B89470'}}
						}
				},
		view: {columns: [3,6,7], rows: [0,1,2,3,4,5,6]}
															});

// IFR flights - MM - CHART [PP_LEVEL]
	var crt_IFRMM = new google.visualization.ChartWrapper({
		chartType: 'LineChart',
		containerId: 'crt_IFRMM',
		options: {
				width: 450, height: 190,
				chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
				title: 'Avg. daily IFR flights [2012]',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: 'none',
				series: {
							0: {type: 'bars', color:'#99badb', targetAxisIndex: 0},
							1: {type: 'lines', color:'#B89470',lineWidth: 2, pointSize: 6, targetAxisIndex: 1}
						},
				vAxes:{
							0:{	title:'Avg. daily IFR flights',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: '#5D7CBA'}},
							1:{	title:'% change',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color:'#B89470'}}
						}
				},
		view: {columns: [4,6,7], rows: [7,8,9,10,11,12,13,14,15,16,17,18]}
														});

// ERT ATFM DLY - YY - CHART [PP_LEVEL]
	var crt_ertdlyYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertdlyYY',
		options:{
					width: 460, height: 190,
					chartArea: {left: 50, top: 30, width:'55%',height:'60%'},
					title: 'En route ATFM delays (Jan.-Dec.)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'right',
					isStacked : 'true',
					series: {
								1: {type:'bars',color:'#F08080'},
								2: {type:'bars',color:'#FFA07A'},
								3: {type:'bars', color:'#99FF99'},
								4: {type:'bars',color:'grey'},
								0: {type:'lines',color:'D80032', lineWidth: 0.5, pointSize: 7}
							},
					vAxis: {title: 'minutes per flight', format: '0.00',
							titleTextStyle: {color: 'grey', fontSize: 11}}
				},
		view: {columns: [3,8,11,12,13,14] ,rows: [0,1,2,3,4,5,6]}
	});

// ERT ATFM DLY - MM - CHART [PP_LEVEL]
	var crt_ertdlyMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertdlyMM',
		options:{
					width: 450, height: 190,
					chartArea: {left: 80, top: 30, width:'70%',height:'60%'},
					title: 'Monthly en route ATFM delays [2012]',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
					isStacked : 'true',
					series: {
								0: {type:'lines',color:'#5D7CBA', lineWidth: 1, pointSize: 6},
								1: {type:'bars',color:'#F08080'},
								2: {type:'bars',color:'#FFA07A'},
								3: {type:'bars', color:'#99FF99'},
								4: {type:'bars',color:'grey'},
								5: {type:'area',color:'#C2A385', lineWidth: 0, pointSize: 0}
							},
					vAxis: {title: 'minutes per flight', format: '0.00',
							titleTextStyle: {color: 'grey', fontSize: 11}},
				},
		view: {columns: [4,15,11,12,13,14,71] , rows: [7,8,9,10,11,12,13,14,15,16,17,18]}
	});

// ERT ATFM DLY - YY - TABLE [PP_LEVEL]
	var tbl_ertdlyYY = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ertdlyYY',
		options:{ width: 940, height: 120},
		view: {columns: [3,8,10,9,16,17,18,19], rows: [4,5,6]}
	});

// APT ATFM DLY - YY - CHART [PP_LEVEL]
	var crt_aptdlyYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_aptdlyYY',
				options:{
					width: 460, height: 190,
					chartArea: {left: 50, top: 30, width:'55%',height:'60%'},
					title: 'Airport ATFM delays (Jan.-Dec.)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'right',
					isStacked : 'true',
					seriesType: 'bars',
					colors: ['#F08080','#FFA07A', '#99FF99', 'grey'],
					vAxis: {title: 'minutes per arrival', format: '0.00',
							titleTextStyle: {color: 'grey', fontSize: 11}}
				},
		view: { columns: [3,22,23,24,25] , rows: [0,1,2,3,4,5,6] }
	});

// APT ATFM DLY - MM - CHART [PP_LEVEL]
	var crt_aptdlyMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_aptdlyMM',
				options:{
					width: 450, height: 190,
					chartArea: {left: 80, top: 30, width:'70%',height:'60%'},
					title: 'Monthly airport ATFM delays [2012]',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
					isStacked : 'true',
					series: {
								0: {type:'lines',color:'#5D7CBA', lineWidth: 1, pointSize: 6},
								1: {type:'bars',color:'#F08080'},
								2: {type:'bars',color:'#FFA07A'},
								3: {type:'bars', color:'#99FF99'},
								4: {type:'bars',color:'grey'}
							},
					vAxis: {title: 'minutes per arrival', format: '0.00',
							titleTextStyle: {color: 'grey', fontSize: 11}},
						},
		view: { columns: [4,26,22,23,24,25], rows: [7,8,9,10,11,12,13,14,15,16,17,18]}
	});

// APT ATFM DLY - YY - TABLE [PP_LEVEL]
	var tbl_aptdlyYY = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_aptdlyYY',
		options:{ width: 940, height: 120},
		view: {columns: [3,21,20,27,28,29,30], rows: [4,5,6] }
	});

// ASMA - YY - CHART - [PP_LEVEL]
	var crt_ASMAYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ASMAYY',
		options:{
					width: 450, height: 190,
					chartArea: {left: 80, top: 30, width:'70%',height:'60%'},
					title: 'ASMA additional time',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
				    seriesType: 'bars',
					colors: ['#99badb'],
					vAxis:{	minValue: 0.0,title:'[min. per arrival]', format: '0.00',
							titleTextStyle : {color: 'grey', fontSize: 11},
							textStyle:{color: '#5D7CBA'}}
				},
		view: {columns: [3,31], rows: [4,5,6]}
	});

// ASMA - MM - CHART - [PP_LEVEL]
	var crt_ASMAMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ASMAMM',
		options: {
				width: 450, height: 190,
				chartArea: {left: 80, top: 30, width:'70%',height:'60%'},
				title: 'ASMA additional time [2012]',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: 'none',
				seriesType: 'bars',
				colors: ['#99badb'],
				vAxis:{	minValue: 0.0,title:'[min. per arrival]', format: '0.00',
							titleTextStyle : {color: 'grey', fontSize: 11},
							textStyle:{color: '#5D7CBA'}}
				},
		view: {columns: [4,31], rows: [7,8,9,10,11,12,13,14,15,16,17,18]}
	});

// Taxi Out - YY - CHART - [PP_LEVEL]
	var crt_txoutYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_txoutYY',
		options: {
					width: 450, height: 190,
					chartArea: {left: 80, top: 30, width:'70%',height:'60%'},
					title: 'Taxi-out additional time',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
				    seriesType: 'bars',
					colors: ['#99badb'],
					vAxis:{	minValue: 0.0,title:'[min. per departure]', format: '0.00',
							titleTextStyle : {color: 'grey', fontSize: 11},
							textStyle:{color: '#5D7CBA'}}
				},
		view: {columns: [3,33], rows: [4,5,6]}
	});

// Taxi Out - MM - CHART - [PP_LEVEL]
	var crt_txoutMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_txoutMM',
		options: {
				width: 450, height: 200,
				chartArea: {left: 80, top: 30, width:'70%',height:'60%'},
				title: 'Taxi-out additional time [2012]',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: 'none',
				seriesType: 'bars',
				colors: ['#99badb'],
				vAxis:{	minValue: 0.0,title:'[min. per departure]', format: '0.00',
							titleTextStyle : {color: 'grey', fontSize: 11},
							textStyle:{color: '#5D7CBA'}}
				},
		view: {columns: [4,33], rows: [7,8,9,10,11,12,13,14,15,16,17,18]}
	});

// CIV_MIL - YY - TABLE [LOCAL_LEVEL]
	var tbl_civmil_YY = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_civmil_YY',
		options:{ width: 350, height: 120},
		view: {columns: [3,73], rows: [4,5,6]}
	});

// ERT CEF DUR - YY - CHART - [PP_LEVEL]
var crt_ertcefDURYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertcefDURYY',
		options:{
					width: 450, height: 200,
					chartArea: {left: 70, top: 30, width:'65%',height:'60%'},
					title: 'En route DUR KPI',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'bottom',
					series: {
								0: {type:'bars',color:'#b2c8b2', targetAxisIndex: 1},
								1: {type:'bars',color:'#00CC99', targetAxisIndex: 1},
								2: {type:'lines',color:'#7070FF', lineWidth: 1.5, pointSize: 5, targetAxisIndex: 0},
							    3: {type:'lines',color:'#003366', lineWidth: 1.5, pointSize: 5, targetAxisIndex: 0},
								4: {type:'lines',color:'#FF9999', lineWidth: 1.5, pointSize: 5, targetAxisIndex: 0},
							    5: {type:'lines',color:'#FF0000', lineWidth: 1.5, pointSize: 5, targetAxisIndex: 0},
							},
					vAxes:{
							0:{	title:'Index (2009=100)', format:'#,#',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: 'grey'}},
							1:{	minValue: 0, title:'En route unit costs [€2009]', format:'#,#',
								titleTextStyle : {color: '#71C68D', fontSize: 11},
								textStyle:{color:'#71C68D'}}
							}
				},
		view: {'columns': [2,57,58,47,48,52,53] ,'rows': [1,2,3,4,5,6] }
	});

// ERT CEF - YY - SU TABLE - [PP_LEVEL]
	var tbl_ertcefSU = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ertcefSU',
		options:{ allowHtml: false, width: 940, height: 60},
		view: {columns: [3,35,36,37,38], rows: [4] }
	});

// ERT CEF SU - YY - CHART - [PP_LEVEL]
var crt_ertcefSUYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertcefSUYY',
		options:{
					width: 450, height: 200,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'En route SU [act. vs. NPP] - (Jan.-Dec.2012)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
					series: {
								0: {type:'bars',color:'DDC5A6', targetAxisIndex: 0},
							    1: {type:'bars',color:'8B9BBA', targetAxisIndex: 0},
								2: {type:'line',color:'D80032', lineWidth: 2, pointSize: 5, targetAxisIndex: 1},
							    3: {type:'area',color:'blue', areaOpacity: 0.1, lineWidth: 0, targetAxisIndex: 1},
								4: {type:'area',color:'red', areaOpacity: 0.1, lineWidth: 0, targetAxisIndex: 1},
								5: {type:'area',color:'blue', areaOpacity: 0.1, lineWidth: 0, targetAxisIndex: 1},
								6: {type:'area',color:'red', areaOpacity: 0.1, lineWidth: 0, targetAxisIndex: 1}
							},
					vAxes:{
							0:{	title:'En route SU',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: 'grey'}},
							1:{	title:'[cumulated difference act. vs. plan]',format:'#,#%',
								titleTextStyle : {color: 'D80032', fontSize: 11},
								textStyle:{color:'D80032'}}
							}
				},
		view: {'columns': [4,35,37,38,67,68,69,70] , rows: [7,8,9,10,11,12,13,14,15,16,17,18]}
	});

// ERT CEF - YY - TABLE 1 - [PP_LEVEL]
	var tbl_ertcefYY1 = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ertcefYY1',
		options:{ width: 945, height: 160},
		view: {columns: [3,49,50,51,54,55,56,57,58], rows: [4,5,6] }
	});

// ERT CEF - YY - TABLE 2 - [PP_LEVEL]
	var tbl_ertcefYY2 = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ertcefYY2',
		options:{ width: 945, height: 160},
		view: {columns: [3,39,40,41,42,43,44,45,46], rows: [4,5,6] }
	});

// TMA CEF - YY - TABLE - [PP_LEVEL]
	var tbl_tmacefYY = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_tmacefYY',
		options:{ width: 940, height: 160},
		view: {columns: [3,59,60,61,62,63,64,65,66], rows: [4,5,6] }
	});

// Create a dashboard
new google.visualization.Dashboard(document.getElementById('dashboard')).
	bind([categoryPicker1], [crt_IFRYY, crt_IFRMM, crt_ertdlyYY, crt_ertdlyMM, tbl_ertdlyYY,tbl_civmil_YY,
							crt_aptdlyYY, crt_aptdlyMM, tbl_aptdlyYY, crt_ASMAYY, crt_ASMAMM, crt_txoutYY, tbl_ertcefSU,
							crt_txoutMM, crt_ertcefDURYY, crt_ertcefSUYY, tbl_ertcefYY1, tbl_ertcefYY2, tbl_tmacefYY]).
draw(data);
}
google.setOnLoadCallback(drawVisualization)
