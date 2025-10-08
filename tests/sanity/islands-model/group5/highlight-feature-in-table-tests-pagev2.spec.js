/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 */

scenario("Test asserting job gets highlighted on gantt chart.", () => {
	loadPage("Main Project/Highlight Table Test Page");

	findWidget("Highlight table")
		.getCell(0, 1)
		.getCSSStyleProperty("background-color")
		.should.be.equal("rgba(0, 0, 0, 0)");

	findWidget("Highlight table")
		.getCell(0, 1)
		.click();

	findWidget("Highlight table")
		.getCell(0, 1)
		.getCSSStyleProperty("background-color")
		.should.be.equal(colors.colorPureRed.rgb); //rgb(255, 0, 0)
});
