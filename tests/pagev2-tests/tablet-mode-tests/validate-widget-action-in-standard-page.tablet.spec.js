/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Test to verify widget action in classic page", () => {
	loadPage("Main Project/StandardLayout");

	//Validate widget action details displayed.
	findWidget("Flag_3")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Flag_3")
		.getAllWidgetActionListName()
		.should.beEqualTo([
			"Factory Details",
			"View existing orders",
			"Increase Supply",
			"Delete Orders",
			"Factory Details",
			"View existing orders",
			"Increase Supply",
			"Delete Orders",
			"Factory Details",
			"View existing orders",
		]);

	findWidget("Flag_3")
		.getValue()
		.should.be.equal(false);

	//Validate click functionality on widget action
	findWidget("Flag_3")
		.getWidgetActionDetails(9)
		.click();

	findWidget("large_dp")
		.getVisibleWidgetsInViewPort()
		.should.eql(["widget1_1", "widget2_1", "widget3"]);

	findWidget("large_dp").clickDialogPageButton("ok");

	findWidget("Flag_3")
		.getValue()
		.should.be.equal(true);
});
