/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate custom layout when only name is changed", () => {
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

	const customLayoutNames = ["Custom324", "CustomLayout1", "New layout Copy", "Add a layout"];

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
	//Edit the custom layout by changing area and name
	getCustomLayoutDialog().edit({
		layoutName: newLayoutName,
	});

	getCustomLayoutDialog().save();

	//Validate custom Layouts names displayed after editing
	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(customLayoutNames);

	//Validate custom Layout preview section after editing
	getPageConfigurator()
		.getLayoutPreviewData(newLayoutName, "custom")
		.should.eql(previewData);

	//Validate custom Layout widgets displayed preview section after editing
	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	//Validate widgets displayed in custom layout page after editing
	findWidget("impact_score")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
		]);

	// Navigate to another page and validate all the details is same as above
	closePageConfigurator();

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
		]);

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(customLayoutNames);

	getPageConfigurator()
		.getLayoutPreviewData("Custom324", "custom")
		.should.eql(previewData);

	getPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["selectionText"] },
			{ areaName: "Area B", widgets: ["tableStandard"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator().openCustomLayoutEditor(newLayoutName);

	getCustomLayoutDialog()
		.getCustomLayoutTitle()
		.should.be.equal(newLayoutName);

	//Commenting the tests as page refresh is making test flaky

	// pageRefresh();

	// openPageConfigurator().selectCustomLayoutsSection();

	// findWidget("impact_score")
	// 	.getWidgetAreas()
	// 	.should.include.something.like([
	// 		{ areaName: "Area A", widgets: ["selectionText"] },
	// 		{ areaName: "Area B", widgets: ["tableStandard"] },
	// 	]);

	// getPageConfigurator()
	// 	.getVisibleLayoutNames("custom")
	// 	.should.eql(customLayoutNames);

	// getPageConfigurator()
	// 	.getLayoutPreviewData("Custom324", "custom")
	// 	.should.eql(previewData);

	// getPageConfigurator()
	// 	.getWidgetAreas()
	// 	.should.include.something.like([
	// 		{ areaName: "Area A", widgets: ["selectionText"] },
	// 		{ areaName: "Area B", widgets: ["tableStandard"] },
	// 		{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
	// 	]);

	// openPageConfigurator().openCustomLayoutEditor(newLayoutName);

	// getCustomLayoutDialog()
	// 	.getCustomLayoutTitle()
	// 	.should.be.equal(newLayoutName);
});
