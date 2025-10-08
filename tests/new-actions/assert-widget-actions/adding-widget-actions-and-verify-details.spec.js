/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Configuring item actions, and asserting the details.", () => {
	loadPage("Main Project/map_Page");

	findWidget("otherNetwork").mouseHover();
	findWidget("otherNetwork").isWidgetActionMenuButtonDisplayed().should.be.true;

	//Configure item action and validate its displayed.
	findWidget("otherNetwork")
		.openWidgetExtensionsOptionEditor()
		.setWidgetExtensions([
			{
				name: "Widget Actions",
				value: "MyWidgetActions",
			},
		]);

	findWidget("otherNetwork").closeOptionDialog();

	findWidget("otherNetwork").mouseHover();
	findWidget("otherNetwork").isWidgetActionMenuButtonDisplayed().should.be.true;

	//Navigate to diffrent page and validate item action is displayed.
	openAppManager().navigateToPage("Main Project/home");

	openAppManager().navigateToPage("Main Project/map_Page");

	findWidget("otherNetwork").mouseHover();
	findWidget("otherNetwork").isWidgetActionMenuButtonDisplayed().should.be.true;

	findWidget("otherNetwork")
		.getWidgetActionMenuButton()
		.click();

	findWidget("otherNetwork")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
			{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
		]);
});
