/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @DURATION=medium
 */

scenario(
	"On a compact scalar widget, with a scalar element-parameter, tests asserting setting a Date&Time and verifying the data.",
	() => {
		loadPage("Main Project/Aircraft Maintenance Calendar/Planes Maintenance Renewal DateTime");

		// Assert scalar "AircraftMaintenanceCutOffDay" element-parameter data on compact Scalar.
		findWidget("CS_EP_AircraftMaintenanceCutOffDay")
			.getValue()
			.should.contain("Monday, February 24, 2020 9:0");

		// Clear Date&Time by selecting "Clear" entry on calendar
		findWidget("CS_EP_AircraftMaintenanceCutOffDay").setValue("CLEAR");
		// Assert scalar "AircraftMaintenanceCutOffDay" element-parameter data on compact Scalar, has no date set.
		findWidget("CS_EP_AircraftMaintenanceCutOffDay")
			.getValue()
			.should.contain("");

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Navigate to another page and back to current page.
		// This is to assert the above set Date&Time are retained.
		getPageMenu().navigateToPage("Main Project/Timezone");
		getPageMenu().navigateToPage(
			"Main Project/Aircraft Maintenance Calendar/Planes Maintenance Renewal DateTime"
		);

		// Assert scalar "AircraftMaintenanceCutOffDay" element-parameter data on compact Scalar, has no date set.
		findWidget("CS_EP_AircraftMaintenanceCutOffDay")
			.getValue()
			.should.contain("");

		// Set a Date&Time
		findWidget("CS_EP_AircraftMaintenanceCutOffDay").setValue("2020-3-27");

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert scalar "AircraftMaintenanceCutOffDay" element-parameter data on compact Scalar
		findWidget("CS_EP_AircraftMaintenanceCutOffDay")
			.getValue()
			.should.contain("Friday, March 27, 2020 9:0");
	}
);
