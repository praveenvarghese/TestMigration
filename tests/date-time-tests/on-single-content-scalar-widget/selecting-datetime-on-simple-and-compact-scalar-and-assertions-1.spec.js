/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
 */

scenario("Test asserting setting a datetime and verifying the data in scalar.", () => {
	loadPage("Main Project/Fourth Page");

	// Set Yesterday's date in "normal-scalar" single content Scalar widget
	findWidget("normal-scalar").setValue(getYesterdaysDate());

	// Assert "normal-scalar" single content Scalar widget has Yesterday's date.
	findWidget("normal-scalar")
		.getValue()
		.should.contain(getYesterdaysDate() + " 9:10");

	// Set Tomorrow's date in "DateTime for Single Content Scalar" single content Scalar widget
	findWidget("DateTime for Single Content Scalar").setValue(getTomorrowsDate());

	// Assert "DateTime for Single Content Scalar" single content Scalar widget has Tomorrow's date.
	findWidget("DateTime for Single Content Scalar")
		.getValue()
		.should.contain(getTomorrowsDate() + " 9:10");

	// Clear date in "Another DateTime for Single Content Scalar" single content Scalar widget
	findWidget("Another DateTime for Single Content Scalar").setValue("CLEAR");

	// Assert "Another DateTime for Single Content Scalar" single content Scalar widget has no date set.
	findWidget("Another DateTime for Single Content Scalar")
		.getValue()
		.should.be.equal("");

	// Navigate to another page and back to current page.
	// This is to assert the above set datetimes are retained.
	getPageMenu().navigateToPage("Main Project/Timezone");
	getPageMenu().navigateToPage("Main Project/Fourth Page");

	// Assert "normal-scalar" single content Scalar widget has Yesterday's date.
	findWidget("normal-scalar")
		.getValue()
		.should.contain(getYesterdaysDate() + " 9:10");

	// Assert "DateTime for Single Content Scalar" single content Scalar widget has Tomorrow's date.
	findWidget("DateTime for Single Content Scalar")
		.getValue()
		.should.contain(getTomorrowsDate() + " 9:10");

	// Assert "Another DateTime for Single Content Scalar" single content Scalar widget has no date set.
	findWidget("Another DateTime for Single Content Scalar")
		.getValue()
		.should.be.equal("");
});
