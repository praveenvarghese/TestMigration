/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Validate group widgets not in app manager when dnd from classic to sidepanel pagev2",
	() => {
		loadPage("Main Project/KPIs/Demo Rating");

		findWidget("demo_rating")
			.getVisibleWidgets()
			.should.eql(["groupSidepanel1", "sidepanelGroupWidget1", "sidepanelGroupTableWidget1"]);

		// Open App Manager
		openAppManager();

		// Copy the group widget from current active regular page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/KPIs/Demo Rating",
				widgetName: "groupSidepanel1",
			})
			.clickOnCopy();

		// Paste the copied widget to sidepanel page v2
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/KPIs/EmptyGLSidepanelStandardPage",
			})
			.clickOnPasteWidget();

		openAppManager().navigateToPage("Main Project/KPIs/EmptyGLSidepanelStandardPage");

		openPageConfigurator();

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{
					areaName: "Unassigned widgets",
					widgets: ["sidepanelGroupTableWidget1 (1)", "sidepanelGroupWidget1 (1)"],
				},
			]);

		findWidget("emptyglsidepanelstandardpage_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);
	}
);
