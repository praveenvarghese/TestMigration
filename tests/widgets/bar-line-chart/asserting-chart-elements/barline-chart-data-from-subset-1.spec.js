/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("For a Bar-Line chart with data from a SubSet indexes, asserting the data shown.", () => {
	loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts");

	// Close the Page Manager sidebar
	closeAppManager();

	// Assert the X-Axis details
	// Assert the ElementText Annotations are applied
	findWidget("Another_BLC3")
		.getXAxisElements()
		.should.eql([
			"GLD",
			"Harish Sunkerikar",
			"JayaPrakash Dasaria",
			"Madhu K Gowda",
			"MR",
			"Pratap Kumble",
			"Praveen Varghese",
		]);

	// Assert the Y-Axis details
	findWidget("Another_BLC3")
		.getYAxisElements()
		.should.eql([
			"-86",
			"-81",
			"-76",
			"-71",
			"-66",
			"-61",
			"-56",
			"-51",
			"-46",
			"-41",
			"-36",
			"-31",
			"-26",
			"-21",
			"-16",
			"-15",
		]);

	// Assert count of Linechart points
	findWidget("Another_BLC3")
		.getCountOfPoints()
		.should.be.equal(7);

	// Assert count of Barchart elements
	findWidget("Another_BLC3")
		.getNumberOfBars()
		.should.be.equal(7);

	// Assert Linechart details
	const points = findWidget("Another_BLC3").findPoints();
	points.should.include.something.like({
		label: "(GLD,IA_InfinityTeam_JobStart)",
		value: "-23.95",
	});
	points.should.include.something.like({
		label: "(Harish Sunkerikar,IA_InfinityTeam_JobStart)",
		value: "-25.82",
	});
	points.should.include.something.like({
		label: "(JayaPrakash Dasaria,IA_InfinityTeam_JobStart)",
		value: "-20.00",
	});
	points.should.include.something.like({
		label: "(Madhu K Gowda,IA_InfinityTeam_JobStart)",
		value: "-43.36",
	});
	points.should.include.something.like({
		label: "(MR,IA_InfinityTeam_JobStart)",
		value: "-59.29",
	});
	points.should.include.something.like({
		label: "(Pratap Kumble,IA_InfinityTeam_JobStart)",
		value: "-41.35",
	});
	points.should.include.something.like({
		label: "(Praveen Varghese,IA_InfinityTeam_JobStart)",
		value: "-58.98",
	});

	// Assert Barchart details
	const bars = findWidget("Another_BLC3").findBars();
	bars.should.include.something.like({
		label: "(GLD,IA_InfinityTeam_JobDuration)",
		value: "-72.53",
	});
	bars.should.include.something.like({
		label: "(Harish Sunkerikar,IA_InfinityTeam_JobDuration)",
		value: "-62.59",
	});
	bars.should.include.something.like({
		label: "(JayaPrakash Dasaria,IA_InfinityTeam_JobDuration)",
		value: "-84.91",
	});
	bars.should.include.something.like({
		label: "(Madhu K Gowda,IA_InfinityTeam_JobDuration)",
		value: "-68.14",
	});
	bars.should.include.something.like({
		label: "(MR,IA_InfinityTeam_JobDuration)",
		value: "-88.17",
	});
	bars.should.include.something.like({
		label: "(Pratap Kumble,IA_InfinityTeam_JobDuration)",
		value: "-74.31",
	});
	bars.should.include.something.like({
		label: "(Praveen Varghese,IA_InfinityTeam_JobDuration)",
		value: "-71.96",
	});
});
