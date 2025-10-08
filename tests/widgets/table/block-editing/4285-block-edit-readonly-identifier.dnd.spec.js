/*!
 * @AIMMS_FILE=models/CopyPasteTestModel/CopyPasteTestModel.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select a range of block num cells. Edit the focused num cell and enter string value, Do ctrl+enter and do esc when error dialog pops.",
	() => {
		loadPage("Main Project/ReadWriteTable");

		// Block-selection on table
		findWidget("TableWriteOnly").setSelection(0, 0, 0, 4);

		findWidget("TableWriteOnly")
			.pressKeys("8.9")
			.pressCtrl([SPECIAL_KEYS.enter]);

		findWidget("TableReadOnly")
			.getSelectionValues(0, 0, 0, 4)
			.should.be.shallowDeepEqual([["8.9", "8.9", "8.9", "8.9", "8.9"]]);

		findWidget("TableWriteOnly")
			.getSelectionValues(0, 0, 0, 4)
			.should.be.shallowDeepEqual([["8.9", "8.9", "8.9", "8.9", "8.9"]]);
	}
);
