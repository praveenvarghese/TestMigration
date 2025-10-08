/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Table search and find feature test", () => {
	loadPage("Main Project/home");

	findWidget("PepperData")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("50,000 Scoville");

	findWidget("PepperData")
		.getCell(1, 0)
		.click();

	findWidget("PepperData")
		.getTableSearchButton()
		.search("50");

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("2/2");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachUp();

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/2");

	findWidget("PepperData")
		.getTableSearchButton()
		.serachDown();

	findWidget("PepperData")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("2/2");
});
