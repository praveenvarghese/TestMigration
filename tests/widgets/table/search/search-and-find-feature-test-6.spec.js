/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table search and find feature test", () => {
	loadPage("Main Project/home");

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Filter From Scratch");

	findWidget("filterFromScratch")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("50,000.00 Scoville");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.search("50");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/3");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachUp();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("3/3");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachDown();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/3");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.clearSearch();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.closeSearch();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.search("8,0");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/1");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.clearSearch();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.closeSearch();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.search("2,5");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/1");
});
