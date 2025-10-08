/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Validate different types of dialog page functionality in classic page layout", () => {
	loadPage("Main Project/dialog button test");

	findWidget("flag_2")
		.getValue()
		.should.be.equal(false);

	findWidget("SmallDialog").click();

	findWidget("small_dp")
		.getVisibleWidgetsInViewPort()
		.should.eql(["widget1"]);

	findWidget("small_dp").clickDialogPageButton("ok");

	findWidget("MediumDialog").click();

	findWidget("medium_dp")
		.getVisibleWidgetsInViewPort()
		.should.eql(["table_Test"]);

	findWidget("medium_dp").clickDialogPageButton("ok");

	findWidget("LargeDialog").click();

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

	findWidget("flag_2")
		.getValue()
		.should.be.equal(true);
});
