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
		.search("sco");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/5");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachUp();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("5/5");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachUp();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("4/5");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.caseSensitiveSearch("sco");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("0/0");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachUp();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("0/0");

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.serachDown();

	findWidget("filterFromScratch")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("0/0");
});
