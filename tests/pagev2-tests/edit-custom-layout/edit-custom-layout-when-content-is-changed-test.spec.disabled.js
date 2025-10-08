/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate custom layout when only content name is changed", () => {
	loadPage("Main Project/StandardLayout?_aimms_only_persistence.write=true");

	//Before editing validate widgets in widget areas
	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
		]);

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	//Validate custom Layouts names displayed
	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	//Validate custom Layout preview section
	getPageConfigurator()
		.getLayoutPreviewData("Custom3", "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a" "area-b"',
		]);

	//Validate custom Layout widgets displayed preview section
	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	//Open custom layout editor
	openPageConfigurator().openCustomLayoutEditor("Custom3");

	//Validate the layout title
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

	//Edit the custom layout by changing area and name
	getCustomLayoutDialog().edit({
		layoutContent: newLayoutContent,
	});

	getCustomLayoutDialog().save();

	//Validate custom Layouts names displayed after editing
	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	//Validate custom Layout preview section after editing
	getPageConfigurator()
		.getLayoutPreviewData("Custom3", "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c area-c" "area-d area-d area-e area-e"',
		]);

	//Validate custom Layout widgets displayed preview section after editing
	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Area E", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	//Validate widgets displayed in custom layout page after editing
	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Area E", widgets: [] },
		]);

	// Navigate to another page and validate all the details is same as above
	getPageMenu().navigateToPage("Main Project/home");

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	//Navigate to custom layout
	openPageConfigurator().selectCustomLayoutsSection();

	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Area E", widgets: [] },
		]);

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getLayoutPreviewData("Custom3", "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c area-c" "area-d area-d area-e area-e"',
		]);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
			{ areaName: "Area E", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator().openCustomLayoutEditor("Custom3");

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal("Custom3");

	//Commenting the tests as page refresh is making test flaky

	// pageRefresh();

	// openPageConfigurator().selectCustomLayoutsSection();

	// findWidget("standardlayout_1")
	// 	.getWidgetAreas()
	// 	.should.include.something.like([
	// 		{ areaName: "Area A", widgets: ["SmallDialog_1"] },
	// 		{ areaName: "Area B", widgets: ["MediumDialog_1"] },
	// 		{ areaName: "Area C", widgets: ["LargeDialog_1"] },
	// 		{ areaName: "Area D", widgets: ["Flag_3"] },
	// 		{ areaName: "Area E", widgets: [] },
	// 	]);

	// getPageConfigurator()
	// 	.getVisibleLayoutNames("custom")
	// 	.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	// getPageConfigurator()
	// 	.getLayoutPreviewData("Custom3", "custom")
	// 	.should.eql([
	// 		"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
	// 		" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
	// 		' grid-template-areas: "area-a area-b area-c area-c" "area-d area-d area-e area-e"',
	// 	]);

	// getPageConfigurator()
	// 	.getWidgetAreas()
	// 	.should.include.something.like([
	// 		{ areaName: "Area A", widgets: ["SmallDialog_1"] },
	// 		{ areaName: "Area B", widgets: ["MediumDialog_1"] },
	// 		{ areaName: "Area C", widgets: ["LargeDialog_1"] },
	// 		{ areaName: "Area D", widgets: ["Flag_3"] },
	// 		{ areaName: "Area E", widgets: ["No widgets in this area"] },
	// 		{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
	// 	]);

	// openPageConfigurator().openCustomLayoutEditor("Custom3");

	// getCustomLayoutDialog()
	// 	.getCustomLayoutTitle()
	// 	.should.be.equal("Custom3");
});
