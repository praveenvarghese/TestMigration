/*!
 * @AIMMS_FILE=models/vessel-scheduling2/vessel-scheduling.aimms
 */

scenario("Try out a 'non-standard' month format.", () => {
	loadPage("Main Project/Master Sets");

	// Assert Fixed-Element-sliced element-parameter "ShippingDepartureDateTime" on single-content Scalar, has "Today" Date&Time set.
	// findWidget("Date")
	// 	.getValue()
	// 	.should.contain(getTodaysDate() + " 9:10");

	// Clear Date&Time by selecting "Clear" entry on calendar
	findWidget("Date").setValue("2028-5");

	// Assert Fixed-Element-sliced element-parameter "ShippingDepartureDateTime" on single-content Scalar, has no date set.
	findWidget("Date")
		.getValue()
		.should.eql("May 28");

	//Assert no error/warning messages were reported in the above interactions.
	getLogMessage()
		.getCount()
		.should.be.equal(0);
});
