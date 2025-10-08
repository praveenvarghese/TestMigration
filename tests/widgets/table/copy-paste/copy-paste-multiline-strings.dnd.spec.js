/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

function ResetData() {
	findWidget("ResetData").click();
}

scenario(
	"Copy a multiline string into string cells, both 'regular' and by block-copy. Also quoted strings.",
	() => {
		loadPage("Main Project/home");

		// Copy the value "Quotes" (WITH the quotes to another cell)
		ResetData();
		findWidget("MixedTable")
			.getCell(0, 5)
			.setValue('"Quotes"');

		findWidget("MixedTable").setSelection(0, 5, 0, 5);
		findWidget("MixedTable").pressCtrl(["c"]);

		findWidget("MixedTable")
			.getCell(1, 5)
			.click();
		findWidget("MixedTable").pressCtrl(["v"]);
		findWidget("MixedTable")
			.getSelectionValues(0, 5, 4, 5)
			.should.be.shallowDeepEqual([
				['"Quotes"'],
				['"Quotes"'],
				[""],
				["1980-07-23"],
				["Ireland"],
			]);

		ResetData();
		findWidget("CreateMultilineString").click();

		// Regular copy/paste
		findWidget("MixedTable").copyCell(1, 5);
		findWidget("MixedTable").pasteToCell(3, 5);
		findWidget("MixedTable")
			.getSelectionValues(0, 5, 4, 5)
			.should.be.shallowDeepEqual([
				[""],
				["This\nis\na\nmulti-line\nstring!"],
				[""],
				["This\nis\na\nmulti-line\nstring!"],
				["Ireland"],
			]);

		// Block copy/paste
		ResetData();
		findWidget("CreateMultilineString").click();

		findWidget("MixedTable").setSelection(0, 5, 4, 5);
		findWidget("MixedTable").pressCtrl(["c"]);
		findWidget("StringTable")
			.getCell(0, 0)
			.click();
		findWidget("StringTable").pressCtrl(["v"]);
		findWidget("StringTable")
			.getSelectionValues(0, 0, 4, 0)
			.should.be.shallowDeepEqual([
				[""],
				["This\nis\na\nmulti-line\nstring!"],
				[""],
				["1980-07-23"],
				["Ireland"],
			]);

		ResetData();
	}
);
