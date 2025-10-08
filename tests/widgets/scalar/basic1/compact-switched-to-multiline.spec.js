/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Test setting a scalar to compact mode and assert that multi-line is not supported",
	() => {
		loadPage("Main Project/Scalar/Compact?compact-scalar=true");

		findWidget("compact-scalar")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Enable Multi-Line (1/0)")
			.setValue({
				value: "true",
			});

		findWidget("compact-scalar")
			.getMultilineNotSupportedMessageText()
			.should.eql("");

		findWidget("compact-scalar")
			.getContentsOptionEditor()
			.setContents("MealDescription");

		findWidget("compact-scalar")
			.getMultilineNotSupportedMessageText()
			.should.eql("Multi-Line not supported when Compact is enabled");
	}
);
