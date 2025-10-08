/*!
 * @AIMMS_FILE=models/Songs/Songs.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Table edited checkbox reverting values uponchange", () => {
	loadPage("Main Project/Page2");

	// Check the initial value 1st entry, should be true (ie, 1 or checked)
	findWidget("SelectIndTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal(true);

	// Check the initial value 5th entry, should be false (ie, 0 or unchecked)
	findWidget("SelectIndTable")
		.getCell(4, 0)
		.getValue()
		.should.be.equal(false);

	// Toggle checkbox value 5th entry
	findWidget("SelectIndTable")
		.getCell(4, 0)
		.setValue(true);

	// Check the value 5th entry, should be true (ie, 1 or checked)
	findWidget("SelectIndTable")
		.getCell(4, 0)
		.getValue()
		.should.be.equal(true);

	// Check focus state 6th entry, should be focused
	// This should be false because of 3fa3a9eb45 customer-tickets#472
	findWidget("SelectIndTable")
		.getCell(5, 0)
		.isFocused()
		.should.be.equal(false);

	// Check the value 3rd entry, should be true (ie, 1 or checked) due to uponchange_procedure
	findWidget("SelectIndTable")
		.getCell(2, 0)
		.getValue()
		.should.be.equal(true);

	// Toggle checkbox value 3rd entry
	findWidget("SelectIndTable")
		.getCell(2, 0)
		.setValue(false);

	// Check the value 3rd entry, should be true (ie, 1 or checked) due to uponchange_procedure
	findWidget("SelectIndTable")
		.getCell(2, 0)
		.getValue()
		.should.be.equal(true);
});
