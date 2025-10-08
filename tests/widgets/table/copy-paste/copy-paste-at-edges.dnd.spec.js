/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function ResetData() {
	findWidget("ResetData").click();
}

scenario(
	"Copy from and to a table onto 'boundary' cells (i.e. cells that cannot really perform a full paste due to lack of available cells).",
	() => {
		loadPage("Main Project/home");

		ResetData();

		// Copy a block of data to a location where the whole block will not fit completely
		findWidget("ExportTable").setSelection(0, 0, 4, 4);
		findWidget("ExportTable").pressCtrl(["c"]);
		findWidget("ExportTable").pasteToCell(6, 6);
		findWidget("ExportTable")
			.getSelectionValues(6, 6, 8, 8)
			.should.be.shallowDeepEqual([
				["4.00", "7.00", "10.00"],
				["5.00", "8.00", "11.00"],
				["6.00", "9.00", "12.00"],
			]);

		ResetData();
	}
);
