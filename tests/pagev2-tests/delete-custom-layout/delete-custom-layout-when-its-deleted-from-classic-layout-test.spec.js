/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate deletion of custom layout from an another classic layout page", () => {
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

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator().deleteCustomLayout("CustomLayout1");

	//Validate custom Layouts names displayed
	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

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

	getPageMenu().navigateToPage("Main Project/home");

	getPageMenu().navigateToPage("Main Project/CustomLayout");

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectStandardLayoutsSection();

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
		]);

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 1" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Unassigned widgets", widgets: ["LargeDialog_2", "Flag_4"] },
		]);

	pageRefresh();

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectStandardLayoutsSection();

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
		]);

	openPageConfigurator()
		.getSelectedLayoutInfo()
		.should.be.similar.to({ LayoutType: "Standard", Layout: "Layout 1" });

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Unassigned widgets", widgets: ["LargeDialog_2", "Flag_4"] },
		]);
});
