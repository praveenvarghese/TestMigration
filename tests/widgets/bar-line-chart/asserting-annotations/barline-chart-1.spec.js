/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("For a multi-contents Bar-Line chart assert custom Annotations on chart elements.", () => {
	loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

	// Close the Page Manager sidebar
	closeAppManager();

	//#region Assert no custom annotations are available for chart elements

	let MKG_IA_Copy_JobStart = findWidget("BarLineChart_1_1").findPoints([
		"MKG",
		"IA_Copy_JobStart",
	]);
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	let HS_IA_Copy_JobStart = findWidget("BarLineChart_1_1").findPoints(["HS", "IA_Copy_JobStart"]);
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	let PV_IA_JobStart = findWidget("BarLineChart_1_1").findBars(["PV", "IA_JobStart"]);
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	let PV_IA_JobDuration = findWidget("BarLineChart_1_1").findBars(["PV", "IA_JobDuration"]);
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	let PV_IA_Copy_JobDuration = findWidget("BarLineChart_1_1").findBars([
		"PV",
		"IA_Copy_JobDuration",
	]);
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	let OL_IA_JobStart = findWidget("BarLineChart_1_1").findBars(["OL", "IA_JobStart"]);
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	let OL_IA_JobDuration = findWidget("BarLineChart_1_1").findBars(["OL", "IA_JobDuration"]);
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	let OL_IA_Copy_JobDuration = findWidget("BarLineChart_1_1").findBars([
		"OL",
		"IA_Copy_JobDuration",
	]);
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	//#endregion

	// Click on the button that loads Annotations data
	findWidget("Load_Annotations_BarLineChart").click();

	//#region Assert respective custom annotations are available for chart elements
	MKG_IA_Copy_JobStart = findWidget("BarLineChart_1_1").findPoints(["MKG", "IA_Copy_JobStart"]);
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	MKG_IA_Copy_JobStart.should.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	MKG_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	HS_IA_Copy_JobStart = findWidget("BarLineChart_1_1").findPoints(["HS", "IA_Copy_JobStart"]);
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	HS_IA_Copy_JobStart.should.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	HS_IA_Copy_JobStart.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	PV_IA_JobStart = findWidget("BarLineChart_1_1").findBars(["PV", "IA_JobStart"]);
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	PV_IA_JobStart.should.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	PV_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	PV_IA_JobDuration = findWidget("BarLineChart_1_1").findBars(["PV", "IA_JobDuration"]);
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	PV_IA_JobDuration.should.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	PV_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	PV_IA_Copy_JobDuration = findWidget("BarLineChart_1_1").findBars(["PV", "IA_Copy_JobDuration"]);
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	PV_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	PV_IA_Copy_JobDuration.should.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	OL_IA_JobStart = findWidget("BarLineChart_1_1").findBars(["OL", "IA_JobStart"]);
	OL_IA_JobStart.should.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	OL_IA_JobStart.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	OL_IA_JobDuration = findWidget("BarLineChart_1_1").findBars(["OL", "IA_JobDuration"]);
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	OL_IA_JobDuration.should.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	OL_IA_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});

	OL_IA_Copy_JobDuration = findWidget("BarLineChart_1_1").findBars(["OL", "IA_Copy_JobDuration"]);
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1A_Annotation", "MKG_Annotation_A1"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_1B_Annotation", "MKG_Annotation_B1"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2A_Annotation", "MKG_Annotation_A2"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_2B_Annotation", "MKG_Annotation_B2"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3A_Annotation", "MKG_Annotation_A3"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_3B_Annotation", "MKG_Annotation_B3"],
	});
	OL_IA_Copy_JobDuration.should.include.something.like({
		annotations: ["MKG_4A_Annotation", "MKG_Annotation_A4"],
	});
	OL_IA_Copy_JobDuration.should.not.include.something.like({
		annotations: ["MKG_4B_Annotation", "MKG_Annotation_B4"],
	});
	//#endregion
});
