/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select all cells in a table with all kinds of value types AND non-default default values and do some block deletes.",
	() => {
		loadPage("Main Project/Default Value Page?_aimms_only_highcharts=true");

		findWidget("ResetData_1").click();

		findWidget("MixedTable_1").goInFullScreenMode();

		findWidget("MixedTable_1").isFullScreen().should.be.true;

		// Block-delete the whole table

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

		findWidget("MixedTable_1").exitFullScreenMode();

		findWidget("ResetData_1").click();

		// Block-delete the whole table

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
	}
);
