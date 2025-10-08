/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Check for focus support behaviour on Bubble chart.", () => {
	loadPage("Main Project/WidgetTypes");

	findWidget("LettersForWordStart").selectAll();

	findWidget("FocusSupport")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("");

	findWidget("FocusSupport")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("");

	findWidget("Bubblechart")
		.findBubble("jurk")
		.click();

	findWidget("FocusSupport")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("BubbleSize");

	findWidget("FocusSupport")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("jurk");

	findWidget("Bubblechart")
		.findBubble("bed")
		.click()
		.click();

	findWidget("FocusSupport")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("BubbleSize");

	findWidget("FocusSupport")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("bed");
});
