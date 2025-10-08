/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a multi-content scalar widget, with an Indexed-Element-Parameter data sliced over Element-Parameter type, tests asserting setting a Date&Time and verifying the data.",
	() => {
		loadPage("Main Project/Fourth Page");

		// Assert Element-Parameter-sliced-type "PlanesMaintenanceSchedule" element-parameter data on multi-contents Scalar.
		findWidget("multi-scalar")
			.getValue("PlanesMaintenanceSchedule")
			.should.contain("Wednesday, March 25, 2020 9:0");

		// Clear Date&Time on "PlanesMaintenanceSchedule" cell on multi-contents Scalar, by selecting "Clear" entry on calendar
		findWidget("multi-scalar").setValue("PlanesMaintenanceSchedule", "CLEAR");

		// Assert "PlanesMaintenanceSchedule" cell on multi-contents Scalar has no date set.
		findWidget("multi-scalar")
			.getValue("PlanesMaintenanceSchedule")
			.should.contain("");

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Navigate to another page and back to current page.
		// This is to assert the above set Date&Time are retained.
		getPageMenu().navigateToPage("Main Project/Timezone");
		getPageMenu().navigateToPage("Main Project/Fourth Page");

		// Assert "PlanesMaintenanceSchedule" cell on multi-contents Scalar has no date set.
		findWidget("multi-scalar")
			.getValue("PlanesMaintenanceSchedule")
			.should.contain("");

		// For "PlanesMaintenanceSchedule" cell on multi-contents Scalar, set a Date&Time
		findWidget("multi-scalar").setValue("PlanesMaintenanceSchedule", "2020-3-27");

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert Date&Time set on sliced element-parameter "PlanesMaintenanceSchedule" on multi-contents Scalar.
		findWidget("multi-scalar")
			.getValue("PlanesMaintenanceSchedule")
			.should.contain("Friday, March 27, 2020 9:0");
	}
);
