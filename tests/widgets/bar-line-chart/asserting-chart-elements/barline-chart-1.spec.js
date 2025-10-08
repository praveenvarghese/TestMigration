/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("On a multi-contents Bar-Line chart, assert the chart elements details.", () => {
	loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

	// Close the Page Manager sidebar
	closeAppManager();

	// Assert the X-Axis details
	findWidget("BarLineChart_1_1")
		.getXAxisElements()
		.should.eql([
			"MKG",
			"HS",
			"JP",
			"PK",
			"PV",
			"AM",
			"GLD",
			"MR",
			"KH",
			"MB",
			"EN",
			"OL",
			"MT",
			"LS",
		]);

	// Assert the Y-Axis details
	findWidget("BarLineChart_1_1")
		.getYAxisElements()
		.should.eql(["−10", "0", "10", "20", "30", "40", "50", "60", "70"]);

	// Assert count of Linechart points
	findWidget("BarLineChart_1_1")
		.getCountOfPoints()
		.should.be.equal(14);

	// Assert count of Barchart elements
	findWidget("BarLineChart_1_1")
		.getNumberOfBars()
		.should.be.equal(41);

	// Assert Linechart details
	const points = findWidget("BarLineChart_1_1").findPoints();
	points.should.include.something.like({
		label: "(MKG,IA_Copy_JobStart)",
		value: "12.11",
	});
	points.should.include.something.like({
		label: "(HS,IA_Copy_JobStart)",
		value: "9.36",
	});
	points.should.include.something.like({
		label: "(JP,IA_Copy_JobStart)",
		value: "5.11",
	});
	points.should.include.something.like({
		label: "(PK,IA_Copy_JobStart)",
		value: "4.07",
	});
	points.should.include.something.like({
		label: "(PV,IA_Copy_JobStart)",
		value: "6.81",
	});
	points.should.include.something.like({
		label: "(AM,IA_Copy_JobStart)",
		value: "19.34",
	});
	points.should.include.something.like({
		label: "(GLD,IA_Copy_JobStart)",
		value: "0.00",
	});
	points.should.include.something.like({
		label: "(MR,IA_Copy_JobStart)",
		value: "14.14",
	});
	points.should.include.something.like({
		label: "(KH,IA_Copy_JobStart)",
		value: "11.74",
	});
	points.should.include.something.like({
		label: "(MB,IA_Copy_JobStart)",
		value: "3.72",
	});
	points.should.include.something.like({
		label: "(EN,IA_Copy_JobStart)",
		value: "5.79",
	});
	points.should.include.something.like({
		label: "(OL,IA_Copy_JobStart)",
		value: "10.18",
	});
	points.should.include.something.like({
		label: "(MT,IA_Copy_JobStart)",
		value: "13.30",
	});
	points.should.include.something.like({
		label: "(LS,IA_Copy_JobStart)",
		value: "6.90",
	});

	// Assert Barchart details
	const bars = findWidget("BarLineChart_1_1").findBars();
	bars.should.include.something.like({
		label: "(MKG,IA_Copy_JobDuration)",
		value: "20.07",
	});
	bars.should.include.something.like({
		label: "(MKG,IA_JobDuration)",
		value: "20.07",
	});
	bars.should.include.something.like({
		label: "(MKG,IA_JobStart)",
		value: "12.11",
	});
	bars.should.include.something.like({
		label: "(HS,IA_Copy_JobDuration)",
		value: "11.39",
	});
	bars.should.include.something.like({
		label: "(HS,IA_JobDuration)",
		value: "-11.39",
	});
	bars.should.include.something.like({
		label: "(HS,IA_JobStart)",
		value: "9.36",
	});
	bars.should.include.something.like({
		label: "(JP,IA_Copy_JobDuration)",
		value: "2.05",
	});
	bars.should.include.something.like({
		label: "(JP,IA_JobDuration)",
		value: "2.05",
	});
	bars.should.include.something.like({
		label: "(JP,IA_JobStart)",
		value: "5.11",
	});
	bars.should.include.something.like({
		label: "(PK,IA_Copy_JobDuration)",
		value: "3.32",
	});
	bars.should.include.something.like({
		label: "(PK,IA_JobDuration)",
		value: "3.32",
	});
	bars.should.include.something.like({
		label: "(PK,IA_JobStart)",
		value: "-4.07",
	});
	bars.should.include.something.like({
		label: "(PV,IA_Copy_JobDuration)",
		value: "13.08",
	});
	bars.should.include.something.like({
		label: "(PV,IA_JobDuration)",
		value: "-13.08",
	});
	bars.should.include.something.like({
		label: "(PV,IA_JobStart)",
		value: "-6.81",
	});
	bars.should.include.something.like({
		label: "(AM,IA_Copy_JobDuration)",
		value: "11.17",
	});
	bars.should.include.something.like({
		label: "(AM,IA_JobDuration)",
		value: "11.17",
	});
	bars.should.include.something.like({
		label: "(AM,IA_JobStart)",
		value: "19.34",
	});
	bars.should.include.something.like({
		label: "(GLD,IA_Copy_JobDuration)",
		value: "4.48",
	});
	bars.should.include.something.like({
		label: "(GLD,IA_JobDuration)",
		value: "4.48",
	});
	bars.should.include.something.like({
		label: "(GLD,IA_JobStart)",
		value: "0.00",
	});
	bars.should.include.something.like({
		label: "(MR,IA_Copy_JobDuration)",
		value: "12.80",
	});
	bars.should.include.something.like({
		label: "(MR,IA_JobDuration)",
		value: "12.80",
	});
	bars.should.include.something.like({
		label: "(MR,IA_JobStart)",
		value: "14.14",
	});
	bars.should.include.something.like({
		label: "(KH,IA_Copy_JobDuration)",
		value: "9.87",
	});
	bars.should.include.something.like({
		label: "(KH,IA_JobDuration)",
		value: "9.87",
	});
	bars.should.include.something.like({
		label: "(KH,IA_JobStart)",
		value: "11.74",
	});
	bars.should.include.something.like({
		label: "(MB,IA_Copy_JobDuration)",
		value: "18.34",
	});
	bars.should.include.something.like({
		label: "(MB,IA_JobDuration)",
		value: "18.34",
	});
	bars.should.include.something.like({
		label: "(MB,IA_JobStart)",
		value: "-3.72",
	});
	bars.should.include.something.like({
		label: "(EN,IA_Copy_JobDuration)",
		value: "10.30",
	});
	bars.should.include.something.like({
		label: "(EN,IA_JobDuration)",
		value: "-10.30",
	});
	bars.should.include.something.like({
		label: "(EN,IA_JobStart)",
		value: "-5.79",
	});
	bars.should.include.something.like({
		label: "(OL,IA_Copy_JobDuration)",
		value: "21.60",
	});
	bars.should.include.something.like({
		label: "(OL,IA_JobDuration)",
		value: "21.60",
	});
	bars.should.include.something.like({
		label: "(OL,IA_JobStart)",
		value: "10.18",
	});
	bars.should.include.something.like({
		label: "(MT,IA_Copy_JobDuration)",
		value: "28.45",
	});
	bars.should.include.something.like({
		label: "(MT,IA_JobDuration)",
		value: "28.45",
	});
	bars.should.include.something.like({
		label: "(MT,IA_JobStart)",
		value: "13.30",
	});
	bars.should.include.something.like({
		label: "(LS,IA_Copy_JobDuration)",
		value: "34.66",
	});
	bars.should.include.something.like({
		label: "(LS,IA_JobDuration)",
		value: "34.66",
	});
	bars.should.include.something.like({
		label: "(LS,IA_JobStart)",
		value: "-6.90",
	});
});
