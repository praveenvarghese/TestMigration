/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Add a widget directly to a specific area", () => {
	loadPage("Main Project/WidgetCreationPageNew");

	openPageConfigurator()
		.getAddWidgetDialogForArea("Area A")
		.selectType("Button")
		.enterName("MyNewButton")
		.clickAddWidgetButton();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["MyNewButton"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("MyNewButton")
		.getButtonName()
		.should.be.equal("MyNewButton");
});
