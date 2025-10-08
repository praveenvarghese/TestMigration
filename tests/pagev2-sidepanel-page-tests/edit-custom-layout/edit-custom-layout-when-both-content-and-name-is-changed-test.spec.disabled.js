/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate custom layout when both content and name is changed", () => {
	loadPage("Main Project/KPIs/Impact Score?_aimms_only_persistence.write=true");

	//Before editing validate widgets in widget areas
	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
		]);

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	//Validate custom Layouts names displayed
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

	//Validate custom Layout widgets displayed preview section
	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	//Open custom layout editor
	openPageConfigurator().openCustomLayoutEditor("Custom3");

	//Validate the layout title
	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	const newLayoutName = "Custom324";
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

	//Edit the custom layout by changing area and name
	getCustomLayoutDialog().edit({
		layoutName: newLayoutName,
		layoutContent: newLayoutContent,
	});

	//Validate the layout title
	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom324");

	getCustomLayoutDialog().save();

	openPageConfigurator().openCustomLayoutEditor("Custom324");

	//Edit the custom layout by changing area and name
	getCustomLayoutDialog().edit({
		layoutName: newLayoutName,
		layoutContent: newLayoutContent,
	});

	//Validate the layout title
	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom324");

	getCustomLayoutDialog().save();

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom324", "CustomLayout1", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectLayout("Custom324");

	openPageConfigurator().selectLayout("CustomLayout1");

	openPageConfigurator().selectLayout("Custom324");

	//Validate custom Layout preview section after editing
	getPageConfigurator()
		.getLayoutPreviewData(newLayoutName, "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c area-c" "area-d area-d area-e area-e"',
		]);

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom324", "CustomLayout1", "New layout Copy", "Add a layout"]);

	openPageConfigurator().selectLayout("Custom324");

	openPageConfigurator().selectLayout("CustomLayout1");

	openPageConfigurator().selectLayout("Custom324");

	//Validate custom Layout widgets displayed preview section after editing
	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Area E", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	//Validate widgets displayed in custom layout page after editing
	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
			{ areaName: "Area E", widgets: [] },
		]);

	closePageConfigurator();

	/*
	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
			{ areaName: "Area E", widgets: [] },
		]);

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom324", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getLayoutPreviewData("Custom324", "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c area-c" "area-d area-d area-e area-e"',
		]);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Area E", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator().openCustomLayoutEditor(newLayoutName);

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal(newLayoutName);

	pageRefresh();

	openPageConfigurator().selectCustomLayoutsSection();

	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
			{ areaName: "Area E", widgets: [] },
		]);

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom324", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getLayoutPreviewData("Custom324", "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c area-c" "area-d area-d area-e area-e"',
		]);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Area E", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator().openCustomLayoutEditor(newLayoutName);

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal(newLayoutName);
*/

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom324", "CustomLayout1", "New layout Copy", "Add a layout"]);

	openPageConfigurator().openCustomLayoutEditor("Custom324");

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom324");

	const iniLayoutName = "Custom3";
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

	//Edit the custom layout by changing area and name
	getCustomLayoutDialog().edit({
		layoutName: iniLayoutName,
		layoutContent: iniLayoutContent,
	});

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	getCustomLayoutDialog().save();

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

	openPageConfigurator().selectStandardLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 1", "Layout 2", "Layout 7", "Layout 8"]);

	openPageConfigurator().selectLayout("Layout 1");

	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
		]);
});
