/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Add multiple widget directly to a specific area", () => {
	loadPage("Main Project/WidgetCreationPageNew");

	openPageConfigurator()
		.getAddWidgetDialogForArea("Area A")
		.selectType("Button")
		.enterName("MyNewButton1")
		.clickAddWidgetButton();

	openPageConfigurator()
		.getAddWidgetDialogForArea("Area A")
		.selectType("Button")
		.enterName("MyNewButton2")
		.clickAddWidgetButton();

	openPageConfigurator()
		.getAddWidgetDialogForArea("Area A")
		.selectType("Button")
		.enterName("MyNewButton3")
		.clickAddWidgetButton();

	openPageConfigurator()
		.getAddWidgetDialogForArea("Area A")
		.selectType("Button")
		.enterName("MyNewButton4")
		.clickAddWidgetButton();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{
				areaName: "Area A",
				widgets: ["MyNewButton1", "MyNewButton2", "MyNewButton3", "MyNewButton4"],
			},
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("MyNewButton1")
		.getButtonName()
		.should.be.equal("MyNewButton1");

	findWidget("MyNewButton2")
		.getButtonName()
		.should.be.equal("MyNewButton2");

	findWidget("MyNewButton3")
		.getButtonName()
		.should.be.equal("MyNewButton3");

	findWidget("MyNewButton4")
		.getButtonName()
		.should.be.equal("MyNewButton4");
});
