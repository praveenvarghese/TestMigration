/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Validate widgets in group widgets are displayed separately when layout is changed from classic to standard",
	() => {
		loadPage("Main Project/home");

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

		openPageConfigurator().selectLayout("Layout 1");

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
						"SidepPanelOpenForSCalar",
						"scalar_1",
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
