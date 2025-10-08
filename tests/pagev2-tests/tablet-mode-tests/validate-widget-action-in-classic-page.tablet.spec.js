/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Test to verify widget action in classic page", () => {
	loadPage("Main Project/dialog button test");

	//Validate widget action details displayed.
	findWidget("flag_2")
		.getWidgetActionMenuButton()
		.click();

	findWidget("flag_2")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
			{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
			{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
		]);

	findWidget("flag_2")
		.getValue()
		.should.be.equal(false);

	//Validate click functionality on widget action
	findWidget("flag_2")
		.getWidgetActionDetails(9)
		.click();

	findWidget("large_dp")
		.getVisibleWidgetsInViewPort()
		.should.eql(["widget1_1", "widget2_1", "widget3"]);

	findWidget("large_dp").clickDialogPageButton("ok");

	findWidget("flag_2")
		.getValue()
		.should.be.equal(true);
});
