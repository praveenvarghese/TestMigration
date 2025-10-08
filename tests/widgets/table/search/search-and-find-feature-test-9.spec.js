/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table search and find feature filterFromScratch", () => {
	loadPage("Main Project/home");

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Filter From Scratch");

	findWidget("filterFromScratch")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("50,000.00 Scoville");

	findWidget("filterFromScratch")
		.getCell(3, 0)
		.click();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.search("50");

	findWidget("filterFromScratch")
		.getSearchedCellsData()
		.should.eql(["50,000.00 Scoville", "50,000.00 Scoville", "2,500.00 Scoville"]);

	findWidget("filterFromScratch")
		.getCurrentFocussedCellValue()
		.should.be.equal("2,500.00 Scoville");

	findWidget("filterFromScratch")
		.getSearchedCellsDataCount()
		.should.be.equal(3);

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("3/3");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachUp();

	findWidget("filterFromScratch")
		.getCurrentFocussedCellValue()
		.should.be.equal("50,000.00 Scoville");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("2/3");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.clearSearch();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.closeSearch();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.search(",0");

	findWidget("filterFromScratch")
		.getSearchedCellsData()
		.should.eql([
			"50,000.00 Scoville",
			"5,000.00 Scoville",
			"50,000.00 Scoville",
			"8,000.00 Scoville",
		]);

	findWidget("filterFromScratch")
		.getCurrentFocussedCellValue()
		.should.be.equal("50,000.00 Scoville");

	findWidget("filterFromScratch")
		.getSearchedCellsDataCount()
		.should.be.equal(4);

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("3/4");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachDown();

	findWidget("filterFromScratch")
		.getCurrentFocussedCellValue()
		.should.be.equal("8,000.00 Scoville");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("4/4");
});
