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

		findWidget("MixedTable_1").setScatterSelection([
			[2, 1, 4, 3],
			[0, 1],
			[0, 0],
		]);

		findWidget("MixedTable_1").pressCtrl([SPECIAL_KEYS.delete]); // Ctrl + DELETE

		findWidget("MixedTable_1")
			.getSelectionValues(0, 0, 4, 4)
			.should.be.shallowDeepEqual([
				["1980-01-01", "Ireland", "2000-01-01 13:56:02", "1.00", "3.00"],
				["1948-06-21", "England", "2000-01-01 14:25:12", "2.00", "3.00"],
				["1990-08-15", "Ireland", "2000-01-01 12:00:00", "3.00", "5.00"],
				["1854-10-16", "Ireland", "2000-01-01 12:00:00", "3.00", "4.00"],
				["1840-06-02", "Ireland", "2000-01-01 12:00:00", "3.00", "3.00"],
			]);

		findWidget("MixedTable_1").exitFullScreenMode();

		findWidget("ResetData_1").click();

		// Block-delete the whole table

		findWidget("MixedTable_1").setScatterSelection([
			[2, 1, 4, 3],
			[0, 1],
			[0, 0],
		]);

		findWidget("MixedTable_1").pressCtrl([SPECIAL_KEYS.delete]); // Ctrl + DELETE

		findWidget("MixedTable_1")
			.getSelectionValues(0, 0, 4, 4)
			.should.be.shallowDeepEqual([
				["1980-01-01", "Ireland", "2000-01-01 13:56:02", "1.00", "3.00"],
				["1948-06-21", "England", "2000-01-01 14:25:12", "2.00", "3.00"],
				["1990-08-15", "Ireland", "2000-01-01 12:00:00", "3.00", "5.00"],
				["1854-10-16", "Ireland", "2000-01-01 12:00:00", "3.00", "4.00"],
				["1840-06-02", "Ireland", "2000-01-01 12:00:00", "3.00", "3.00"],
			]);
	}
);
