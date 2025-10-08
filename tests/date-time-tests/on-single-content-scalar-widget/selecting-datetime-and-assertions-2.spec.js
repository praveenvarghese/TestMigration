/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @DURATION=medium
 */

scenario(
	"On a single-content scalar widget, with an Indexed-Element-Parameter data sliced over Element-Parameter type, tests asserting setting a Date&Time and verifying the data.",
	() => {
		loadPage("Main Project/Shipping Schedules");

		// Assert Element-Parameter-sliced-type "PlanesMaintenanceSchedule" element-parameter data on single-content Scalar.
		findWidget("Sliced PlanesMaintenanceSchedule")
			.getValue()
			.should.contain("Wednesday, March 25, 2020 9:0");

		// Clear Date&Time by selecting "Clear" entry on calendar
		findWidget("Sliced PlanesMaintenanceSchedule").setValue("CLEAR");

		// Assert Element-Parameter-sliced-type "PlanesMaintenanceSchedule" element-parameter data on single-content Scalar, has no date set.
		findWidget("Sliced PlanesMaintenanceSchedule")
			.getValue()
			.should.contain("");

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Navigate to another page and back to current page.
		// This is to assert the above set Date&Time are retained.
		getPageMenu().navigateToPage("Main Project/Timezone");
		getPageMenu().navigateToPage("Main Project/Shipping Schedules");

		// Assert Element-Parameter-sliced-type "PlanesMaintenanceSchedule" element-parameter data on single-content Scalar, has no date set.
		findWidget("Sliced PlanesMaintenanceSchedule")
			.getValue()
			.should.contain("");

		// Set a Date&Time
		findWidget("Sliced PlanesMaintenanceSchedule").setValue("2020-3-27");

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert Element-Parameter-sliced-type "PlanesMaintenanceSchedule" element-parameter data on single-content Scalar
		findWidget("Sliced PlanesMaintenanceSchedule")
			.getValue()
			.should.contain("Friday, March 27, 2020 9:0");
	}
);
