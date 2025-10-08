/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario("Test asserting setting a datetime and verifying the data in scalar.", () => {
	loadPage("Main Project/Fourth Page");

	// Set Today's date in "DateTime For Compact Scalar Widget" compact Scalar widget
	findWidget("DateTime For Compact Scalar Widget").setValue(getTodaysDate());

	// Assert "DateTime For Compact Scalar Widget" compact Scalar widget has Today's date.
	findWidget("DateTime For Compact Scalar Widget")
		.getValue()
		.should.contain(getTodaysDate() + " 9:10");

	// Set Tomorrow's date in "Another DateTime For Compact Scalar Widget" compact Scalar widget
	findWidget("Another DateTime For Compact Scalar Widget").setValue(getTomorrowsDate());

	// Assert "Another DateTime For Compact Scalar Widget" compact Scalar widget has Tomorrow's date.
	findWidget("Another DateTime For Compact Scalar Widget")
		.getValue()
		.should.contain(getTomorrowsDate() + " 9:10");

	// Navigate to another page and back to current page.
	// This is to assert the above set datetimes are retained.
	getPageMenu().navigateToPage("Main Project/Timezone");
	getPageMenu().navigateToPage("Main Project/Fourth Page");

	// Assert "DateTime For Compact Scalar Widget" compact Scalar widget has Today's date.
	findWidget("DateTime For Compact Scalar Widget")
		.getValue()
		.should.contain(getTodaysDate() + " 9:10");

	// Assert "Another DateTime For Compact Scalar Widget" compact Scalar widget has Tomorrow's date.
	findWidget("Another DateTime For Compact Scalar Widget")
		.getValue()
		.should.contain(getTomorrowsDate() + " 9:10");
});
