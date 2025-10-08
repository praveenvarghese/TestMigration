/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Copy from and to a table which has scrollbars on it", () => {
	loadPage("Main Project/Big Data");

	// Copy a rectangular block to the a cell which is at the right end of the visible part of the table
	findWidget("BigTable").setSelection(0, 0, 3, 6);
	findWidget("BigTable").pressCtrl(["c"]);
	findWidget("BigTable").pasteToCell(0, 14);

	findWidget("BigTable")
		.getSelectionValues(0, 14, 3, 20)
		.should.be.shallowDeepEqual([
			["25.60", "12.60", "26.30", "22.80", "10.20", "10.60", "19.20"],
			["5.80", "10.00", "11.70", "17.20", "11.10", "16.70", "19.50"],
			["10.60", "4.10", "24.00", "21.10", "20.30", "10.10", "29.80"],
			["14.20", "24.90", "23.80", "22.60", "6.70", "10.60", "18.40"],
		]);
});
