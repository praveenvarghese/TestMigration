/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Test to verify state part of item action specification", () => {
	loadPage("Main Project/home");

	//Validate active state of item action
	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.isAnActiveAction().should.be.true;

	// Get the item actions context-menu off
	// findWidget("My_Map_with_Item_Actions").pressKeys([SPECIAL_KEYS.escape]);
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("Factory Details");

	// Get the item actions context-menu off
	// findWidget("My_Map_with_Item_Actions").pressKeys([SPECIAL_KEYS.escape]);
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Validate inactive state of item action
	findWidget("itemactiontable")
		.getCell(3, 3)
		.setValue("Inactive");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.isAnInactiveAction().should.be.true;

	// Get the item actions context-menu off
	// findWidget("My_Map_with_Item_Actions").pressKeys([SPECIAL_KEYS.escape]);
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("Factory Details");

	// Get the item actions context-menu off
	// findWidget("My_Map_with_Item_Actions").pressKeys([SPECIAL_KEYS.escape]);
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Validate case is insensitive
	findWidget("itemactiontable")
		.getCell(3, 3)
		.setValue("ACTIVE");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.isAnActiveAction().should.be.true;

	// Get the item actions context-menu off
	// findWidget("My_Map_with_Item_Actions").pressKeys([SPECIAL_KEYS.escape]);
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("Factory Details");

	// Get the item actions context-menu off
	// findWidget("My_Map_with_Item_Actions").pressKeys([SPECIAL_KEYS.escape]);
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Validate item action will be disabled if state is empty or mispelled
	findWidget("itemactiontable")
		.getCell(3, 3)
		.setValue(" ");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getAllItemActionListName()
		.should.eql(["View existing orders", "Increase Supply", "Delete Orders"]);

	// Get the item actions context-menu off
	// findWidget("My_Map_with_Item_Actions").pressKeys([SPECIAL_KEYS.escape]);
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(3, 3)
		.setValue("ACTIVE");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getAllItemActionListName()
		.should.eql([
			"Factory Details",
			"View existing orders",
			"Increase Supply",
			"Delete Orders",
		]);

	// Get the item actions context-menu off
	// findWidget("My_Map_with_Item_Actions").pressKeys([SPECIAL_KEYS.escape]);
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(3, 3)
		.setValue("Mispelled");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getAllItemActionListName()
		.should.eql(["View existing orders", "Increase Supply", "Delete Orders"]);
});
