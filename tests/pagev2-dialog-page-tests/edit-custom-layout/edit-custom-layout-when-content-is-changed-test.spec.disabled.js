/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate custom layout when only layout content is changed", () => {
	loadPage("Main Project/StandardDialogPageWithWidgets?_aimms_only_persistence.write=true");

	openPageConfigurator().selectStandardLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 1", "Layout 2", "Layout 7", "Layout 8"]);

	openPageConfigurator().selectLayout("Layout 7");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelFlag"] },
			{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
			{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
			{ areaName: "Area D", widgets: ["downloadWidget"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("standarddialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelFlag"] },
			{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
			{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
			{ areaName: "Area D", widgets: ["downloadWidget"] },
		]);

	closePageConfigurator();

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	//Validate custom Layout preview section
	/*
	getPageConfigurator()
		.getLayoutPreviewData("Custom3", "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a" "area-b"',
		]);
*/

	openPageConfigurator().openCustomLayoutEditor("Custom3");

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	const newLayoutContent = {
		componentName: "Grid",
		props: {
			gridTemplateColumns: "1fr 1fr 1fr 1fr",
			gridTemplateRows: "1fr 1fr",
			gridTemplateAreas: '"area-a area-b area-c area-c" "area-d area-d area-e area-e"',
		},
		items: [
			{
				componentName: "WidgetArea",
				props: {
					gridArea: "area-a",
					name: "Area A",
				},
			},
			{
				componentName: "WidgetArea",
				props: {
					gridArea: "area-b",
					name: "Area B",
				},
			},
			{
				componentName: "WidgetArea",
				props: {
					gridArea: "area-c",
					name: "Area C",
					gridAutoFlow: "column",
				},
			},
			{
				componentName: "WidgetArea",
				props: {
					gridArea: "area-d",
					name: "Area D",
					gridAutoFlow: "column",
				},
			},
			{
				componentName: "WidgetArea",
				props: {
					gridArea: "area-e",
					name: "Area E",
					gridAutoFlow: "column",
				},
			},
		],
	};

	getCustomLayoutDialog().edit({
		layoutContent: newLayoutContent,
	});

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	getCustomLayoutDialog().save();

	openPageConfigurator().openCustomLayoutEditor("Custom3");

	getCustomLayoutDialog().edit({
		layoutContent: newLayoutContent,
	});

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	getCustomLayoutDialog().save();

	closePageConfigurator();

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectLayout("Custom3");

	openPageConfigurator().selectLayout("CustomLayout1");

	openPageConfigurator().selectLayout("Custom3");

	//Validate custom Layout preview section after editing
	getPageConfigurator()
		.getLayoutPreviewData("Custom3", "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c area-c" "area-d area-d area-e area-e"',
		]);

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectLayout("Custom3");

	openPageConfigurator().selectLayout("CustomLayout1");

	openPageConfigurator().selectLayout("Custom3");

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelFlag"] },
			{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
			{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
			{ areaName: "Area D", widgets: ["downloadWidget"] },
			{ areaName: "Area E", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	findWidget("standarddialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelFlag"] },
			{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
			{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
			{ areaName: "Area D", widgets: ["downloadWidget"] },
			{ areaName: "Area E", widgets: [] },
		]);

	closePageConfigurator();

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	openPageConfigurator().openCustomLayoutEditor("Custom3");

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	const iniLayoutContent = {
		componentName: "Grid",
		props: {
			gridTemplateColumns: "1fr",
			gridTemplateRows: "1fr 1fr",
			gridTemplateAreas: '"area-a" "area-b"',
		},
		items: [
			{
				componentName: "WidgetArea",
				props: {
					gridArea: "area-a",
					name: "Area A",
					gridAutoFlow: "column",
				},
			},
			{
				componentName: "WidgetArea",
				props: {
					gridArea: "area-b",
					name: "Area B",
					gridAutoFlow: "column",
				},
			},
		],
	};

	getCustomLayoutDialog().edit({
		layoutContent: iniLayoutContent,
	});

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	getCustomLayoutDialog().save();

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

	openPageConfigurator().selectStandardLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 1", "Layout 2", "Layout 7", "Layout 8"]);

	openPageConfigurator().selectLayout("Layout 7");

	findWidget("standarddialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelFlag"] },
			{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
			{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
			{ areaName: "Area D", widgets: ["downloadWidget"] },
		]);
});
