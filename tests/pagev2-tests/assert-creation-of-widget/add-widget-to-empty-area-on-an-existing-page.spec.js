/*!
 * @AIMMS_FILE=models/FastTableEditing/FastTableEditing.aimms
 */

scenario(
	"Add a widget with the empty area and widget should be  added to that particular area on both panel as well as in the screen",
	() => {
		loadPage("Main Project/Scalar");

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

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["MyNewButton"] },
				{ areaName: "Area B", widgets: ["MyNewButton2"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("MyNewButton")
			.getButtonName()
			.should.be.equal("MyNewButton");

		findWidget("MyNewButton2")
			.getButtonName()
			.should.be.equal("MyNewButton2");

		openAppManager()
			.unfoldWidgetContainers(["Main Project/Scalar"])
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
