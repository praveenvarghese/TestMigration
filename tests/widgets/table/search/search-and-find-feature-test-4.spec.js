/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table search and find feature test 4", () => {
	loadPage("Main Project/home");

	findWidget("test")
		.getCell(3, 0)
		.click();

	findWidget("test")
		.getTableSearchButton()
		.search("50");

	findWidget("test")
		.getSearchedCellsData()
		.should.eql(["50,000.00 Scoville", "50,000.00 Scoville", "2,500.00 Scoville"]);

	findWidget("test")
		.getCurrentFocussedCellValue()
		.should.be.equal("2,500.00 Scoville");

	findWidget("test")
		.getSearchedCellsDataCount()
		.should.be.equal(3);

	findWidget("test")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("3/3");

	findWidget("test")
		.getTableSearchButton()
		.serachUp();

	findWidget("test")
		.getCurrentFocussedCellValue()
		.should.be.equal("50,000.00 Scoville");

	findWidget("test")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("2/3");

	findWidget("test")
		.getTableSearchButton()
		.clearSearch();

	findWidget("test")
		.getTableSearchButton()
		.closeSearch();

	findWidget("test")
		.getTableSearchButton()
		.search(",0");

	findWidget("test")
		.getSearchedCellsData()
		.should.eql([
			"50,000.00 Scoville",
			"5,000.00 Scoville",
			"50,000.00 Scoville",
			"8,000.00 Scoville",
		]);

	findWidget("test")
		.getCurrentFocussedCellValue()
		.should.be.equal("50,000.00 Scoville");

	findWidget("test")
		.getSearchedCellsDataCount()
		.should.be.equal(4);

	findWidget("test")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("3/4");

	findWidget("test")
		.getTableSearchButton()
		.serachDown();

	findWidget("test")
		.getCurrentFocussedCellValue()
		.should.be.equal("8,000.00 Scoville");

	findWidget("test")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("4/4");
});
