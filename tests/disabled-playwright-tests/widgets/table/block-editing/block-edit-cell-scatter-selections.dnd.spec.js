/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Block-edit values using various scatter selections.", () => {
	loadPage("Main Project/home?_aimms_only_highcharts=true");

	// Select a discontinuous block and do a block edit
	findWidget("DailyPassengers").setScatterSelection([
		[2, 1, 4, 3],
		[0, 1],
	]);

	findWidget("DailyPassengers")
		.pressKeys("9.00")
		.pressCtrl([SPECIAL_KEYS.enter]);

	findWidget("DailyPassengers")
		.getSelectionValues(0, 0, 4, 4)
		.should.be.shallowDeepEqual([
			["80.00", "9.00", "430.00", "", "350.00"],
			["30.00", "50.00", "40.00", "20.00", "12.00"],
			["98.00", "9.00", "9.00", "9.00", "25.00"],
			["", "9.00", "9.00", "9.00", "90.00"],
			["275.00", "", "9.00", "9.00", "150.00"],
		]);
});
