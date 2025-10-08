/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function ResetData() {
	findWidget("ResetData").click();
}

scenario(
	"Double-click on a cell (to enter edit mode) and then press CTRL+V. this should do a block paste for similar range of block copied cells ",
	() => {
		loadPage("Main Project/home?dnd=true");

		ResetData();

		// Copy a string cell to another calendar cell
		findWidget("StringTable").setSelection(1, 3, 4, 3);

		findWidget("StringTable").pressCtrl(["c"]);

		// Copy a String cell to another calendar cell
		findWidget("StringTable")
			.getCell(1, 4)
			.doubleClick();

		findWidget("StringTable").pressCtrl(["v"]);

		findWidget("StringTable").pressKeys([SPECIAL_KEYS.escape]);

		findWidget("StringTable")
			.getSelectionValues(1, 4, 4, 4)
			.should.be.shallowDeepEqual([[`17`], [`18`], [`19`], ["20"]]);

		ResetData();

		// Copy a string cell to another calendar cell
		findWidget("MixedTable").copyCell(1, 3);

		// Copy a String cell to another calendar cell
		findWidget("MixedTable")
			.getCell(0, 3)
			.doubleClick();

		findWidget("MixedTable").pressCtrl(["v"]);

		findWidget("MixedTable").pressKeys([SPECIAL_KEYS.escape]);

		findWidget("MixedTable")
			.getCell(0, 3)
			.getValue()
			.should.be.eql("1.00");

		ResetData();
	}
);
