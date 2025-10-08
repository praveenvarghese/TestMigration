/*!
 * @AIMMS_FILE=models/Miscellaneous/Miscellaneous.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Pasting over a cell that has been made read-only through a flags identifier should not be allowed",
	() => {
		loadPage("Main Project/ReadOnlyTestPage");

		findWidget("HoursTable").setSelection(0, 0, 1, 4);

		findWidget("HoursTable").pressCtrl(["c"]);

		findWidget("HoursTable").setSelection(2, 0, 2, 0);

		findWidget("HoursTable").pressCtrl(["v"]);

		findWidget("HoursTable")
			.getSelectionValues(2, 0, 4, 4)
			.should.be.shallowDeepEqual([
				["2.00", "3.00", "4.00", "5.00", "6.00"],
				["5.00", "6.00", "7.00", "8.00", "9.00"],
				["6.00", "7.00", "8.00", "9.00", "10.00"],
			]);
	}
);
