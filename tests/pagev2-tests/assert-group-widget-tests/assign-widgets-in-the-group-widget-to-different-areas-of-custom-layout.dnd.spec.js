/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Assign widgets in the group widget to different areas of custom layout", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("Custom3", true);

	getPageConfigurator()
		.dragWidget("scalar_1")
		.toArea("Area B");

	getPageConfigurator()
		.dragWidget("SidepPanelOpenForSCalar")
		.toArea("Area A");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SidepPanelOpenForSCalar"] },
			{ areaName: "Area B", widgets: ["scalar_1"] },
			{
				areaName: "Unassigned widgets",
				widgets: [
					"flag",
					"sidepanel_open_button",
					"wrongpageId",
					"wrongdialogpageid",
					"emptypageid",
					"invalidId",
					"validbutnotconfiguredid",
					"UpdateStatusBarData",
				],
			},
		]);

	findWidget("home")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SidepPanelOpenForSCalar"] },
			{ areaName: "Area B", widgets: ["scalar_1"] },
		]);

	getPageMenu().navigateToPage("Main Project/CustomLayout");

	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SidepPanelOpenForSCalar"] },
			{ areaName: "Area B", widgets: ["scalar_1"] },
			{
				areaName: "Unassigned widgets",
				widgets: [
					"flag",
					"sidepanel_open_button",
					"wrongpageId",
					"wrongdialogpageid",
					"emptypageid",
					"invalidId",
					"validbutnotconfiguredid",
					"UpdateStatusBarData",
				],
			},
		]);

	findWidget("home")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SidepPanelOpenForSCalar"] },
			{ areaName: "Area B", widgets: ["scalar_1"] },
		]);

	pageRefresh();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SidepPanelOpenForSCalar"] },
			{ areaName: "Area B", widgets: ["scalar_1"] },
			{
				areaName: "Unassigned widgets",
				widgets: [
					"flag",
					"sidepanel_open_button",
					"wrongpageId",
					"wrongdialogpageid",
					"emptypageid",
					"invalidId",
					"validbutnotconfiguredid",
					"UpdateStatusBarData",
				],
			},
		]);

	findWidget("home")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SidepPanelOpenForSCalar"] },
			{ areaName: "Area B", widgets: ["scalar_1"] },
		]);
});
