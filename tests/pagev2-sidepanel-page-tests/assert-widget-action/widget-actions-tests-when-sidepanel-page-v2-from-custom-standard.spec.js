/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Validate widget actions when sidepanel page v2 layout is changed from custom to standard",
	() => {
		loadPage("Main Project/KPIs/Energy Score");

		openPageConfigurator().selectLayout("Layout 1");

		findWidget("customTable")
			.getWidgetActionMenuButton()
			.click();

		findWidget("customTable")
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
			.openSidepanelTab("Team Energy Score");

		//Validate widget action details displayed
		findWidget("customTable")
			.getWidgetActionMenuButton()
			.click();

		findWidget("customTable")
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
