/*!
 * @AIMMS_FILE=models/Bugs/GL736-ThresholdValuesNotAppliedImmediately/SingleCubePlayModel.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"GL736 When setting a value for the upper and lower threshold of a Table, the change should be visible immediately (i.e. not only after an explicit F5).",
	() => {
		loadPage("Main Project/home");

		// Make sure the threshold flags are not on the cells to be checked later yet
		findWidget("CameraInfo")
			.getCell(1, 1)
			.hasAnnotations(["threshold-low"])
			.should.be.equal(false);

		findWidget("CameraInfo")
			.getCell(5, 3)
			.hasAnnotations(["threshold-high"])
			.should.be.equal(false);

		// Set the lower and upper threshold of the table
		findWidget("CameraInfo")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Lower threshold")
			.setValue({
				value: "2",
				valueType: "LITERAL",
				optionEditorType: "VALUE",
			});

		findWidget("CameraInfo")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Upper threshold")
			.setValue({
				value: "4",
				valueType: "LITERAL",
				optionEditorType: "VALUE",
			});

		// Check whether the threshold changes have had the expected effect.
		findWidget("CameraInfo")
			.getCell(1, 1)
			.hasAnnotations(["threshold-low"])
			.should.be.equal(true);

		findWidget("CameraInfo")
			.getCell(5, 3)
			.hasAnnotations(["threshold-high"])
			.should.be.equal(true);
	}
);
