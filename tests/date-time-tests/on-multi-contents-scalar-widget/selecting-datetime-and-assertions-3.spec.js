/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a multi-content scalar widget, with an Indexed-Element-Parameter data sliced over Fixed-Element type, tests asserting setting a Date&Time and verifying the data.",
	() => {
		loadPage("Main Project/Fourth Page");

		// Assert Fixed-Element-sliced element-parameter "ShippingDepartureDateTime" on multi-contents Scalar, has "Today" Date&Time set.
		findWidget("multi-scalar")
			.getValue("ShippingDepartureDateTime")
			.should.contain(getTodaysDate() + " 9:10");

		// Clear Date&Time on "ShippingDepartureDateTime" cell on multi-contents Scalar, by selecting "Clear" entry on calendar
		findWidget("multi-scalar").setValue("ShippingDepartureDateTime", "CLEAR");

		// Assert "ShippingDepartureDateTime" cell on multi-contents Scalar has no date set.
		findWidget("multi-scalar")
			.getValue("ShippingDepartureDateTime")
			.should.contain("");

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Navigate to another page and back to current page.
		// This is to assert the above set Date&Time are retained.
		getPageMenu().navigateToPage("Main Project/Timezone");
		getPageMenu().navigateToPage("Main Project/Fourth Page");

		// Assert "ShippingDepartureDateTime" cell on multi-contents Scalar has no date set.
		findWidget("multi-scalar")
			.getValue("ShippingDepartureDateTime")
			.should.contain("");

		// For "ShippingDepartureDateTime" cell on multi-contents Scalar, set Yesterday's date
		findWidget("multi-scalar").setValue("ShippingDepartureDateTime", getYesterdaysDate());

		//Assert no error/warning messages were reported in the above interactions.
		getLogMessage()
			.getCount()
			.should.be.equal(0);

		// Assert sliced element-parameter "ShippingDepartureDateTime" on multi-contents Scalar, has Yesterday's Date&Time.
		findWidget("multi-scalar")
			.getValue("ShippingDepartureDateTime")
			.should.contain(getYesterdaysDate() + " 9:10");
	}
);
