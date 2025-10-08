/*!
 * @AIMMS_FILE=models/TransNet_Tables/TransNet.aimms
 */

scenario("Table search and find feature test for 1000+ matches", () => {
	loadPage("Main Project/Search/Search_1");

	findWidget("SearchTable11")
		.getTableSearchButton()
		.search("1");

	findWidget("SearchTable11")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/1000");

	findWidget("SearchTable11")
		.getTableSearchButton()
		.clearSearch();

	findWidget("SearchTable11")
		.getTableSearchButton()
		.closeSearch();

	findWidget("SearchScalar11")
		.getValue()
		.should.be.equal("1,000");

	findWidget("SearchScalar11").setValue("1,001");

	findWidget("SearchTable11")
		.getTableSearchButton()
		.search("1");

	findWidget("SearchTable11")
		.getTableSearchButton()
		.getMatchingCount()
		.should.be.equal("1/1000+");
});
