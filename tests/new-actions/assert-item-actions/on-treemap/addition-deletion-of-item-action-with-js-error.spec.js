/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Addition and deletion of Item Action on tree map with JS error.", () => {
	loadPage("Main Project/Charts/Treemap");

	// Configure item action and validate its displayed
	findWidget("Treemap")
		.openWidgetExtensionsOptionEditor()
		.setWidgetExtensions([
			{
				name: "Item Actions",
				value: "treeMapItemAction",
			},
		]);

	// Load Item Action Data through a procedure
	findWidget("loadData").click();

	findWidget("Treemap")
		.openWidgetExtensionsOptionEditor()
		.clearWidgetExtensions([
			{
				name: "Item Actions",
			},
		]);

	// Trigger JS error: "Cannot read property 'contents' of undefined"
	findWidget("loadData").click();

	findWidget("Treemap")
		.findRectangle("Ingredient Price, Beef Stroganoff")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");
});
