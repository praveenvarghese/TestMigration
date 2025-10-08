/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Test to verify item action options displayed upon change node", () => {
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
		.getPoint("Denver")
		.rightClick()
		.getAllItemActionListName()
		.should.eql([
			"Factory Details",
			"View existing orders",
			"Increase Supply",
			"Delete Orders",
		]);

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Houston")
		.rightClick()
		.getAllItemActionListName()
		.should.eql(["Supplier Info", "Place Order", "View Revenue"]);

	// Get the item actions context-menu off
	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink()
		.click();

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
});
