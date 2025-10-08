/*!
 * @AIMMS_FILE=models/CubeEngineTests/CubeEngineTests.aimms
 */

scenario("Switch to case comparison mode", () => {
	loadPage("Main Project/Case Comparison Mode");

	const assertTableIsInSingleCaseMode = function() {
		findWidget("P1Table")
			.getNumColsInGridViewport()
			.should.be.equal(3);

		findWidget("P1Table")
			.getNumRowsInGridViewport()
			.should.be.equal(1);

		findWidget("P1Table")
			.getRowHeaderCell(0, 0)
			.getText()
			.should.be.equal("-");

		findWidget("P1Table")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");
	};

	const assertTableIsInCaseComparisonMode = function() {
		findWidget("P1Table")
			.getNumRowsInGridViewport()
			.should.be.equal(2);

		findWidget("P1Table")
			.getRowHeaderCell(0, 0)
			.getText()
			.should.be.equal("Kees1");

		findWidget("P1Table")
			.getRowHeaderCell(1, 0)
			.getText()
			.should.be.equal("Kees10");

		findWidget("P1Table")
			.getCell(0, 0)
			.hasAnnotations(["active-case"])
			.should.be.equal(true);

		findWidget("P1Table")
			.getCell(0, 0)
			.hasFlags(["editable"])
			.should.be.equal(true);

		findWidget("P1Table")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("10.00");

		findWidget("P1Table")
			.getCell(1, 0)
			.hasAnnotations(["case-readOnly"])
			.should.be.equal(true);

		findWidget("P1Table")
			.getCell(1, 0)
			.hasFlags(["readOnly"])
			.should.be.equal(true);
	};

	assertTableIsInSingleCaseMode();

	findWidget("MultipleCase").click();

	assertTableIsInCaseComparisonMode();

	findWidget("SingleCase").click();

	assertTableIsInSingleCaseMode();
});
