/*!
 * @AIMMS_FILE=models/SplineAreaChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether item actions work fine on a spline area chart", () => {
	loadPage("Main Project/ItemActionTests");

	findWidget("IA1")
		.getItemActions()
		.isItemActionDisplayed().should.be.false;

	// Do some initial checks as to whether the item actions are there at all.
	findWidget("IA1")
		.getNthPointForMultipleContents({ content: 10, point: 4 })
		.rightClick(0, 0);

	findWidget("IA1")
		.getItemActions()
		.isItemActionDisplayed().should.be.true;

	findWidget("IA1")
		.getItemActions()
		.getAllItemActionListName()
		.should.eql(["Show Full Country Name", "Show Reversed"]);

	// Click on the first item action and verify the result
	findWidget("IA1")
		.getItemActions()
		.getItemActionDetails(0)
		.click();

	findWidget("CountryText")
		.getValue()
		.should.eql("AUT is a beautiful country.");

	// Click on the second item action and verify the result
	findWidget("IA1")
		.getNthPointForMultipleContents({ content: 11, point: 3 })
		.rightClick(0, 0);

	findWidget("IA1")
		.getItemActions()
		.getItemActionDetails(1)
		.click();

	findWidget("CountryText")
		.getValue()
		.should.eql(".yrtnuoc lufituaeb a si IWS");
});
