/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select a block of cells in a Table widget using SHIFT+arrow keys and type a value to populate the whole block.",
	() => {
		loadPage("Main Project/home");

		findWidget("StringTable")
			.getCell(1, 1)
			.click()
			.pressShift([
				SPECIAL_KEYS.arrow_down,
				SPECIAL_KEYS.arrow_right,
				SPECIAL_KEYS.arrow_down,
				SPECIAL_KEYS.arrow_down,
				SPECIAL_KEYS.arrow_right,
			]);

		findWidget("StringTable")
			.pressKeys("Hoi")
			.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

		findWidget("StringTable")
			.getSelectionValues(1, 1, 4, 3)
			.should.be.shallowDeepEqual([
				["Hoi", "Hoi", "Hoi"],
				["Hoi", "Hoi", "Hoi"],
				["Hoi", "Hoi", "Hoi"],
				["Hoi", "Hoi", "Hoi"],
			]);
	}
);
