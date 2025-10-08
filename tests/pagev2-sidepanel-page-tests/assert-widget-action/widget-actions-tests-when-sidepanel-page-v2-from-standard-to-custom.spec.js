/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Validate widget action when sidepanel page v2 layout is changed from standard to custom",
	() => {
		loadPage("Main Project/KPIs/Impact Score");

		openPageConfigurator().selectLayout("Custom3", "true");

		findWidget("tableStandard")
			.getWidgetActionMenuButton()
			.click();

		findWidget("tableStandard")
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

		getPageMenu().navigateToPage("Main Project/home");

		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("Impact Score");

		//Validate widget action details displayed
		findWidget("tableStandard")
			.getWidgetActionMenuButton()
			.click();

		findWidget("tableStandard")
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
	}
);
