/*!
 * @AIMMS_FILE=models/Bugs/GL3436-TooltipHiddenIssue/htt.aimms
 */

scenario("Ticket 3436: Tooltip hidden issue in dialog page", () => {
	loadPage("Main Project/home");

	findWidget("OpenDialog").click();

	findWidget("p_D")
		.getCell(0, 0)
		.click();

	findWidget("p_D").getTooltip().should.exist;

	findWidget("p_D")
		.pickColor(5, 5)
		.should.beSameColorAs([
			colors.colorPrimitiveGrey80.r,
			colors.colorPrimitiveGrey80.g,
			colors.colorPrimitiveGrey80.b,
		]);
});
