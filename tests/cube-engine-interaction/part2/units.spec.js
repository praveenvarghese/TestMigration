/*!
 * @AIMMS_FILE=models/CubeEngineTests/CubeEngineTests.aimms
 */

scenario("Check display of units", () => {
	loadPage("Main Project/Units");

	findWidget("Q2Table")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("Q2Table")
		.getNumColsInGridViewport()
		.should.be.equal(3);

	findWidget("Q2Table")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("1.71 m");

	findWidget("ToggleConvention").click();

	findWidget("Q2Table")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("5.61 ft");

	findWidget("Q2Table")
		.getCell(0, 0)
		.mouseHover();

	findWidget("Q2Table")
		.getCell(0, 0)
		.getChildTooltip()
		.should.be.equal("5.61 ft");

	findWidget("ToggleConvention").click();

	findWidget("Q2Table")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("1.71 m");
});
