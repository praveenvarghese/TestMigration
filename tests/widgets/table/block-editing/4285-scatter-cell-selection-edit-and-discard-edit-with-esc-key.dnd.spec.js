/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select a range of block num cells. Edit the focused num cell and enter string value, Do ctrl+enter and do esc when error dialog pops.",
	() => {
		loadPage("Main Project/home?table-v2=true");

		// Block-selection on table
		findWidget("ExportTable").setScatterSelection([
			[2, 1, 4, 3],
			[0, 1],
			[0, 0],
		]);

		findWidget("ExportTable").pressKeys("String");

		findWidget("ExportTable").pressKeys([SPECIAL_KEYS.escape]);

		findWidget("ExportTable")
			.getSelectionValues(0, 0, 4, 4)
			.should.be.shallowDeepEqual([
				["4.00", "7.00", "10.00", "13.00", "16.00"],
				["5.00", "8.00", "11.00", "14.00", "17.00"],
				["6.00", "9.00", "12.00", "15.00", "18.00"],
				["7.00", "10.00", "13.00", "16.00", "19.00"],
			]);

		// Block-selection on table
		findWidget("ExportTable").setScatterSelection([
			[2, 1, 4, 3],
			[0, 1],
			[0, 0],
		]);

		findWidget("ExportTable")
			.pressKeys("String")
			.pressCtrl([SPECIAL_KEYS.enter]);

		findWidget("ExportTable")
			.getSelectionValues(0, 0, 4, 4)
			.should.be.shallowDeepEqual([
				["4.00", "7.00", "10.00", "13.00", "16.00"],
				["5.00", "8.00", "11.00", "14.00", "17.00"],
				["6.00", "9.00", "12.00", "15.00", "18.00"],
				["7.00", "10.00", "13.00", "16.00", "19.00"],
			]);
	}
);
