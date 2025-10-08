/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Copy aggregator cells from a table", () => {
	loadPage("Main Project/Big Data");

	// Copy a rectangular block to the a cell which is both at the bottom end and the rightmost end of the visible part of the table
	findWidget("Fourth Export").setSelection(3, 0, 4, 8);
	findWidget("Fourth Export").pressCtrl(["c"]);
	findWidget("Fourth Export").pasteToCell(0, 0);

	findWidget("Fourth Export")
		.getSelectionValues(0, 0, 1, 8)
		.should.be.shallowDeepEqual([
			["16.00", "25.00", "34.00", "43.00", "52.00", "61.00", "70.00", "79.00", "88.00"],
			[
				"72.00",
				"99.00",
				"126.00",
				"153.00",
				"180.00",
				"207.00",
				"234.00",
				"261.00",
				"288.00",
			],
		]);

	// Afterwards, verify that the item actions still work after the copy action
	findWidget("Fourth Export")
		.getCell(0, 5)
		.rightClick()
		.getItemActionDetails(0)
		.getIcon()
		.click();

	// Assert Dialog page is shown.
	findDialog()
		.getTitle()
		.should.equal("Info on Ireland");
	findWidget("CountryExport")
		.getValue()
		.should.equal("61");
	findDialog()
		.findButton("Ok")
		.click();
});
