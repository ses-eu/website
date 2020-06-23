function drawVisualization()
 {
// IFR flights - YY - CHART [EU_YY]
	var crt_IFRYY = new google.visualization.ChartWrapper({
		chartType: 'LineChart',
		containerId: 'crt_IFRYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1dO4bHADxiHGVJZXwtbZiVkadObbZhdspESnlTxdYvF4/edit?usp=sharing&sheet=IFR_YY&range=A5:F12&hl=en_GB',
		options: {
				width: 450, height: 170,
				chartArea: {left: 80, top: 30, width:'60%',height:'65%'},
				title: 'Average daily IFR flights (EU-wide)',
				titleTextStyle : {color: '#1F1F2E', fontSize: 12},
				legend: 'none',
				series: {
							0: {type: 'bars', color:'#99badb',  targetAxisIndex: 0},
							1: {type: 'lines', color:'#B89470', lineWidth: 2, pointSize: 7, targetAxisIndex: 1}
						},
				vAxes:{
							0:{	title:'Avg. daily IFR flights',
								titleTextStyle : {color: '#1F1F2E', fontSize: 11},
								textStyle:{color: '8B9BBA'}},
							1:{	title:'year on year (%)',
								titleTextStyle : {color: '#1F1F2E', fontSize: 11},
								textStyle:{color:'#B89470'}}
						}
				},
		view: {columns: [1,4,5], rows: [0,1,2,3,4,5,6]}
	}); crt_IFRYY.draw();

// IFR flights - YY - TABLE [ERT_SU_PP]
	var tbl_IFRYY = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_IFRYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1dO4bHADxiHGVJZXwtbZiVkadObbZhdspESnlTxdYvF4/edit?usp=sharing&sheet=IFR flights (ANSP)&range=A5:G28&hl=en_GB',
		options:{ allowHtml: false, width: 470, height: 160},
		view: {columns: [0,1,5,6]}
	}); tbl_IFRYY.draw();

// SEPARATION MINIMA INFRINGEMENTS - YY - CHART [EU_YY]
	var crt_smiYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_smiYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1GeeFN3FUarocIZhi5zmUl84bmxWt6HDSiYCTJnP17L8/edit?usp=sharing&sheet=SAF INDICATORS&range=A4:P12&hl=en_GB',
		options: {
					width: 450, height: 200,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'Separation Minima Infringements (SMI)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'bottom',
					isStacked : 'true',
					series: {
							4: {type: 'bars', color:'#FFA07A', targetAxisIndex: 0 },
							3: {type: 'bars', color:'#F08080', targetAxisIndex: 0 },
							1: {type: 'lines', color:'#5D7CBA', lineWidth: 1, pointSize: 6,targetAxisIndex: 1},
							0: {type: 'lines', color:'darkgrey', lineWidth: 1, pointSize: 6,targetAxisIndex: 0},
							2: {type: 'lines', color:'lightgrey', lineWidth: 1, pointSize: 6, targetAxisIndex: 0}
						},
					vAxes:{
							0:{	title:'count',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: 'grey'}},
							1:{	title:'total nr. of reported SMI',
								titleTextStyle : {color: '#5D7CBA', fontSize: 11},
								textStyle:{color:'#5D7CBA'}}
							}
					},
		view: {columns: [0,6,7,8,9,10]  }
	}); crt_smiYY.draw();

// RWY INCURSIONS - YY - CHART [EU_YY]
	var crt_rwyincYY = new google.visualization.ChartWrapper({
		chartType : 'ComboChart',
		containerId : 'crt_rwyincYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1GeeFN3FUarocIZhi5zmUl84bmxWt6HDSiYCTJnP17L8/edit?usp=sharing&sheet=SAF INDICATORS&range=A4:P12&hl=en_GB',
		options: {
					width: 450, height: 200,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'Runway incursions (RI)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'bottom',
					isStacked : 'true',
					series: {
							4: {type: 'bars', color:'#FFA07A', targetAxisIndex: 0 },
							3: {type: 'bars', color:'#F08080', targetAxisIndex: 0 },
							1: {type: 'lines', color:'#5D7CBA', lineWidth: 1, pointSize: 6, targetAxisIndex: 1},
							0: {type: 'lines', color:'darkgrey', lineWidth: 1, pointSize: 6, targetAxisIndex: 0},
							2: {type: 'lines', color:'lightgrey', lineWidth: 1, pointSize: 6,  targetAxisIndex: 0}
						},
					vAxes:{
							0:{	title:'count',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: '#1F1F2E'}},
							1:{	title:'total nr. of reported RI',
								titleTextStyle : {color: '#5D7CBA', fontSize: 11},
								textStyle:{color:'#5D7CBA'}}
							}
					},
		view: {columns: [0,1,2,3,4,5]}
	}); crt_rwyincYY.draw();

// ATM Specific Occurrences (TECH) - YY - CHART [EU_YY]
	var crt_ATMspecYY = new google.visualization.ChartWrapper({
		chartType : 'ComboChart',
		containerId : 'crt_ATMspecYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1GeeFN3FUarocIZhi5zmUl84bmxWt6HDSiYCTJnP17L8/edit?usp=sharing&sheet=SAF INDICATORS&range=A4:P12&hl=en_GB',
		options: {
					width: 450, height: 200,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'ATM Specific Occurrences (ATM-S)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'bottom',
					isStacked : 'true',
					series: {
							4: {type: 'bars', color:'#FFA07A', targetAxisIndex: 0 },
							3: {type: 'bars', color:'#F08080', targetAxisIndex: 0 },
							1: {type: 'lines', color:'#5D7CBA', lineWidth: 1, pointSize: 6, targetAxisIndex: 1},
							0: {type: 'lines', color:'darkgrey', lineWidth: 1, pointSize: 6, targetAxisIndex: 0},
							2: {type: 'lines', color:'lightgrey', lineWidth: 1, pointSize: 6,  targetAxisIndex: 0}
						},
					vAxes:{
							0:{	title:'count',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: '#1F1F2E'}},
							1:{	title:'Total No of reported ATM-S',
								titleTextStyle : {color: '#5D7CBA', fontSize: 11},
								textStyle:{color:'#5D7CBA'}}
							}
					},
		view: {columns: [0,11,12,13,14,15]}
	}); crt_ATMspecYY.draw();

	// EoSM - YY - CHART - [EU_YY]
	var crt_EoSMYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_EoSMYY',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1xDhXy7p0C_nRprHXXv0kmUfn9q2yOwXp3Xd8BcF44eA/edit?usp=sharing&sheet=EoSM_2013&range=A4:B33&hl=en_GB',
		options:{
					width: 475, height: 230,
					chartArea: {left: 50, top: 30, width:'85%',height:'50%'},
					title: 'Effectiveness of Safety Management (State level)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
					isStacked : 'true',
					seriesType: 'bars',
					colors:['#99badb'],
					vAxis: {title: 'score',
							titleTextStyle: {color: 'grey', fontSize: 11}},
					hAxis: { type:'string',
							slantedText:true,
							slantedTextAngle: 90,
							textStyle: {color: 'grey', fontSize: 10}}
				},
		view: {'columns': [0,1]}
	}); crt_EoSMYY.draw();

// RAT - APP - TABLE
	var tbl_RAT_APP_YY = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_RAT_APP_YY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/11prptMhZIyeRuZ1sgeda_Arx-z-TRZWMF9pr_VA2Dl8/edit?usp=sharing&sheet=RAT EU_2013&range=A5:H8&hl=en_GB',
		options:{ allowHtml: false, width: 470, height: 150},
		view: {columns: [0,1,2,4,5,7], rows: [0,1]}
	}); tbl_RAT_APP_YY.draw();

// ERT ATFM DLY - YY - CHART - [EU_YY]
	var crt_ertdlyYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertdlyYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1rTOaWkyd5WLRAECJI-Lp_CiEF8vovH_X307fSZTlvYQ/edit?usp=sharing&sheet=ERT_ATFM_YY&range=A6:S13&hl=en_GB',
		options:{
					width: 460, height: 190,
					chartArea: {left: 50, top: 30, width:'55%',height:'60%'},
					title: 'EU-wide en route ATFM delays (Jan.-Dec.)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
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
		view: {'columns': [1,17,9,10,11,12]}
	}); crt_ertdlyYY.draw();

// ERT ATFM DLY - MM - CHART - [EU_MM]
	var crt_ertdlyMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertdlyMM',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1rTOaWkyd5WLRAECJI-Lp_CiEF8vovH_X307fSZTlvYQ/edit?usp=sharing&sheet=ERT_ATFM_MM&range=A5:U77&tq=where%20B%3D2013&hl=en_GB',
		options:{
					width: 460, height: 190,
					chartArea: {left: 50, top: 30, width:'55%',height:'60%'},
					title: 'EU-wide en route ATFM delays [2013]',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
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
							titleTextStyle: {color: 'grey', fontSize: 11}}
				},
		view: {'columns': [3,19,11,12,13,14,20]}
	}); crt_ertdlyMM.draw();

// ERT ATFM DLY - YY EU wide - TABLE [EU_YY]
	var tbl_ertdly_YYtgt = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ertdly_YYtgt',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1rTOaWkyd5WLRAECJI-Lp_CiEF8vovH_X307fSZTlvYQ/edit?usp=sharing&sheet=ERT_ATFM_YY&range=A6:S13&hl=en_GB',
		options:{allowHtml: false, width: 470, height: 80},
		view: {columns: [1,17,8,18], rows: [5]}
	}); tbl_ertdly_YYtgt.draw();


// ERT ATFM DLY - YY - CHART vs target - [EU_YY]
	var crt_ertdlyYYvstgt = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertdlyYYvstgt',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1rTOaWkyd5WLRAECJI-Lp_CiEF8vovH_X307fSZTlvYQ/edit?usp=sharing&sheet=EERT_ATFM_PP vs ACT&range=A5:G28&hl=en_GB',
		options:{
					width: 940, height: 220,
					chartArea: {left: 80, top: 30, width:'75%',height:'50%'},
					title: 'CAPACITY: Actual vs. performance plan (2013) - sorted by difference between actual vs. target',
					titleTextStyle : {color: 'black', fontSize: 12},
					legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
					series: {
								0: {type:'lines',color:'#c76061', lineWidth: 0, pointShape:'diamond', pointSize: 7},
								1: {type:'bars',color:'#99badb'}
							},
					vAxis: {title: 'minutes per flight',  format: '0.00',textStyle: {color: 'grey', fontSize: 11},
							titleTextStyle: {color: 'grey', fontSize: 11}},
					hAxis: {
							slantedTextAngle: 90,
							textStyle: {color: 'grey', fontSize: 11}}
				},
		view: {'columns': [0,2,5]}
	}); crt_ertdlyYYvstgt.draw();

// APT ATFM DLY - YY - CHART - [EU_YY]
	var crt_aptdlyYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_aptdlyYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Ehw-161sFfl7GdNm_bHmGt54EUcoj50yu0hHcmB-jHY/edit?usp=sharing&sheet=APT_ATFM_YY&range=A6:Q13&hl=en_GB',
		options:{
					width: 460, height: 180,
					chartArea: {left: 50, top: 30, width:'55%',height:'60%'},
					title: 'EU-wide airport ATFM arrival delays (Jan.-Dec.)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
					isStacked : 'true',
					seriesType: 'bars',
					colors: ['#F08080', '#FFA07A', '#99FF99', 'grey'],
					vAxis: {title: 'minutes per arrival', format: '0.00',
							titleTextStyle: {color: 'grey', fontSize: 11}}
				},
		view: { columns: [1,9,10,11,12] , rows: [0,1,2,3,4,5,6] }
	}); crt_aptdlyYY.draw();

// APT ATFM DLY - MM - CHART - [EU_MM]
	var crt_aptdlyMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_aptdlyMM',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Ehw-161sFfl7GdNm_bHmGt54EUcoj50yu0hHcmB-jHY/edit?usp=sharing&sheet=APT_ATFM_MM&range=A5:T77&tq=where%20B%3D2013&hl=en_GB',
		options:{
					width: 460, height: 180,
					chartArea: {left: 50, top: 30, width:'55%',height:'60%'},
					title: 'Airport arrival ATFM delays [2013]',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
					isStacked : 'true',
					series: {
								0: {type:'lines',color:'#5D7CBA', lineWidth: 1, pointSize: 6},
								1: {type:'bars',color:'#F08080'},
								2: {type:'bars',color:'#FFA07A'},
								3: {type:'bars', color:'#99FF99'},
								4: {type:'bars',color:'grey'}
							},
					vAxis: {title: 'minutes per arrival', format: '0.00',
							titleTextStyle: {color: 'grey', fontSize: 11}}
						},
		view: {'columns': [3,19,11,12,13,14] }
	}); crt_aptdlyMM.draw();

// APT ATFM DLY - YY APT level - TABLE [APT_ATFM_APT]
	var tbl_aptdly_YYAPT = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_aptdly_YYAPT',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Ehw-161sFfl7GdNm_bHmGt54EUcoj50yu0hHcmB-jHY/edit?usp=sharing&sheet=APT_ATFM_ARR_DLY&range=A5:K82&hl=en_GB',
		options:{ allowHtml: false, width: 470, height: 330},
		view: {columns: [2,3,4,5,6]}
	}); tbl_aptdly_YYAPT.draw();

// ASMA - YY - CHART - [EU_YY]
	var crt_ASMAYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ASMAYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1cSMBoG9sDhlPV3ps9nO3SlBtu70MXkkGrMxliDwk22g/edit?usp=sharing&sheet=ASMA_YY&range=A4:E8&hl=en_GB',
		options:{
					width: 450, height: 150,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'ASMA add. time (Jan.-Dec.)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
				    seriesType: 'bars',
					colors: ['#99badb'],
					vAxis:{	minValue: 0.0,title:'[min. per arrival]', format: '0.00',
							titleTextStyle : {color: 'grey', fontSize: 11},
							textStyle:{color: '#5D7CBA'}}
				},
		view: {'columns': [2,3],rows: [1,2,3]}
	}); crt_ASMAYY.draw();

// ASMA - MM - CHART - [EU_MM]
	var crt_ASMAMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ASMAMM',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1cSMBoG9sDhlPV3ps9nO3SlBtu70MXkkGrMxliDwk22g/edit?usp=sharing&sheet=ASMA_MM&range=A5:G41&tq=where%20C%3D2013&hl=en_GB',
		options: {
				width: 450, height: 150,
				chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
				title: 'ASMA add. time [2013]',
				titleTextStyle : {color: 'grey', fontSize: 12},
				legend: 'none',
				seriesType: 'bars',
					colors: ['#99badb'],
					vAxis:{	minValue: 0.0,title:'[min. per arrival]', format: '0.00',
							titleTextStyle : {color: 'grey', fontSize: 11},
							textStyle:{color: '#5D7CBA'}}
						},
		view: {'columns': [4,5]}
	}); crt_ASMAMM.draw();

// ASMA DLY - YTD ASMA time - TABLE [APT_ATFM_APT]
	var tbl_ASMAdly_YYAPT = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ASMAdly_YYAPT',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1cSMBoG9sDhlPV3ps9nO3SlBtu70MXkkGrMxliDwk22g/edit?usp=sharing&sheet=ASMA_APT&range=A5:I44&hl=en_GB',
		options:{ allowHtml: false, width: 470, height: 300},
		view: {columns: [2,3,5,6,8]}
	}); tbl_ASMAdly_YYAPT.draw();

// Taxi Out - YY - CHART - [EU_YY]
	var crt_txoutYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_txoutYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1w4w8kpIhBxDc4eatuhuEmIZiu_4JzlQ-kDUUCA4cgDs/edit?usp=sharing&sheet=TxOut_YY&range=A4:E8&hl=en_GB',
		options: {
					width: 450, height: 150,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'Taxi-out add. time (Jan.-Dec.)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
					seriesType: 'bars',
					colors: ['#99badb'],
					vAxis:{	minValue: 0.0,title:'[min. per departure]', format: '0.00',
							titleTextStyle : {color: 'grey', fontSize: 11},
							textStyle:{color: '#5D7CBA'}}
					},
		view: {columns: [2,3], rows: [1,2,3]}
	}); crt_txoutYY.draw();

// Taxi Out - MM - CHART - [EU_MM]
	var crt_txoutMM = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_txoutMM',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1w4w8kpIhBxDc4eatuhuEmIZiu_4JzlQ-kDUUCA4cgDs/edit?usp=sharing&sheet=TxOut_MM&range=A5:G41&tq=where%20C%3D2013&hl=en_GB',
		options: {
				width: 450, height: 150,
				chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
				title: 'Taxi out add. time [2013]',
				titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
					seriesType: 'bars',
					colors: ['#99badb'],
					vAxis:{	minValue: 0.0,title:'[min. per departure]', format: '0.00',
							titleTextStyle : {color: 'grey', fontSize: 11},
							textStyle:{color: '#5D7CBA'}}
					},
		view: {'columns': [4,5]}
	}); crt_txoutMM.draw();

// Taxi-out DLY - YTD taxi time - TABLE []
	var tbl_txdly_YYAPT = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_txdly_YYAPT',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1w4w8kpIhBxDc4eatuhuEmIZiu_4JzlQ-kDUUCA4cgDs/edit?usp=sharing&sheet=TxOut_APT&range=A5:I82&hl=en_GB',
		options:{ allowHtml: false, width: 470, height: 300},
		view: {columns: [2,3,5,6,8]}
	}); tbl_txdly_YYAPT.draw();

// FLT EFF - YY - CHART - [EU-YY]
	var crt_flteffYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_flteffYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/14qvxAm3AGbfLfAnr6Sgz13CeyRp0QRZ_i8sCGb_tP1g/edit?usp=sharing&sheet=FLT_EFF_YY&range=A5:G11&hl=en_GB',
			options:{
					width: 470, height: 200,
					chartArea: {left: 80, top: 30, width:'65%',height:'70%'},
					title: 'Horizontal en route flight efficiency [KEP]',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'right',
					series: {
								0: {type:'bars', color:'grey'},
								1: {type:'bars', color:'D80032'},
								2: {type:'lines', color:'#5D7CBA', lineWidth: 1, pointSize: 6},
							    3: {type:'area',color:'#C2A385', lineWidth: 0, pointSize: 0}
							},
					vAxis: {minValue:0.04, title: 'inefficiency (%)', format: '0.0%',
							titleTextStyle: {color: 'grey', fontSize: 11}}
	//						,
	//				hAxis: {title: 'year',
	//						titleTextStyle: {color: 'grey', fontSize: 12}}
				},
				view: {columns: [1,3,4,5,6] , rows: [0,1,2,3,4,5] }
	}); crt_flteffYY.draw();

// FLT EFF - MM - CHART - [EU-MM]
	var crt_flteffMM = new google.visualization.ChartWrapper({
		chartType: 'LineChart',
		containerId: 'crt_flteffMM',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/14qvxAm3AGbfLfAnr6Sgz13CeyRp0QRZ_i8sCGb_tP1g/edit?usp=sharing&sheet=FLT_EFF_MM&range=A4:F40&tq=where%20B%3D2013&hl=en_GB',
		options:{
					width: 470, height: 200,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'Horizontal en route flight efficiency [2013]',
					titleTextStyle : {color: '#5D7CBA', fontSize: 12},
					legend: 'right',
					series: {
							0: {type: 'lines', color:'#5D7CBA',lineWidth: 1, pointSize:6},
							1: {type: 'lines', color:'#93a7d1',lineWidth: 1, pointShape:'diamond',pointSize:8}
						},
					vAxis: {minValue: 0.02,maxValue: 0.06, title: 'inefficiency (%)', format: '0.0%',
							titleTextStyle: {color: 'grey', fontSize: 11}}
				},
		view: {'columns': [3,4,5] }
	}); crt_flteffMM.draw();

// CIV_MIL - YY - CHART - [EU_YY]
	var crt_civmilYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_civmilYY',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1qOIwlihGTbT0xM3oGQIi_xw8bugCetElPE8cs56EWSc/edit?usp=sharing&sheet=CIV_MIL1&range=A5:G34&hl=en_GB',
		options:{
					width: 475, height: 220,
					chartArea: {left: 40, top: 30, width:'65%',height:'50%'},
					title: 'Effective booking procedures (% of time)',
					titleTextStyle : {color: 'grey', fontSize: 11},
					legend: {position:'right',textStyle:{color: 'grey', fontSize: 9}},
					isStacked : 'true',
					series: {
								0: {type:'bars',color:'#7070FF', targetAxisIndex: 0},
								1: {type:'bars',color:'#b2c8b2',targetAxisIndex: 0},
								2: {type:'bars',color:'#71C68D', targetAxisIndex: 0}
							},

					vAxis: { format: '0%', textStyle: {color: 'grey', fontSize: 10},
							},
					hAxis: {title: '* States reported that allocation of military areas had no adverse impact.',
							titleTextStyle: {color: 'grey', fontSize: 9},
							type:'string',
							slantedText:true,
							slantedTextAngle: 90,
							showTextEvery:1,
							textStyle: { fontSize: 10}}
				},
		view: {'columns': [0,4,5,6]}
	}); crt_civmilYY.draw();

// CIV_MIL - YY - TABLE - [EU_YY]
	var tbl_cdr = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_cdr',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1qOIwlihGTbT0xM3oGQIi_xw8bugCetElPE8cs56EWSc/edit?usp=sharing&sheet=CIV_MIL2&range=A5:D7&hl=en_GB',
		options:{ allowHtml: false, width: 470, height: 100},
		view: {columns: [0,1,2,3]}
	}); tbl_cdr.draw();

// ERT SU - YY EU wide - TABLE [EU_YY]
	var tbl_ertSU_YYtgt = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ertSU_YYtgt',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/17GWesIQjsJ6DegVeAskyZaYGBw4o_t2C7j3HTatxlTM/edit?usp=sharing&sheet=ERT_SU_YY&range=A5:H12&hl=en_GB',
		options:{ width: 470, height: 80},
		view: {columns: [1,3,5,7], rows: [5]}
	}); tbl_ertSU_YYtgt.draw();

// ERT SU - YY - CHART [EU_YY]
	var crt_SUYY = new google.visualization.ChartWrapper({
		chartType: 'LineChart',
		containerId: 'crt_SUYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/17GWesIQjsJ6DegVeAskyZaYGBw4o_t2C7j3HTatxlTM/edit?usp=sharing&sheet=ERT_SU_YY&range=A5:H12&hl=en_GB',
		options:{
				width: 475, height: 170,
				chartArea: {left: 80, top: 30, width:'60%',height:'65%'},
				title: 'EU-wide en route SU (Jan.-Dec.)',
				titleTextStyle : {color: '#1F1F2E', fontSize: 12},
				legend: 'none',
				series: {
							0: {type: 'bars', color:'#99badb', targetAxisIndex: 0 },
							1: {type: 'lines', color:'#B89470',  lineWidth: 2, pointSize: 7, targetAxisIndex: 1},
						},
				vAxes:{
							0:{	title:'En route SU',
								titleTextStyle : {color: '#1F1F2E', fontSize: 11},
								textStyle:{color: '8B9BBA'}},
							1:{	title:'% change vs. previous year',
								titleTextStyle : {color: '#1F1F2E', fontSize: 11},
								textStyle:{color:'#B89470'}}
						}
				},
		view : { columns : [1,3,5], rows : [0,1,2,3,4,5,6]}
	}); crt_SUYY.draw();

// CHART EN ROUTE SU - [YTD-MM - EU wide]
	var crt_ertcefSUYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertcefSUYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/17GWesIQjsJ6DegVeAskyZaYGBw4o_t2C7j3HTatxlTM/edit?usp=sharing&sheet=ERT_SU_MM&range=A4:K76&tq=where%20B%3D2013&hl=en_GB',
		options:{
					width: 475, height: 200,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'Monthly en-route SU [act. vs. NPP]',
					titleTextStyle : {color: '#1F1F2E', fontSize: 12},
					legend: 'bottom',
					series: {
								0: {type:'bars',color:'DDC5A6', targetAxisIndex: 0},
							    1: {type:'bars',color:'8B9BBA', targetAxisIndex: 0},
								2: {type:'line',color:'D80032', lineWidth: 2, pointSize: 5, targetAxisIndex: 1},
							},
					vAxes:{
							0:{	title:'En route SU',
								titleTextStyle : {color: 'grey', fontSize: 11},
								textStyle:{color: '#1F1F2E'}},
							1:{	title:'[actual vs. plan - cumulated YTD]',
								titleTextStyle : {color: 'D80032', fontSize: 11},
								textStyle:{color:'D80032'}}
							}
				},
		view: {'columns': [3,5,8,10]}
	}); crt_ertcefSUYY.draw();

// ERT SU - YY - CHART vs target - [EU_YY]
var crt_ertSUYYvstgt = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertSUYYvstgt',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/17GWesIQjsJ6DegVeAskyZaYGBw4o_t2C7j3HTatxlTM/edit?usp=sharing&sheet=ERT_SU_ACT_PP&range=A5:M34&hl=en_GB',
		options:{
					width: 940, height: 220,
					chartArea: {left: 80, top: 30, width:'75%',height:'50%'},
					title: 'En route SU: Actual vs. performance plan (Jan.-Dec.)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: {position:'right',textStyle:{color: 'grey', fontSize: 11}},
					series: {
								0: {type:'bars',color:'#99badb'},
								1: {type:'lines',color:'green', lineWidth: 1},
							    2: {type:'lines',color:'red', lineWidth: 1}
							},
					vAxis: {title: 'actual vs. plan',  format: '0.0%', textStyle: {color: 'grey', fontSize: 11},
							titleTextStyle: {color: 'grey', fontSize: 11}},
					hAxis: {
							slantedTextAngle: 90,
							textStyle: {color: 'grey', fontSize: 11}}
				},
		view: {'columns': [0,8,10,12]}
	}); crt_ertSUYYvstgt.draw();

// ERT CEF DUR - YY - CHART - [EU-YY]
	var crt_ertcefDURYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_ertcefDURYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1U8TSvLZLBSrICJPFN0QGQR3UfolUu7-OuVm4epwmz-Y/edit?usp=sharing&sheet=ERT_CEF&range=A5:O11&hl=en_GB',
		options:{
					width: 475, height: 200,
					chartArea: {left: 70, top: 30, width:'60%',height:'60%'},
					title: 'En route DUR KPI',
					titleTextStyle : {color: '#1F1F2E', fontSize: 12},
					legend: 'bottom',
					series: {
								0: {type:'bars',color:'#b2c8b2', targetAxisIndex: 1},
								1: {type:'bars',color:'#71C68D',targetAxisIndex: 1},
								2: {type:'lines',color:'#7070FF', lineWidth: 1, pointSize: 6, targetAxisIndex: 0},
							    3: {type:'lines',color:'#003366', lineWidth: 1, pointSize: 5, targetAxisIndex: 0},
								4: {type:'lines',color:'#FF9999', lineWidth: 1, pointSize: 6, targetAxisIndex: 0},
							    5: {type:'lines',color:'#FF0000', lineWidth: 1, pointSize: 5, targetAxisIndex: 0},
							},
					vAxes:{
							0:{	title:'Index (2009=100)',format:'#,#',
								titleTextStyle : {color: '#1F1F2E', fontSize: 11},
								textStyle:{color: 'grey'}},
							1:{	minValue: 0, title:'En route unit costs',format:'#,#',
								titleTextStyle : {color: '#71C68D', fontSize: 11},
								textStyle:{color:'#71C68D'}}
							}
				},
		view: {'columns': [1,2,3,8,9,13,14] ,'rows': [0,1,2,3,4,5] }
	}); crt_ertcefDURYY.draw();

// ERT COSTS - YY - OVERVIEW - TABLE - [EU_YY]
	var tbl_ertcstYY_Ov = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_ertcstYY_Ov',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1U8TSvLZLBSrICJPFN0QGQR3UfolUu7-OuVm4epwmz-Y/edit?usp=sharing&sheet=ERT_CEF&range=A5:O11&hl=en_GB',
		options:{ width: 945, height: 155},
		view: {columns: [1,5,6,7,10,11,12,2,3,4], rows: [3,4,5]}
	}); tbl_ertcstYY_Ov.draw();

// TMA COSTS - YY - OVERVIEW - CHART - [EU_YY]
	var crt_tmacstYY = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'crt_tmacstYY',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1tqjQgSOunGTPfhiDH0FchMwoHdfHEmJXeWUtJZiiPg0/edit?usp=sharing&sheet=TR_CEF&range=A5:F11&hl=en_GB',
		options:{
					width: 450, height: 180,
					chartArea: {left: 80, top: 30, width:'60%',height:'60%'},
					title: 'Total terminal ANS costs PI (real terms, M€2009)',
					titleTextStyle : {color: 'grey', fontSize: 12},
					legend: 'none',
					isStacked : 'false',
					seriesType: 'bars',
					colors: ['8B9BBA', '#003366'],
					vAxis: {minValue: 1000, title: 'Terminal ANS costs (M€2009)',
							titleTextStyle: {color: 'grey', fontSize: 11}}
				},
				view: {columns: [1,2,3] , rows: [3,4,5] }
	}); crt_tmacstYY.draw();

// TMA COSTS - YY - OVERVIEW - TABLE - [EU_YY]
var tbl_tmacstYY_Ov = new google.visualization.ChartWrapper({
		chartType: 'Table',
		containerId: 'tbl_tmacstYY_Ov',
		dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1tqjQgSOunGTPfhiDH0FchMwoHdfHEmJXeWUtJZiiPg0/edit?usp=sharing&sheet=TR_CEF&range=A5:F11&hl=en_GB',
		options:{width: 475, height: 135},
		view: {columns: [1,2,3,4], rows: [3,4,5]}
	}); tbl_tmacstYY_Ov.draw();

}
google.setOnLoadCallback(drawVisualization)