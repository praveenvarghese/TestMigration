/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"When changing between 'Fokker F-50' and 'Boeing 737' in the 'Plane Type Displayed' scalar widget the 'Plane Assignment Map' widget should update accordingly",
	() => {
		// Set-up

		loadPage("Main Project/home");

		findWidget("Optimize Schedule").click();

		// Pre-condition check

		findWidget("Results")
			.getValue("TotalCost")
			.should.equal("522,060.00");

		findWidget("Results")
			.getValue("TotalRevenue")
			.should.equal("606,464.00");

		findWidget("DailyPassengers")
			.getCell(1, 1)
			.getValue()
			.should.be.equal("300");

		findWidget("DailyPassengers")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("84");

		// Actions (edit-value, solve)

		findWidget("DailyPassengers")
			.getCell(1, 1)
			.setValue("301");

		findWidget("DailyPassengers")
			.getCell(0, 1)
			.setValue("85");

		findWidget("Optimize Schedule").click();

		// Assertions

		findWidget("Results")
			.getValue("TotalCost")
			.should.equal("523,800.00");

		findWidget("Results")
			.getValue("TotalRevenue")
			.should.equal("606,849.00");
	}
);
