/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("create a bar-line chart with 1 identifier and assert its details.", () => {
	loadPage("Main Project/Item Actions");

	// Close the Page Manager
	closeAppManager();

	// Create new Bar-Line Chart widget
	createWidget("barlinechart", [], "OurBarLineChart", 10, 3);

	findWidget("OurBarLineChart").getEmptyWidgetMessage().should.exist;

	// Add 1 content to Bar-Line Chart
	findWidget("OurBarLineChart")
		.getContentsOptionEditor()
		.setContents("CostPerMile");

	findWidget("OurBarLineChart").closeOptionDialog();

	// Assert the X-Axis details
	findWidget("OurBarLineChart")
		.getXAxisElements()
		.should.eql(["Boeing 737", "ATR-72", "Fokker F-50"]);

	// Assert the Y-Axis details
	findWidget("OurBarLineChart")
		.getYAxisElements()
		.should.eql([
			"0",
			"5",
			"10",
			"15",
			"20",
			"25",
			"30",
			"35",
			"40",
			"45",
			"50",
			"55",
			"60",
			"65",
		]);

	// Assert count of Linechart points
	findWidget("OurBarLineChart")
		.getCountOfPoints()
		.should.be.equal(3);

	// Assert Linechart details
	const points = findWidget("OurBarLineChart").findPoints();
	points.should.include.something.like({
		label: "(Boeing 737,Cost/Mile)",
		value: "65.00",
	});
	points.should.include.something.like({
		label: "(ATR-72,Cost/Mile)",
		value: "20.00",
	});
	points.should.include.something.like({
		label: "(Fokker F-50,Cost/Mile)",
		value: "28.00",
	});
});
