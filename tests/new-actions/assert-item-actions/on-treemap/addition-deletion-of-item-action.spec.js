/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Addition and deletion of Item Action on tree map.", () => {
	loadPage("Main Project/Charts/Treemap");

	// Disable default browser context menu on the page
	findWidget("treemap_1").unBindBrowserContextmenu();

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

	// Right click on a Job
	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.rightClick();

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Treemap")
		.getItemActions()
		.isItemActionDisplayed().should.be.false;

	//Configure item action and validate its displayed
	findWidget("Treemap")
		.openWidgetExtensionsOptionEditor()
		.setWidgetExtensions([
			{
				name: "Item Actions",
				value: "treeMapItemAction",
			},
		]);

	findWidget("treemap_1").closeOptionDialog();

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.rightClick();

	findWidget("Treemap")
		.getItemActions()
		.isItemActionDisplayed().should.be.false;

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	//Load Item Action Data through a procedure
	findWidget("loadData").click();

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.rightClick();

	findWidget("Treemap")
		.getItemActions()
		.isItemActionDisplayed().should.be.true;

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Treemap")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);

	openAppManager().navigateToPage("Main Project/Charts");

	openAppManager().navigateToPage("Main Project/Charts/Treemap");

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.rightClick();

	findWidget("Treemap")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("Treemap")
		.openWidgetExtensionsOptionEditor()
		.clearWidgetExtensions([
			{
				name: "Item Actions",
			},
		]);

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.rightClick();

	findWidget("Treemap")
		.getItemActions()
		.isItemActionDisplayed().should.be.false;

	openAppManager().navigateToPage("Main Project/Charts");

	openAppManager().navigateToPage("Main Project/Charts/Treemap");

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.rightClick();

	findWidget("Treemap")
		.getItemActions()
		.isItemActionDisplayed().should.be.false;
});
