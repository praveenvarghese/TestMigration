/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Test to verify widget action when options are changed", () => {
	loadPage("Main Project/widget_action_page");

	//Validate widget action details displayed.
	findWidget("TestWidgetACtion")
		.getWidgetActionMenuButton()
		.click();

	findWidget("TestWidgetACtion")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
			{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
		]);

	//Validate widget action details when display text is changed
	findWidget("TestWidgetACtion")
		.getCell(0, 0)
		.setValue("Store Details");

	findWidget("TestWidgetACtion")
		.getWidgetActionMenuButton()
		.click();

	findWidget("TestWidgetACtion")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "Store Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
			{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
		]);

	findWidget("TestWidgetACtion")
		.getWidgetActionMenuButton()
		.click();

	//Validate widget action details when icon is changed
	findWidget("TestWidgetACtion")
		.getCell(0, 2)
		.setValue(" ");

	findWidget("TestWidgetACtion")
		.getWidgetActionMenuButton()
		.click();

	findWidget("TestWidgetACtion")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "Store Details", icon: "", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
			{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
		]);

	findWidget("TestWidgetACtion")
		.getWidgetActionMenuButton()
		.click();

	findWidget("TestWidgetACtion").pressKeys([SPECIAL_KEYS.escape]);

	//Validate widget action details when state is changed
	findWidget("TestWidgetACtion")
		.getCell(0, 4)
		.setValue("INACTIVE");

	findWidget("TestWidgetACtion")
		.getWidgetActionMenuButton()
		.click();

	findWidget("TestWidgetACtion")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "Store Details", icon: "", state: "inactive" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
			{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
		]);
});
