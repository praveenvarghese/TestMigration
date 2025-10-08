/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Validate group widgets not in app manager when dnd from classic to dialog pagev2", () => {
	loadPage("Main Project/classicLayoutGroupWidget");

	findWidget("classiclayoutgroupwidget_1")
		.getVisibleWidgets()
		.should.eql(["group_dnd_v2", "table_dnd_v2", "scalar_dnd_v2"]);

	// Open App Manager
	openAppManager();

	// Copy the group widget from current active regular page
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/classicLayoutGroupWidget",
			widgetName: "group_dnd_v2",
		})
		.clickOnCopy();

	// Paste the copied widget to dialog page v2
	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/dpv2GroupWidget",
		})
		.clickOnPasteWidget();

	openAppManager().navigateToPage("Main Project/dpv2GroupWidget");

	openPageConfigurator();

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["table_dnd_v2 (1)", "scalar_dnd_v2 (1)"] },
		]);

	findWidget("dpv_2_groupwidget")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
		]);
});
