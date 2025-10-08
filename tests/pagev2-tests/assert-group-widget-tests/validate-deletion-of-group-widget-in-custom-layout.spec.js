/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Validate Widgets assigned in the group widget gets deleted when group widget gets deleted also when its not assigned to any areas of custom Layout",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		findWidget("home")
			.getVisibleWidgets()
			.should.eql([
				"flag",
				"sidepanel_open_button",
				"wrongpageId",
				"wrongdialogpageid",
				"emptypageid",
				"invalidId",
				"validbutnotconfiguredid",
				"CompactSCalar",
				"SidepPanelOpenForSCalar",
				"scalar_1",
				"UpdateStatusBarData",
			]);

		openWidgetManager().deleteWidget("CompactSCalar");

		openWidgetManager()
			.getWidgets()
			.should.be.eql([
				"flag",
				"sidepanel_open_button",
				"wrongpageId",
				"wrongdialogpageid",
				"emptypageid",
				"invalidId",
				"validbutnotconfiguredid",
				"UpdateStatusBarData",
			]);

		openPageConfigurator().selectLayout("Custom3", true);

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
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
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);

		getPageMenu().navigateToPage("Main Project/CustomLayout");

		getPageMenu().navigateToPage("Main Project/home");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
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
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
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
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);
	}
);
