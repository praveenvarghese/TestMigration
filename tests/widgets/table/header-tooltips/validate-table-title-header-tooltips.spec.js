/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validate display of tooltips for table title headers", () => {
	loadPage("Main Project/home");

	findWidget("PepperData")
		.getDataHeaderCell(1, 0)
		.mouseHover();

	findWidget("PepperData")
		.getDataHeaderCell(1, 0)
		.getTitleHeaderTooltip()
		.should.be.equal("PepperTypes");

	findWidget("idelemtext").click();

	findWidget("PepperData")
		.getDataHeaderCell(1, 0)
		.mouseHover();

	findWidget("PepperData")
		.getDataHeaderCell(1, 0)
		.getTitleHeaderTooltip()
		.should.be.equal("Types of Peppers");

	findWidget("idtooltip").click();

	loadPage("Main Project/home");

	findWidget("PepperData")
		.getDataHeaderCell(1, 0)
		.mouseHover();

	findWidget("PepperData")
		.getDataHeaderCell(1, 0)
		.getTitleHeaderTooltip()
		.should.be.equal("Wow, what a peppers!");
});
