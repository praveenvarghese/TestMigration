/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Test setting a scalar to compact mode and assert that it is compact", () => {
	loadPage("Main Project/Scalar/Compact?compact-scalar=true");

	findWidget("non-compact-scalar")
		.getDocks()
		.should.eql(["top", "center"]);

	findWidget("non-compact-scalar")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	findWidget("non-compact-scalar").movePointerToWidget();
	findWidget("non-compact-scalar")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	findWidget("non-compact-scalar")
		.getValue()
		.should.be.equal("6,878.94 $/kg");

	findWidget("non-compact-scalar")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Enable Compact mode (1/0)")
		.setValue({
			value: "true",
		});

	findWidget("non-compact-scalar")
		.getDocks()
		.should.eql(["top", "center"]);

	findWidget("non-compact-scalar").movePointerToWidget();
	findWidget("non-compact-scalar")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	// Known bug in compact scalar mode; value not visible.
	// findWidget("non-compact-scalar")
	// 	.getValue()
	// 	.should.be.equal("6,878.94 $/kg");
});
