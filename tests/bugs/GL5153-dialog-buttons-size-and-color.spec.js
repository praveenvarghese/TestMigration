/*!
 * @AIMMS_FILE=models/Bugs/GL5153-DialogButtonSizeAndColor/DialogAndScalar.aimms
 */

scenario("Check size and color of dialog buttons, see customer ticket #5153 for details.", () => {
	loadPage("Main Project/home");

	findWidget("OpenDialog").click();

	waitForBackgroundActionToComplete();

	getDialog().should.exist;

	const pixelTolerance = 2;
	findDialog()
		.assertButtonDimensions("Cancel", 110, constants.HEADERLESS_WIDGET_HEIGHT, pixelTolerance)
		.should.eql(true);

	findDialog()
		.assertButtonStyle("Cancel", "backgroundColor")
		.should.eql(colors.colorPrimitiveGrey10.rgbWithWhitespace);

	findDialog()
		.assertButtonDimensions("OK", 110, constants.HEADERLESS_WIDGET_HEIGHT, pixelTolerance)
		.should.eql(true);

	findDialog()
		.assertButtonStyle("OK", "backgroundColor")
		.should.eql(colors.colorPrimitiveAccentBlue100.rgbWithWhitespace);
});
