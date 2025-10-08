/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Test to verify item action options displayed for a node", () => {
	loadPage("Main Project/home");

	//Verify display text for a Item actions in a node
	findWidget("My_Map_with_Item_Actions")
		.getPoint("Des Moines")
		.rightClick()
		.getAllItemActionListName()
		.should.eql(["Supplier Info", "Place Order", "View Revenue"]);

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Des Moines")
		.rightClick()
		.getItemActionDetails(0)
		.isAnActiveAction().should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Des Moines")
		.rightClick()
		.getItemActionDetails(1)
		.isAnInactiveAction().should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Des Moines")
		.rightClick()
		.getItemActionDetails(2)
		.isAnInactiveAction().should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Verify Icon displayed for a Item action in a node
	findWidget("My_Map_with_Item_Actions")
		.getPoint("Des Moines")
		.rightClick()
		.getItemActionDetails(0)
		.hasIcon("aimms-info").should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Des Moines")
		.rightClick()
		.getItemActionDetails(1)
		.hasIcon("aimms-bag").should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Des Moines")
		.rightClick()
		.getItemActionDetails(2)
		.hasIcon("aimms-cash3").should.be.true;

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Verify display text for a Item actions in a Arc label
	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.getAllItemActionListName()
		.should.eql("Show Transport data");

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	//Verify Icon displayed for a Item action in a arc label
	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.getItemActionDetails(0)
		.hasIcon("aimms-airplane").should.be.true;

	// // Get the item actions context-menu off
	// getFooter()
	// 	.getBreadcrumb()
	// 	.getBreadcrumbLink()
	// 	.click();

	// //Verify display text for a Item actions in a Arc
	// findWidget("My_Map_with_Item_Actions")
	// 	.getArcSet(0)
	// 	.getArc("Denver", "Detroit")
	// 	.rightClick(45, 92)
	// 	.getItemActionDetails(0)
	// 	.getTitleText()
	// 	.should.eql("Show Transport data");

	// // Get the item actions context-menu off
	// getFooter()
	// 	.getBreadcrumb()
	// 	.getBreadcrumbLink()
	// 	.click();

	// //Verify Icon displayed for a Item action in a arc
	// findWidget("My_Map_with_Item_Actions")
	// 	.getArcSet(0)
	// 	.getArc("Denver", "Detroit")
	// 	.rightClick(45, 92)
	// 	.getItemActionDetails(0)
	// 	.hasIcon("aimms-airplane").should.be.true;
});
