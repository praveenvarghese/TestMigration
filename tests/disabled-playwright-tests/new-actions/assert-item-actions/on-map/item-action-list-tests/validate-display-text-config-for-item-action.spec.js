/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Test to verify display text part of item action specification", () => {
	loadPage("Main Project/home");

	//Validate modified displayed text is displayed right way for a node item action
	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("Factory Details");

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(3, 0)
		.setValue("Store Details");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("Store Details");

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(3, 0)
		.setValue("Store Details");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getAllItemActionListName()
		.should.eql(["Store Details", "View existing orders", "Increase Supply", "Delete Orders"]);

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Validate empty display text item action step is displayed when display text is empty for a node
	findWidget("itemactiontable")
		.getCell(3, 0)
		.setValue(" ");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getAllItemActionListName()
		.should.eql(["", "View existing orders", "Increase Supply", "Delete Orders"]);

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Validate empty display text item action step is displayed when display text is empty for a arc label
	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("Show Transport data");

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(2, 0)
		.setValue(" ");

	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("");

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Validate empty display text item action step is displayed when display text is empty for a arc
	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.rightClick(45, 92)
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("");

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(2, 0)
		.setValue("Show Transport data");

	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.rightClick(45, 92)
		.getItemActionDetails(0)
		.getTitleText()
		.should.eql("Show Transport data");
});
