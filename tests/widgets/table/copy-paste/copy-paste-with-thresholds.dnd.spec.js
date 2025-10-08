/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Copy from and to a table which has lower/upper thresholds set.", () => {
	loadPage("Main Project/Big Data");

	// Copy a block with low/medium values to a block with high values. The threshold colouring should adapt accordingly.
	findWidget("SecondExport").setSelection(0, 0, 3, 2);
	findWidget("SecondExport").pressCtrl(["c"]);
	findWidget("SecondExport").pasteToCell(5, 5);

	findWidget("SecondExport")
		.getCell(5, 5)
		.hasAnnotations(["threshold-low"])
		.should.be.equal(true);

	findWidget("SecondExport")
		.getCell(6, 5)
		.hasAnnotations(["threshold-low"])
		.should.be.equal(true);

	findWidget("SecondExport")
		.getCell(7, 5)
		.hasAnnotations(["threshold-low"])
		.should.be.equal(true);

	findWidget("SecondExport")
		.getCell(8, 5)
		.hasAnnotations(["threshold-low"])
		.should.be.equal(true);

	// Copy a block with high values to a block with high values. The threshold colouring should adapt accordingly.
	findWidget("SecondExport").setSelection(0, 5, 2, 7);
	findWidget("SecondExport").pressCtrl(["c"]);
	findWidget("SecondExport").pasteToCell(0, 0);

	findWidget("SecondExport")
		.getCell(0, 0)
		.hasAnnotations(["threshold-high"])
		.should.be.equal(true);

	findWidget("SecondExport")
		.getCell(1, 0)
		.hasAnnotations(["threshold-high"])
		.should.be.equal(true);

	findWidget("SecondExport")
		.getCell(2, 0)
		.hasAnnotations(["threshold-high"])
		.should.be.equal(true);
});
