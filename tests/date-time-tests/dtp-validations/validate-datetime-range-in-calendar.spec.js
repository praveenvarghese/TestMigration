/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Test validating the allowed date&time range in Calendar and default behaviour when cell has a value",
	() => {
		loadPage("Main Project/Calendar Tests/DTP Error Handling Tests1");

		//Load calendar with static date
		findWidget("Loads Calendar with Static One Day Data").click();

		// Validate for particular date calendar date is disabled
		findWidget("DTPEH DateTime")
			.getCell(3, 0)
			.isCalendarDateInRange("4").should.be.true;

		findWidget("DTPEH DateTime")
			.getCell(3, 0)
			.isCalendarDateInRange("6").should.be.true;

		//Validate calendar opens with date already present in the cell

		findWidget("Loads Calendar with static data").click();
		findWidget("DTPEH DateTime")
			.getCell(3, 0)
			.isCalendarDateSelected("5").should.be.true;
	}
);
