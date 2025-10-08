/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table search and find feature test", () => {
	loadPage("Main Project/home");

	findWidget("PepperData")
		.getCell(0, 0)
		.click();

	findWidget("PepperData")
		.getTableSearchButton()
		.search("50");

	findWidget("PepperData")
		.getSearchedCellsData()
		.should.eql(["50,000 Scoville", "50,000 Scoville"]);

	findWidget("PepperData")
		.getCurrentFocussedCellValue()
		.should.be.equal("50,000 Scoville");

	findWidget("PepperData")
		.getSearchedCellsDataCount()
		.should.be.equal(2);
});
