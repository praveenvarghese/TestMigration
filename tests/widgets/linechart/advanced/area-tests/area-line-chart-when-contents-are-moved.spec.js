/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Validate tests for store focus when contents are moved and area is enabled", () => {
	loadPage("Main Project/Charts/lineChartArea");

	findWidget("firstLine").isAreaApplied().should.be.true;

	findWidget("firstLine")
		.getContentsOptionEditor()
		.MoveUpTheIdentifier("SomeInfo");

	findWidget("firstLine").isAreaApplied().should.be.true;

	findWidget("firstLine")
		.findPoint("i-4,AllInfo")
		.click();

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("AllInfo");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("i-4");

	findWidget("firstLine")
		.findPoint("i-5,SomeInfo")
		.click();

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("SomeInfo");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("i-5");

	findWidget("firstLine")
		.findPoint("i-22,OtherInfo")
		.click();

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("OtherInfo");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("i-22");

	findWidget("firstLine")
		.getContentsOptionEditor()
		.MoveDownTheIdentifier("AllInfo");

	findWidget("firstLine")
		.getContentsOptionEditor()
		.MoveUpTheIdentifier("OtherInfo");

	findWidget("firstLine").isAreaApplied().should.be.true;

	findWidget("firstLine")
		.findPoint("i-4,AllInfo")
		.click();

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("AllInfo");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("i-4");

	findWidget("firstLine")
		.findPoint("i-5,SomeInfo")
		.click();

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("SomeInfo");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("i-5");

	findWidget("firstLine")
		.findPoint("i-22,OtherInfo")
		.click();

	findWidget("test")
		.getValue("selectedIdentifier")
		.should.be.equal("OtherInfo");

	findWidget("test")
		.getValue("selectedAllInfo")
		.should.be.equal("i-22");
});
