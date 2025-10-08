/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select all cells in a table with all kinds of value types AND non-default default values and do some block deletes.",
	() => {
		loadPage("Main Project/Default Value Page?_aimms_only_highcharts=true");

		// Block-delete the whole table
		findWidget("ResetData_1").click();
		findWidget("MixedTable_1").setSelection(0, 0, 4, 6);

		findWidget("MixedTable_1").pressCtrl([SPECIAL_KEYS.delete]); // Ctrl + DELETE

		findWidget("MixedTable_1")
			.getSelectionValues(0, 0, 4, 6)
			.should.be.shallowDeepEqual([
				[
					"1980-01-01",
					"Ireland",
					"2000-01-01 12:00:00",
					"3.00",
					"4.00",
					"Life is beautiful",
					"1.00",
				],
				[
					"1980-01-01",
					"Ireland",
					"2000-01-01 12:00:00",
					"3.00",
					"4.00",
					"Life is beautiful",
					"1.00",
				],
				[
					"1980-01-01",
					"Ireland",
					"2000-01-01 12:00:00",
					"3.00",
					"4.00",
					"Life is beautiful",
					"1.00",
				],
				[
					"1980-01-01",
					"Ireland",
					"2000-01-01 12:00:00",
					"3.00",
					"4.00",
					"Life is beautiful",
					"1.00",
				],
				[
					"1980-01-01",
					"Ireland",
					"2000-01-01 12:00:00",
					"3.00",
					"4.00",
					"Life is beautiful",
					"1.00",
				],
			]);

		// Block-delete a single column
		findWidget("ResetData_1").click();
		findWidget("MixedTable_1").setSelection(0, 0, 4, 0);

		findWidget("MixedTable_1").pressCtrl([SPECIAL_KEYS.delete]); // Ctrl + DELETE

		findWidget("MixedTable_1")
			.getSelectionValues(0, 0, 4, 0)
			.should.be.shallowDeepEqual([
				["1980-01-01"],
				["1980-01-01"],
				["1980-01-01"],
				["1980-01-01"],
				["1980-01-01"],
			]);

		// Block-delete a single column that starts with a cell which already has the default value (this went wrong at some stage in the process)
		findWidget("ResetData_1").click();
		findWidget("MixedTable_1").setSelection(0, 5, 4, 5);

		findWidget("MixedTable_1").pressCtrl([SPECIAL_KEYS.delete]); // Ctrl + DELETE

		findWidget("MixedTable_1")
			.getSelectionValues(0, 5, 4, 5)
			.should.be.shallowDeepEqual([
				["Life is beautiful"],
				["Life is beautiful"],
				["Life is beautiful"],
				["Life is beautiful"],
				["Life is beautiful"],
			]);
	}
);
