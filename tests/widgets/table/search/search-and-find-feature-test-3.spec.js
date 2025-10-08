/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table search and find feature test", () => {
	loadPage("Main Project/home");

	findWidget("PepperData")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("50,000 Scoville");

	findWidget("PepperData")
		.getTableSearchButton()
		.search("sco");

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/3");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachUp();

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("3/3");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachDown();

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/3");

	findWidget("PepperData")
		.getTableSearchButton()
		.caseSensitiveSearch("sco");

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("0/0");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachUp();

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("0/0");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachDown();

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("0/0");
});
