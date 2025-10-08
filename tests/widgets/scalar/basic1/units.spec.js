/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Create a scalar", () => {
	loadPage("Main Project/Scalar/Compact?compact-scalar=true");

	findWidget("non-compact-scalar")
		.getValue()
		.should.be.equal("6,878.94 $/kg");

	findWidget("non-compact-scalar")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Show Units")
		.setValue({
			value: "false",
		});

	findWidget("non-compact-scalar")
		.getValue()
		.should.be.equal("6,878.94");
});
