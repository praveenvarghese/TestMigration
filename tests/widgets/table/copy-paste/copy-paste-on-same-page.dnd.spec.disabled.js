/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Copy from a table and paste on a table on the same page.", () => {
	loadPage("Main Project/CopyPasteGridPage?_aimms_only_debug_focus_cell_support");

	// Copy a single cell from the source table and paste it into the destination table
	findWidget("CopyFromTable").setSelection(2, 0, 2, 0);

	findWidget("CopyFromTable").pressCtrl(["c"]);

	findWidget("CopyToTable").setSelection(5, 0, 5, 0);

	findWidget("CopyToTable").pressCtrl(["v"]);

	findWidget("CopyToTable")
		.getSelectionValues(4, 0, 6, 2)
		.should.be.shallowDeepEqual([
			["60.00", "170.00", "380.00"],
			["170.00", "5.00", "140.00"],
			["30.00", "50.00", "40.00"],
		]);

	// A block-edit followed by a copy/paste operation
	findWidget("CopyFromTable").setSelection(0, 3, 2, 6);

	findWidget("CopyFromTable")
		.pressKeys("19.75")
		.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

	findWidget("CopyFromTable").pressCtrl(["c"]);

	findWidget("CopyToTable").setSelection(4, 0, 4, 0);

	findWidget("CopyToTable").pressCtrl(["v"]);

	findWidget("CopyToTable")
		.getSelectionValues(4, 0, 6, 3)
		.should.be.shallowDeepEqual([
			["19.75", "19.75", "19.75"],
			["19.75", "19.75", "19.75"],
			["19.75", "19.75", "19.75"],
		]);
});
