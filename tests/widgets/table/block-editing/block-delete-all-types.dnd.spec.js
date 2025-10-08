/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select all cells in a table with all kinds of value types and do some block deletes.",
	() => {
		loadPage("Main Project/home?_aimms_only_highcharts=true");

		// Block-delete the whole table
		findWidget("ResetData").click();
		findWidget("MixedTable").setSelection(0, 0, 4, 6);

		findWidget("MixedTable").pressCtrl([SPECIAL_KEYS.delete]); // Ctrl + DELETE

		findWidget("MixedTable")
			.getSelectionValues(0, 0, 4, 6)
			.should.be.shallowDeepEqual([
				["", "", "", "0.00", "", "", "0.00"],
				["", "", "", "0.00", "", "", "0.00"],
				["", "", "", "0.00", "", "", "0.00"],
				["", "", "", "0.00", "", "", "0.00"],
				["", "", "", "0.00", "", "", "0.00"],
			]);

		// Block-delete a single column
		findWidget("ResetData").click();
		findWidget("MixedTable").setSelection(0, 0, 4, 0);

		findWidget("MixedTable").pressCtrl([SPECIAL_KEYS.delete]); // Ctrl + DELETE

		findWidget("MixedTable")
			.getSelectionValues(0, 0, 4, 0)
			.should.be.shallowDeepEqual([[""], [""], [""], [""], [""]]);

		// Block-delete a single column that starts with a cell which already has the default value (this went wrong at some stage in the process)
		findWidget("ResetData").click();
		findWidget("MixedTable").setSelection(0, 5, 4, 5);

		findWidget("MixedTable").pressCtrl([SPECIAL_KEYS.delete]); // Ctrl + DELETE

		findWidget("MixedTable")
			.getSelectionValues(0, 5, 4, 5)
			.should.be.shallowDeepEqual([[""], [""], [""], [""], [""]]);
	}
);
