/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 * @TEST_TYPE=functional
 */

scenario(
	"Verify count/total count tooltip values when filtering is applied on a table with the same index used in the rows and columns",
	() => {
		loadPage("Main Project/home");

		findWidget("DailyPassengers")
			.getCell(8, 0)
			.click();

		findWidget("DailyPassengers")
			.getTooltip()
			.should.equal("4.00");

		findWidget("DailyPassengers")
			.getCell(9, 0)
			.click();

		findWidget("DailyPassengers")
			.getTooltip()
			.should.equal("7.00");
	}
);
