/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table search and find feature test", () => {
	loadPage("Main Project/home?table-v2=true");

	findWidget("PepperData")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("50,000 Scoville");

	findWidget("PepperData")
		.getTableSearchButton()
		.search("50");

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/2");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachUp();

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("2/2");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachDown();

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/2");

	findWidget("PepperData")
		.getTableSearchButton()
		.clearSearch();

	findWidget("PepperData")
		.getTableSearchButton()
		.closeSearch();

	findWidget("PepperData")
		.getTableSearchButton()
		.search("100");

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/1");

	findWidget("PepperData")
		.getTableSearchButton()
		.clearSearch();

	findWidget("PepperData")
		.getTableSearchButton()
		.closeSearch();

	findWidget("PepperData")
		.getTableSearchButton()
		.search("10");

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/1");
});
