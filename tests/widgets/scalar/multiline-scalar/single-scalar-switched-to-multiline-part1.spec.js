/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Test multiline scalar", () => {
	loadPage("Main Project/MultilineScalarTestPage");

	findWidget("normal-scalar")
		.getValue()
		.should.be.equal("NormalScalar");

	findWidget("normal-scalar")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Enable Multi-Line (1/0)")
		.setValue({
			value: "1",
		});

	findWidget("normal-scalar").setValue("Normal Scalar Test");

	findWidget("normal-scalar")
		.getValue()
		.should.be.equal("Normal Scalar Test");
});
