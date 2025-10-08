/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate clone functionality of custom layout when only name is changed", () => {
	loadPage("Main Project/CustomLayout?_aimms_only_persistence.write=true");

	//Before editing validate widgets in widget areas
	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["LargeDialog_2"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
		]);

	//Validate custom Layouts names displayed
	openPageConfigurator()
		.getLayoutNames("custom")
		.should.eql(["Custom3", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getLayoutPreviewData("CustomLayout1", "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 3fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-c area-a" "area-c area-b" "area-c area-d"',
		]);

	//Navigate to custom layout
	getPageConfigurator().cloneLayout("CustomLayout1", "custom");

	const newLayoutName = "Custom324";

	// const newLayoutName = "Custom324";
	getCustomLayoutDialog().edit({
		layoutName: newLayoutName,
	});

	getCustomLayoutDialog().save();

	//Validate custom Layouts names displayed after editing
	getPageConfigurator()
		.getLayoutNames("custom")
		.should.eql(["Custom3", "Custom324", "CustomLayout1", "New layout Copy", "Add a layout"]);

	// Navigate to another page and validate all the details is same as above
	getPageMenu().navigateToPage("Main Project/home");

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getLayoutNames("custom")
		.should.eql(["Custom3", "Custom324", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getLayoutPreviewData(newLayoutName, "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 3fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-c area-a" "area-c area-b" "area-c area-d"',
		]);

	pageRefresh();

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getLayoutNames("custom")
		.should.eql(["Custom3", "Custom324", "CustomLayout1", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getLayoutPreviewData(newLayoutName, "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 3fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-c area-a" "area-c area-b" "area-c area-d"',
		]);
});
