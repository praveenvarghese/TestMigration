/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Test to verify widget actions in dialog page v2 standard", () => {
	loadPage("Main Project/dp v2 StandardLayout");

	//Validate widget actions details displayed
	findWidget("Flag_3_v2")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Flag_3_v2")
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

	findWidget("Flag_3_v2")
		.getValue()
		.should.be.equal(false);

	//Validate click functionality on widget action
	findWidget("Flag_3_v2")
		.getWidgetActionDetails(9)
		.click();

	findWidget("large_dp_v2")
		.getVisibleWidgetsInViewPort()
		.should.eql(["widget1_1_v2"]);

	findWidget("large_dp_v2").clickDialogPageButton("ok");

	findWidget("Flag_3_v2")
		.getValue()
		.should.be.equal(true);

	findWidget("Flag_3_v2").setValue(false);

	findWidget("Flag_3_v2")
		.getValue()
		.should.be.equal(false);
});
