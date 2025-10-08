/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Test to verify icon part of item action specification", () => {
	loadPage("Main Project/home");

	//Validate icon is not displayed when empty value is passed for a icon in node item active action
	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.hasIcon("aimms-info").should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(3, 1)
		.setValue(" ");

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.hasIcon("aimms-info").should.be.false;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Validate icon is not displayed when empty value is passed for a icon in arc label item active action
	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.getItemActionDetails(0)
		.hasIcon("aimms-airplane").should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(2, 1)
		.setValue(" ");

	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.getItemActionDetails(0)
		.hasIcon("aimms-airplane").should.be.false;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Validate icon is not displayed when empty value is passed for a icon in arc item active action
	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.rightClick(45, 92)
		.getItemActionDetails(0)
		.hasIcon("aimms-airplane").should.be.false;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("itemactiontable")
		.getCell(2, 1)
		.setValue("aimms-airplane");

	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.rightClick(45, 92)
		.getItemActionDetails(0)
		.hasIcon("aimms-airplane").should.be.true;
});
