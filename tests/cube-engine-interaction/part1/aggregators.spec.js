/*!
 * @AIMMS_FILE=models/CubeEngineTests/CubeEngineTests.aimms
 */

scenario("Check table with multiple identifiers, aggregators and totals", () => {
	loadPage("Main Project/Aggregators");

	findWidget("P3Q3Totals")
		.getNumRowsInGridViewport()
		.should.be.equal(5);

	findWidget("P3Q3Totals")
		.getNumColsInGridViewport()
		.should.be.equal(4);

	findWidget("P3Q3Totals")
		.getRowHeaderCell(4, 0)
		.getText()
		.should.be.equal("total sum");

	findWidget("P3Q3Totals")
		.getColHeaderCell(0, 3)
		.getText()
		.should.be.equal("total max");

	const assertFlagsAndAnnotations = function(
		widgetName,
		row,
		col,
		expectedFlags,
		expectedAnnotations
	) {
		const widget = findWidget(widgetName);

		widget
			.getCell(row, col)
			.hasFlags(expectedFlags)
			.should.be.equal(true);

		widget
			.getCell(row, col)
			.hasAnnotations(expectedAnnotations)
			.should.be.equal(true);
	};

	assertFlagsAndAnnotations("P3Q3Totals", 0, 0, ["readOnly"], ["total", "sum"]);
	assertFlagsAndAnnotations("P3Q3Totals", 1, 0, ["readOnly"], ["total", "sum"]);
	assertFlagsAndAnnotations("P3Q3Totals", 4, 0, ["readOnly"], ["total", "sum", "explicit"]);

	findWidget("P3Q3Totals")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["13.00", "11.00", "14.00", "14.00"],
			["30.00", "20.00", "50.00", "50.00"],
			["50.00", "60.00", "50.00", "60.00"],
			["40.00", "20.00", "50.00", "50.00"],
			["120.00", "100.00", "150.00", "160.00"],
		]);
});
