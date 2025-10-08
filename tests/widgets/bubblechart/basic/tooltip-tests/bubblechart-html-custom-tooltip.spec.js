/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Custom and HTML tooltip behaviour on Bubble chart.", () => {
	loadPage("Main Project/Charts/Tooltip-BubbleChart");

	// Validate Custom tooltip is displayed when hovered on bubble
	findWidget("tootipBubbleChart").getBubbleWithToolTip("Apple");

	findWidget("tootipBubbleChart")
		.getTooltip()
		.should.contain("This is custom Tool Tip");

	// Validate HTML tooltip is displayed when hovered on bubble
	findWidget("loadHTMLTooltip").click();

	findWidget("tootipBubbleChart").getBubbleWithToolTip("Apple");

	findWidget("tootipBubbleChart")
		.getTooltip()
		.should.eql("You have selected HTML tooltip");
});
