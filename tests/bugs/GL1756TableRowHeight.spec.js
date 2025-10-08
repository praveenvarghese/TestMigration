/*!
 * @AIMMS_FILE=models/Bugs/GL1756-TableRowHeight/TableRowHeight.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("GL1756 - Changing row height did not have the expected effect anymore.", () => {
	loadPage("Main Project/home");

	findWidget("AuthorTable")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("AuthorTable")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Default row height")
		.setValue({
			value: "1",
		});

	findWidget("AuthorTable")
		.getNumRowsInGridViewport()
		.should.be.equal(5);
});
