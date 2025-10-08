/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table search and find feature test", () => {
	loadPage("Main Project/home");

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Filter From Scratch");

	findWidget("filterFromScratch")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("5,000.00 Scoville");

	findWidget("filterFromScratch")
		.getCell(1, 0)
		.click();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.search("50");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("2/3");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachUp();

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
});
