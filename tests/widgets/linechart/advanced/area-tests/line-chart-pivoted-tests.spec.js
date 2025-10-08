/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Check line chart pivot when area is enabled", () => {
	loadPage("Main Project/Charts/lineChartArea");

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("");

	findWidget("firstLine").isAreaApplied().should.be.true;

	findWidget("firstLine")
		.dragIndex("<IDENTIFIER-SET>")
		.dropIn("totals");

	findWidget("firstLine").isAreaApplied().should.be.true;

	findWidget("firstLine")
		.findPoint("i-4")
		.click();

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("i-4");

	findWidget("firstLine")
		.findPoint("i-20")
		.click();

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("i-20");
});
