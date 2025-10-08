/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @DURATION=medium
 */

scenario(
	"On a single-content scalar widget, with an Indexed-Element-Parameter data sliced over Fixed-Element type, tests asserting setting a Date&Time and verifying the data.",
	() => {
		loadPage("Main Project/Aircraft Maintenance Calendar/Qtrly Aircraft Maintenance Calendar");

		// Assert Fixed-Element-sliced element-parameter "ShippingDepartureDateTime" on single-content Scalar, has "Today" Date&Time set.
		findWidget("Sliced ShippingDepartureDateTime")
			.getValue()
			.should.contain(getTodaysDate() + " 9:10");

		// Clear Date&Time by selecting "Clear" entry on calendar
		findWidget("Sliced ShippingDepartureDateTime").setValue("CLEAR");

		// Assert Fixed-Element-sliced element-parameter "ShippingDepartureDateTime" on single-content Scalar, has no date set.
		findWidget("Sliced ShippingDepartureDateTime")
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
			"Main Project/Aircraft Maintenance Calendar/Qtrly Aircraft Maintenance Calendar"
		);

		// Assert Fixed-Element-sliced element-parameter "ShippingDepartureDateTime" on single-content Scalar, has no date set.
		findWidget("Sliced ShippingDepartureDateTime")
			.getValue()
			.should.contain("");

		// Set Yesterday's date
		findWidget("Sliced ShippingDepartureDateTime").setValue(getYesterdaysDate());

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert Fixed-Element-sliced element-parameter "ShippingDepartureDateTime" on single-content Scalar, has Yesterday's Date&Time.
		findWidget("Sliced ShippingDepartureDateTime")
			.getValue("ShippingDepartureDateTime")
			.should.contain(getYesterdaysDate() + " 9:10");
	}
);
