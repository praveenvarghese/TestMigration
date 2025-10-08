/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 */

scenario("Test multiline scalar", () => {
	loadPage("Main Project/MultilineScalarTestPage");

	findWidget("multilinescalartestpage_1")
		.getVisibleWidgets()
		.should.eql(["normal-scalar", "multiline-scalar"]);

	findWidget("multiline-scalar")
		.getValue()
		.should.be.equal("This is praveen happy birthday \n\n\nTest Enter");

	findWidget("multiline-scalar")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Enable Multi-Line (1/0)").should.exist;

	findWidget("multiline-scalar")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Enable Multi-Line (1/0)")
		.setValue({
			value: "0",
		});

	findWidget("multiline-scalar").closeOptionDialog();

	findWidget("multilinescalartestpage_1")
		.getVisibleWidgets()
		.should.eql(["normal-scalar", "multiline-scalar"]);

	findWidget("multiline-scalar")
		.getValue()
		.should.be.equal("This is praveen happy birthday \n\n\nTest Enter");
});
