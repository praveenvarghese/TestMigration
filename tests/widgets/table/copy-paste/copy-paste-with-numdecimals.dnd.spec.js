/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Copy from a table which has a different value for NumDecimals specified.", () => {
	loadPage("Main Project/Big Data");

	// Copy a block from a table with 2 decimals set.
	findWidget("SecondExport").setSelection(0, 0, 2, 2);
	findWidget("SecondExport").pressCtrl(["c"]);

	// Paste the block to a table with 4 decimals set.
	findWidget("Third Export").pasteToCell(5, 5);

	findWidget("Third Export")
		.getSelectionValues(5, 5, 7, 7)
		.should.be.shallowDeepEqual([
			["4.0000", "7.0000", "10.0000"],
			["5.0000", "8.0000", "11.0000"],
			["6.0000", "9.0000", "12.0000"],
		]);
});
