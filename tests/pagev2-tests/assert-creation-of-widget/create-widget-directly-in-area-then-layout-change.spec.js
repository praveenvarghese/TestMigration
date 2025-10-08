/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario(
	"Add widgets directly to a specific area, then change the layout and verify the effect on the areas to which the widgets are assigned",
	() => {
		loadPage("Main Project/WidgetCreationPageNew");

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area A")
			.selectType("Button")
			.enterName("MyNewButton1")
			.clickAddWidgetButton();

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area B")
			.selectType("Button")
			.enterName("MyNewButton2")
			.clickAddWidgetButton();

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area C")
			.selectType("Button")
			.enterName("MyNewButton3")
			.clickAddWidgetButton();

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area D")
			.selectType("Button")
			.enterName("MyNewButton4")
			.clickAddWidgetButton();

		// Assert that all the widgets have been added to their expected area.
		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["MyNewButton1"] },
				{ areaName: "Area B", widgets: ["MyNewButton2"] },
				{ areaName: "Area C", widgets: ["MyNewButton3"] },
				{ areaName: "Area D", widgets: ["MyNewButton4"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		// Now change the layout to a layout which also has Area A-D present and verify that the widgets are still
		// where they are expected.
		openPageConfigurator().selectLayout("Layout 7"); // A layout with areas A-D
		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["MyNewButton1"] },
				{ areaName: "Area B", widgets: ["MyNewButton2"] },
				{ areaName: "Area C", widgets: ["MyNewButton3"] },
				{ areaName: "Area D", widgets: ["MyNewButton4"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		// Then change the layout to a layout which only has Area A-B. The C/D widgets should now end up in the Unassigned Area.
		openPageConfigurator().selectLayout("Layout 1"); // A layout with areas A-B
		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["MyNewButton1"] },
				{ areaName: "Area B", widgets: ["MyNewButton2"] },
				{ areaName: "Unassigned widgets", widgets: ["MyNewButton3", "MyNewButton4"] },
			]);

		// As the last step, change the layout back to an area which has Area A-D again. The 'Unassigned' widgets should be placed
		// back in area C and D.
		openPageConfigurator().selectLayout("Layout 8"); // A layout with areas A-D
		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["MyNewButton1"] },
				{ areaName: "Area B", widgets: ["MyNewButton2"] },
				{ areaName: "Area C", widgets: ["MyNewButton3"] },
				{ areaName: "Area D", widgets: ["MyNewButton4"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);
	}
);
