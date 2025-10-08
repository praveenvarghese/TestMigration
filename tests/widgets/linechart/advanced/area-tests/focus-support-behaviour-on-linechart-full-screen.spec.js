/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario(
	"Check for focus support behaviour on Line chart, while juggling between normal and full screen when area is enabled",
	() => {
		loadPage("Main Project/Charts/lineChartArea");

		findWidget("test")
			.getValue("selectedIdentifier")
			.should.be.equal("");

		findWidget("test")
			.getValue("selectedAllInfo")
			.should.be.equal("");

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

		// findWidget("firstLine").goInFullScreenMode();

		// findWidget("firstLine").isFullScreen().should.be.true;

		// findWidget("firstLine").isFullScreen().should.be.true;

		// findWidget("firstLine")
		// 	.findPoint("i-4,AllInfo")
		// 	.click();

		// findWidget("firstLine").exitFullScreenMode();

		// findWidget("firstLine").isFullScreen().should.be.false;

		// findWidget("test")
		// 	.getValue("selectedIdentifier")
		// 	.should.be.equal("AllInfo");

		// findWidget("test")
		// 	.getValue("selectedAllInfo")
		// 	.should.be.equal("i-4");
	}
);
