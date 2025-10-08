/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select a block of cells in a Table widget using SHIFT + mouse click and type a value to populate the selected block.",
	() => {
		loadPage("Main Project/home");

		findWidget("StringTable")
			.getCell(1, 1)
			.click();

		findWidget("StringTable").pressShift(""); // Keep Shift key pressed

		findWidget("StringTable")
			.getCell(4, 3)
			.click();

		findWidget("StringTable")
			.pressKeys("AHA")
			.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

		findWidget("StringTable")
			.getSelectionValues(1, 1, 4, 3)
			.should.be.shallowDeepEqual([
				["AHA", "AHA", "AHA"],
				["AHA", "AHA", "AHA"],
				["AHA", "AHA", "AHA"],
				["AHA", "AHA", "AHA"],
			]);
	}
);
