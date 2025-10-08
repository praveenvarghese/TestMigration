/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Validate widgets in group widgets are displayed separately when layout is changed from classic to standard",
	() => {
		loadPage("Main Project/classicLayoutWithGroupWidget");

		findWidget("classiclayoutwithgroupwidget_1")
			.getVisibleWidgets()
			.should.eql(["group1", "widgetGroup1", "widgetGroup2"]);

		openPageConfigurator().selectLayout("Custom3", true);

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["widgetGroup1", "widgetGroup2"] },
			]);

		findWidget("classiclayoutwithgroupwidget_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);
	}
);
