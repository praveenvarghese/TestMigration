/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select a block of cells in a Table widget and type a value to populate the whole block.",
	() => {
		loadPage("Main Project/home?_aimms_only_highcharts=true");

		// Try to block-edit a read-only row (which is read-only because it contains aggregators). This should of course not change any value.
		findWidget("DailyPassengers").setSelection(7, 0, 7, 5);

		findWidget("DailyPassengers")
			.pressKeys("93.15")
			.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

		findWidget("DailyPassengers")
			.getSelectionValues(7, 0, 7, 5)
			.should.be.shallowDeepEqual([
				["713.00", "1,740.00", "1,990.00", "980.00", "817.00", "680.00"],
			]);

		// An edit within a block of cells, finished with ENTER should only change the specific cell, not the whole block
		findWidget("DailyPassengers").setSelection(0, 0, 2, 2);

		findWidget("DailyPassengers").pressKeys(["12.23", SPECIAL_KEYS.enter]);

		findWidget("DailyPassengers")
			.getSelectionValues(0, 0, 2, 2)
			.should.be.shallowDeepEqual([
				["12.23", "240.00", "430.00"],
				["30.00", "50.00", "40.00"],
				["98.00", "160.00", "140.00"],
			]);

		// Doing the same edit, but now finished with CTRL+ENTER, should change the whole block
		findWidget("DailyPassengers").setSelection(0, 0, 2, 2);

		findWidget("DailyPassengers")
			.pressKeys("19.75")
			.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

		findWidget("DailyPassengers")
			.getSelectionValues(0, 0, 2, 2)
			.should.be.shallowDeepEqual([
				["19.75", "19.75", "19.75"],
				["19.75", "19.75", "19.75"],
				["19.75", "19.75", "19.75"],
			]);

		// Block-edit a single (horizontal) row
		findWidget("DailyPassengers").setSelection(1, 0, 1, 6);

		findWidget("DailyPassengers")
			.pressKeys("23.18")
			.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

		findWidget("DailyPassengers")
			.getSelectionValues(1, 0, 1, 6)
			.should.be.shallowDeepEqual([
				["23.18", "23.18", "23.18", "23.18", "23.18", "23.18", ""],
			]);

		// Block-edit a single (vertical) column
		findWidget("DailyPassengers").setSelection(0, 2, 6, 2);

		findWidget("DailyPassengers")
			.pressKeys("14.93")
			.pressCtrl([SPECIAL_KEYS.enter]); // Ctrl + Enter

		// Also check column 3 after just having block-edited only column 2, because there was a bug in which
		// also column 3 was selected (because of horizontal scrollbar problems).
		findWidget("DailyPassengers")
			.getSelectionValues(0, 2, 6, 3)
			.should.be.shallowDeepEqual([
				["14.93", ""],
				["14.93", "23.18"],
				["14.93", "80.00"],
				["14.93", "130.00"],
				["14.93", "200.00"],
				["", "240.00"],
				["14.93", "310.00"],
			]);
	}
);
