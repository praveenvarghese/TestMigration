/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Validate add widget option is available for all the areas including unssigned and Plus button should not be available at the botton of the page",
	() => {
		loadPage("Main Project/WidgetCreationPageNew");

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area A")
			.selectType("Button")
			.enterName("MyNewButton")
			.clickAddWidgetButton();

		getPageConfigurator()
			.getAddWidgetDialogForArea("Area C")
			.selectType("Button")
			.enterName("MyNewButton2")
			.clickAddWidgetButton();

		findWidget("widgetcreationpagenew")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["MyNewButton"] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: ["MyNewButton2"] },
				{ areaName: "Area D", widgets: [] },
			]);

		getPageConfigurator()
			.dragWidget("MyNewButton2")
			.toArea("Area A");

		findWidget("widgetcreationpagenew")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["MyNewButton2, MyNewButton"] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);
	}
);
