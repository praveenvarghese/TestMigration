/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Widgets wrongly assigned when unassigned from another layout", () => {
	loadPage("Main Project/ChartStandardPage?_aimms_only_persistence.write=true");

	findWidget("chartstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["barchart1"] },
			{ areaName: "Area B", widgets: ["barchart2"] },
		]);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["barchart1"] },
			{ areaName: "Area B", widgets: ["barchart2"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	getPageConfigurator()
		.dragWidget("barchart2")
		.toArea("Unassigned widgets");

	openPageConfigurator().selectLayout("Layout 6");

	findWidget("chartstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["barchart1"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
			{ areaName: "Area E", widgets: [] },
		]);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["barchart1"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Area E", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["barchart2"] },
		]);

	getPageConfigurator()
		.dragWidget("barchart2")
		.toArea("Area E");

	findWidget("chartstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["barchart1"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
			{ areaName: "Area E", widgets: ["barchart2"] },
		]);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["barchart1"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Area E", widgets: ["barchart2"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator().selectLayout("Layout 1");

	findWidget("chartstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["barchart1"] },
			{ areaName: "Area B", widgets: [] },
		]);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["barchart1"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["barchart2"] },
		]);

	getPageConfigurator()
		.dragWidget("barchart1")
		.toArea("Unassigned widgets");

	openPageConfigurator().selectLayout("Layout 6");

	findWidget("chartstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
			{ areaName: "Area E", widgets: ["barchart2"] },
		]);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Area E", widgets: ["barchart2"] },
			{ areaName: "Unassigned widgets", widgets: ["barchart1"] },
		]);

	pageRefresh();

	findWidget("chartstandardpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
			{ areaName: "Area E", widgets: ["barchart2"] },
		]);

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Area E", widgets: ["barchart2"] },
			{ areaName: "Unassigned widgets", widgets: ["barchart1"] },
		]);
});
