/*!
 * @AIMMS_FILE=models/Bugs/GL1495-TableColumnWidths/TableColumnWidths.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("GL1495 - Changing the column width should have the desired effect.", () => {
	loadPage("Main Project/home");

	findWidget("Test1")
		.getNumColsInGridViewport()
		.should.be.equal(7);

	findWidget("Test1")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Default column width")
		.setValue({
			value: "24",
		});

	findWidget("Test1")
		.getNumColsInGridViewport()
		.should.be.equal(3);
});
