/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Block-edit some values to their original value. These cells should be selected afterwards.",
	() => {
		loadPage("Main Project/home?_aimms_only_highcharts=true");

		// Select a discontinuous block and do a block edit
		findWidget("DailyPassengers").setScatterSelection([
			[0, 0],
			[2, 1],
			[4, 3],
		]);

		findWidget("DailyPassengers")
			.pressKeys("9.00")
			.pressCtrl([SPECIAL_KEYS.enter]);

		findWidget("DailyPassengers")
			.getSelectionValues(0, 0, 4, 4)
			.should.be.shallowDeepEqual([
				["9.00", "240.00", "430.00", "", "350.00"],
				["30.00", "50.00", "40.00", "20.00", "12.00"],
				["98.00", "9.00", "140.00", "80.00", "25.00"],
				["", "300.00", "260.00", "130.00", "90.00"],
				["275.00", "", "740.00", "9.00", "150.00"],
			]);

		// Change these 3 cells into their own value. They should be selected after this action.
		findWidget("DailyPassengers").setScatterSelection([
			[0, 0],
			[2, 1],
			[4, 3],
		]);

		findWidget("DailyPassengers")
			.pressKeys("9.00")
			.pressCtrl([SPECIAL_KEYS.enter]);

		findWidget("DailyPassengers")
			.getCell(0, 0)
			.isSelected()
			.should.be.equal(true);

		findWidget("DailyPassengers")
			.getCell(2, 1)
			.isSelected()
			.should.be.equal(true);

		findWidget("DailyPassengers")
			.getCell(4, 3)
			.isSelected()
			.should.be.equal(true);

		// Also check a cell that was not part of the selection.
		findWidget("DailyPassengers")
			.getCell(0, 1)
			.isSelected()
			.should.be.equal(false);
	}
);
