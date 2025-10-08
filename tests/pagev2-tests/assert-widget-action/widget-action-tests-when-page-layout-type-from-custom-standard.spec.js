/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Validate widget action functionality when custom page layout is changed to standard layout",
	() => {
		loadPage("Main Project/CustomLayout");

		openPageConfigurator().selectLayout("Layout 6");

		//Validate widget action details displayed.
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
	}
);
