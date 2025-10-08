/*!
 * @AIMMS_FILE=models/Bugs/GL4262-MissingTooltip/SmallExample4262.aimms
 */

scenario("Ticket #4262: Tooltip toggling did not always work as expected", () => {
	loadPage("Main Project/home");

	findWidget("XYTable")
		.getCell(0, 0)
		.click();

	findWidget("XYTable")
		.getGridValues()
		.should.be.shallowDeepEqual([["custom tooltip X"], ["custom tooltip X"]]);

	findWidget("XYTable")
		.getTooltip()
		.should.equal("custom tooltip X");

	findWidget("Toggle").click();

	findWidget("XYTable")
		.getGridValues()
		.should.be.shallowDeepEqual([["custom tooltip Y"], ["custom tooltip Y"]]);

	findWidget("XYTable")
		.getCell(0, 0)
		.click();

	findWidget("XYTable")
		.getTooltip()
		.should.equal("custom tooltip Y");

	findWidget("Toggle").click();

	findWidget("XYTable")
		.getGridValues()
		.should.be.shallowDeepEqual([["custom tooltip X"], ["custom tooltip X"]]);

	findWidget("XYTable")
		.getCell(0, 0)
		.click();

	findWidget("XYTable")
		.getTooltip()
		.should.equal("custom tooltip X");
});
