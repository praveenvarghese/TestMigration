/*!
 * @AIMMS_FILE=models/BubbleAxisTooltipTest/BubbleAxisTooltipTest.aimms
 */

scenario("Custom tooltip behaviour on Bubble chart axes.", () => {
	loadPage("Main Project/home");

	// Check that no tooltip is present when not hovering the X axis label
	findWidget("Football")
		.hasXAxisLabelTooltip()
		.should.eql(false);

	// Validate Custom tooltip is displayed when hovered on X axis label
	findWidget("Football")
		.getXAxisLabel()
		.moveTo();

	findWidget("Football")
		.hasXAxisLabelTooltip()
		.should.eql(true);

	// Check that no tooltip is present when not hovering the Y axis label
	findWidget("Football")
		.hasYAxisLabelTooltip()
		.should.eql(false);

	// Validate Custom tooltip is displayed when hovered on Y axis label
	findWidget("Football")
		.getYAxisLabel()
		.moveTo();

	findWidget("Football")
		.hasYAxisLabelTooltip()
		.should.eql(true);

	// Check that no tooltip is present when not hovering the size axis label
	findWidget("Football")
		.hasSizeLabelTooltip()
		.should.eql(false);

	// Validate Custom tooltip is displayed when hovered on size axis label
	findWidget("Football")
		.getSizeAxisLabel()
		.moveTo();

	findWidget("Football")
		.hasSizeLabelTooltip()
		.should.eql(true);
});
