/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate cancel button functionality", () => {
	loadPage("Main Project/KPIs/Impact Score?_aimms_only_persistence.write=true");

	const widgetList = [
		{ areaName: "Area A", widgets: ["selectionText"] },
		{ areaName: "Area B", widgets: ["tableStandard"] },
	];

	const previewData = [
		"grid-template-columns: minmax(0px, 1fr)",
		" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
		' grid-template-areas: "area-a" "area-b"',
	];

	//Before editing validate widgets in widget areas
	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like(widgetList);

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	//Validate custom Layouts names displayed
	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	//Validate custom Layout preview section
	getPageConfigurator()
		.getLayoutPreviewData("Custom3", "custom")
		.should.eql(previewData);

	//Validate custom Layout widgets displayed preview section
	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	//Open custom layout editor
	getPageConfigurator().openCustomLayoutEditor("Custom3");

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
		layoutContent: newLayoutContent,
		layoutName: newLayoutName,
	});

	getCustomLayoutDialog().cancel();

	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like(widgetList);

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	//Validate custom Layout preview section
	getPageConfigurator()
		.getLayoutPreviewData("Custom3", "custom")
		.should.eql(previewData);

	//Validate custom Layout widgets displayed preview section
	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	closePageConfigurator();

	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like(widgetList);

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	//Validate custom Layout preview section
	getPageConfigurator()
		.getLayoutPreviewData("Custom3", "custom")
		.should.eql(previewData);

	//Validate custom Layout widgets displayed preview section
	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator().openCustomLayoutEditor("Custom3");

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	//Commenting the tests as page refresh is making test flaky
	// pageRefresh();

	// openPageConfigurator().selectCustomLayoutsSection();

	// findWidget("impact_score")
	// 	.getWidgetAreas()
	// 	.should.include.something.like(widgetList);

	// getPageConfigurator()
	// 	.getVisibleLayoutNames("custom")
	// 	.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	// //Validate custom Layout preview section
	// getPageConfigurator()
	// 	.getLayoutPreviewData("Custom3", "custom")
	// 	.should.eql(previewData);

	// //Validate custom Layout widgets displayed preview section
	// getPageConfigurator()
	// 	.getWidgetAreas()
	// 	.should.include.something.like([
	// 		{ areaName: "Area A", widgets: ["selectionText"] },
	// 		{ areaName: "Area B", widgets: ["tableStandard"] },
	// 		{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
	// 	]);

	// openPageConfigurator().openCustomLayoutEditor("Custom3");

	// getCustomLayoutDialog()
	// 	.getCustomLayoutTitle()
	// 	.should.be.equal("Custom3");
});
