/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate different types of dialog page functionality in Standard page layout", () => {
	loadPage("Main Project/StandardLayout");

	findWidget("Flag_3")
		.getValue()
		.should.be.equal(false);

	findWidget("SmallDialog_1").click();

	findWidget("small_dp")
		.getVisibleWidgetsInViewPort()
		.should.eql(["widget1"]);

	findWidget("small_dp").clickDialogPageButton("ok");

	findWidget("MediumDialog_1").click();

	findWidget("medium_dp")
		.getVisibleWidgetsInViewPort()
		.should.eql(["table_Test"]);

	findWidget("medium_dp").clickDialogPageButton("ok");

	findWidget("LargeDialog_1").click();

	findWidget("large_dp")
		.getVisibleWidgetsInViewPort()
		.should.eql(["widget1_1", "widget2_1", "widget3"]);

	findWidget("widget3")
		.getValue()
		.should.be.equal(true);

	findWidget("widget2_1").click();

	findWidget("widget3")
		.getValue()
		.should.be.equal(false);

	findWidget("large_dp").clickDialogPageButton("ok");

	findWidget("Flag_3")
		.getValue()
		.should.be.equal(true);
});
