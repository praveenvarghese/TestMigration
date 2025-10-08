/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */
scenario(
	"Add a widget directly to a specific area, but use the cancel button in the wizard and see if that works as expected",
	() => {
		loadPage("Main Project/WidgetCreationPageNew");

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area A")
			.selectType("Button")
			.enterName("MyNewButton")
			.clickCancel();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["No widgets in this area"] },
				{ areaName: "Area D", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);
	}
);
