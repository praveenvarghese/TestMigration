/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Validate widget action functionality when standard page layout is changed to custom layout",
	() => {
		loadPage("Main Project/StandardLayout");

		openPageConfigurator().selectLayout("CustomLayout1", "true");

		//Validate widget action details displayed.
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
	}
);
