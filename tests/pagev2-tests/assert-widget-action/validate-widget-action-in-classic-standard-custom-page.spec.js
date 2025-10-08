/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DURATION=medium
 */

scenario("Test to verify widget action in classic,custom and standard page", () => {
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

	getPageMenu().navigateToPage("Main Project/CustomLayout");

	//Validate widget action details displayed.
	findWidget("Flag_4").setValue(false);

	findWidget("Flag_4")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Flag_4")
		.getWidgetActionDetails(9)
		.scroll();

	findWidget("Flag_4")
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

	findWidget("Flag_4")
		.getValue()
		.should.be.equal(false);

	//Validate click functionality on widget action
	findWidget("Flag_4")
		.getWidgetActionDetails(9)
		.click();

	findWidget("large_dp")
		.getVisibleWidgetsInViewPort()
		.should.eql(["widget1_1", "widget2_1", "widget3"]);

	findWidget("large_dp").clickDialogPageButton("ok");

	findWidget("Flag_4")
		.getValue()
		.should.be.equal(true);

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	findWidget("Flag_3").setValue(false);

	findWidget("Flag_3")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Flag_3")
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
