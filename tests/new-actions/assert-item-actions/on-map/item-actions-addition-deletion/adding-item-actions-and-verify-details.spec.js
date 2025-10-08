/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Configuring item actions, and asserting the details.", () => {
	loadPage("Main Project/map_Page");

	//Validate item action is not displayed when its not configured
	findWidget("otherNetwork")
		.getPoint("Denver")
		.rightClick()
		.isItemActionDisplayed().should.be.false;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("otherNetwork")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.isItemActionDisplayed().should.be.false;

	//Configure item action and validate its displayed
	findWidget("otherNetwork")
		.openWidgetExtensionsOptionEditor()
		.setWidgetExtensions([
			{
				name: "Item Actions",
				value: "MyItemActions",
			},
		]);

	findWidget("otherNetwork").closeOptionDialog();

	findWidget("otherNetwork")
		.getPoint("Denver")
		.rightClick()
		.isItemActionDisplayed().should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("otherNetwork")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.isItemActionDisplayed().should.be.true;

	//Navigate to diffrent page and validate item action is displayed.
	openAppManager().navigateToPage("Main Project/home");

	openAppManager().navigateToPage("Main Project/map_Page");

	findWidget("otherNetwork")
		.getPoint("Denver")
		.rightClick()
		.isItemActionDisplayed().should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("otherNetwork")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.isItemActionDisplayed().should.be.true;

	//remove item action and validate its not displayed
	findWidget("otherNetwork")
		.openWidgetExtensionsOptionEditor()
		.clearWidgetExtensions([
			{
				name: "Item Actions",
			},
		]);

	//Validate item action is not displayed when its not configured
	findWidget("otherNetwork")
		.getPoint("Denver")
		.rightClick()
		.isItemActionDisplayed().should.be.false;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("otherNetwork")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.isItemActionDisplayed().should.be.false;

	//Navigate to diffrent page and validate item action is not displayed
	openAppManager().navigateToPage("Main Project/home");

	openAppManager().navigateToPage("Main Project/map_Page");

	findWidget("otherNetwork")
		.getPoint("Denver")
		.rightClick()
		.isItemActionDisplayed().should.be.false;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("otherNetwork")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.isItemActionDisplayed().should.be.false;
});
