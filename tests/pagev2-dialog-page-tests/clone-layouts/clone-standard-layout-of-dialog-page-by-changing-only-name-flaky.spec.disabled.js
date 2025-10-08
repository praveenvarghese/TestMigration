/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate clone functionality of standard layout when only name is changed", () => {
	loadPage("Main Project/StandardDialogPageWithWidgets?_aimms_only_persistence.write=true");

	//Before editing validate widgets in widget areas
	findWidget("standarddialogpagewithwidgets_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["sidepanelFlag"] },
			{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
			{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
			{ areaName: "Area D", widgets: ["downloadWidget"] },
		]);

	//Validate custom Layouts names displayed
	openPageConfigurator()
		.getVisibleLayoutNames()
		.should.eql(["Layout 1", "Layout 2", "Layout 7", "Layout 8"]);

	getPageConfigurator()
		.getLayoutPreviewData("Layout 7", "standard")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c" "area-d area-d area-d"',
		]);

	//Navigate to custom layout
	getPageConfigurator().cloneLayout("Layout 7", "standard");

	const newLayoutName = "Custom324";

	// const newLayoutName = "Custom324";
	getCustomLayoutDialog().edit({
		layoutName: newLayoutName,
	});

	getCustomLayoutDialog().save();

	//Validate custom Layouts names displayed after editing
	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "Custom324", "New layout Copy", "Add a layout"]);

	closePageConfigurator();

	// Navigate to another page and validate all the details is same as above
	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "Custom324", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getLayoutPreviewData(newLayoutName, "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c" "area-d area-d area-d"',
		]);

	pageRefresh();

	openPageConfigurator().selectCustomLayoutsSection();

	getPageConfigurator()
		.getVisibleLayoutNames("custom")
		.should.eql(["Custom3", "Custom324", "New layout Copy", "Add a layout"]);

	getPageConfigurator()
		.getLayoutPreviewData(newLayoutName, "custom")
		.should.eql([
			"grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr)",
			" grid-template-rows: minmax(0px, 1fr) minmax(0px, 1fr)",
			' grid-template-areas: "area-a area-b area-c" "area-d area-d area-d"',
		]);
});
