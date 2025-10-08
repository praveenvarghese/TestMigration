/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("create a bar-line chart with 2 identifiers and assert its details.", () => {
	loadPage("Main Project/Item Actions");

	// Create new Bar-Line Chart widget
	createWidget("barlinechart", [], "OurBarLineChart", 10, 3);

	//Close the Widget Manager
	closeWidgetManager();

	// Add contents to Bar-Line Chart
	findWidget("OurBarLineChart")
		.getContentsOptionEditor()
		.setContents("CostPerMile", "MaxFlightsPerType");

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

	// Assert count of Barchart elements
	findWidget("OurBarLineChart")
		.getNumberOfBars()
		.should.be.equal(3);

	// Assert Barchart details
	const bars = findWidget("OurBarLineChart").findBars();
	bars.should.include.something.like({
		label: "(Boeing 737,Max. Flights)",
		value: "7.00",
	});
	bars.should.include.something.like({
		label: "(ATR-72,Max. Flights)",
		value: "50.00",
	});
	bars.should.include.something.like({
		label: "(Fokker F-50,Max. Flights)",
		value: "20.00",
	});
});
