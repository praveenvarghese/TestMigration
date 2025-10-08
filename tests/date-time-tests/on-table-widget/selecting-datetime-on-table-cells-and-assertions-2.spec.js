/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @DURATION=medium
 */

scenario(
	"On a table widget, with scalar-Element-Parameter and Indexed-Element-Parameter data sliced over Element-Parameter type, tests asserting setting a Date&Time and verifying the data.",
	() => {
		loadPage("Main Project/Aircraft Maintenance Calendar/Quick View");

		// Assert scalar-Element-Parameter "AircraftMaintenanceCutOffDay" on Table widget, has Date&Time data.
		findWidget("Plane Info")
			.getCell(2, 0)
			.getValue()
			.should.contain("Monday, February 24, 2020 9:0");

		// Set a Date&Time to scalar-Element-Parameter "AircraftMaintenanceCutOffDay".
		findWidget("Plane Info")
			.getCell(2, 0)
			.setValue("2020-6-5");

		// Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert value displayed of scalar-Element-Parameter "AircraftMaintenanceCutOffDay" on Table widget.
		findWidget("Plane Info")
			.getCell(2, 0)
			.getValue()
			.should.contain("Friday, June 5, 2020 9:0");

		// Assert Element-Parameter-sliced element-Parameter "PlanesMaintenanceSchedule" on Table widget, has Date&Time data.
		findWidget("Plane Info")
			.getCell(3, 0)
			.getValue()
			.should.contain("Wednesday, March 25, 2020 9:0");

		// // Set a Date&Time to Element-Parameter-sliced element-Parameter "PlanesMaintenanceSchedule".
		// findWidget("Plane Info")
		// 	.getCell(3, 0)
		// 	.setValue("2020-12-31");

		// Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert value displayed of Element-Parameter-sliced element-Parameter "PlanesMaintenanceSchedule" on Table widget.
		// findWidget("Plane Info")
		// 	.getCell(3, 0)
		// 	.getValue()
		// 	.should.contain("Thursday, December 31, 2020 9:0");

		// Navigate to another page and back to current page
		// This is to assert the above set datetimes are retained.
		getPageMenu().navigateToPage("Main Project/Timezone");
		getPageMenu().navigateToPage("Main Project/Aircraft Maintenance Calendar/Quick View");

		// Assert the earlier made date changes are retained

		findWidget("Plane Info")
			.getCell(2, 0)
			.getValue()
			.should.contain("Friday, June 5, 2020 9:0");

		// findWidget("Plane Info")
		// 	.getCell(3, 0)
		// 	.getValue()
		// 	.should.contain("Thursday, December 31, 2020 9:0");

		// Clear Date&Time data of scalar-Element-Parameter "AircraftMaintenanceCutOffDay" on Table widget.
		findWidget("Plane Info")
			.getCell(2, 0)
			.setValue("CLEAR");

		// Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert value displayed of scalar-Element-Parameter "AircraftMaintenanceCutOffDay" on Table widget.
		findWidget("Plane Info")
			.getCell(2, 0)
			.getValue()
			.should.contain("");

		// Clear Date&Time data of Element-Parameter-sliced element-Parameter "PlanesMaintenanceSchedule" on Table widget.
		// findWidget("Plane Info")
		// 	.getCell(3, 0)
		// 	.setValue("CLEAR");

		// Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert value displayed of Element-Parameter-sliced element-Parameter "PlanesMaintenanceSchedule" on Table widget.
		// findWidget("Plane Info")
		// 	.getCell(3, 0)
		// 	.getValue()
		// 	.should.contain("");

		// Navigate to another page and back to current page
		// This is to assert the above set datetimes are retained.
		getPageMenu().navigateToPage("Main Project/Timezone");
		getPageMenu().navigateToPage("Main Project/Aircraft Maintenance Calendar/Quick View");

		// Assert scalar-Element-Parameter "AircraftMaintenanceCutOffDay" on Table widget, has no Date&Time set.
		findWidget("Plane Info")
			.getCell(0, 0)
			.getValue()
			.should.contain("");

		// Assert value displayed of Element-Parameter-sliced element-Parameter "PlanesMaintenanceSchedule" on Table widget, has no Date&Time set.
		// findWidget("Plane Info")
		// 	.getCell(3, 0)
		// 	.getValue()
		// 	.should.contain("");
	}
);
