/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
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
			.getAddWidgetDialogForArea("Area B")
			.selectType("Button")
			.enterName("MyNewButton2")
			.clickAddWidgetButton();

		openAppManager()
			.unfoldWidgetContainers(["Main Project/WidgetCreationPageNew"])
			.getAppManagerInfo()
			.should.include.something.like([
				{
					Name: "MyNewButton",
					NodeType: "Widget",
				},
				{
					Name: "MyNewButton2",
					NodeType: "Widget",
				},
			]);
	}
);
