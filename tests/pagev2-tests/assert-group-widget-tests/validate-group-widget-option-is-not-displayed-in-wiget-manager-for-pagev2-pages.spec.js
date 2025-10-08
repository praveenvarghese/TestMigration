/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Verify group widget options are not displayed for page v2", () => {
	loadPage("Main Project/CustomLayout");

	//Validate for custom layout
	const expected_widgetsTypes = [
		"Select a Widget Type",
		"Bar Chart",
		"Bar Line Chart",
		"Bubble Chart",
		"Button",
		"Combination Chart",
		"Diagram",
		"Download",
		"Gantt Chart",
		"Gantt Chart V2",
		"Iframe",
		"Image",
		"Label",
		"Legend",
		"Line Chart",
		"List",
		"Map",
		"Multi-Select",
		"Pie Chart",
		"Scalar",
		"Selection Box",
		"Slider",
		"Tabbed Pages",
		"Table",
		"Text",
		"Tree Map",
		"Upload",
	];

	openWidgetManager()
		.getAllWidgetTypes()
		.should.beEqualTo(expected_widgetsTypes);

	// getWidgetManager().closeAddWidgetWizard();

	// //Validate for standard layout
	// getPageMenu().navigateToPage("Main Project/StandardLayout");

	// openWidgetManager()
	// 	.getAllWidgetTypes()
	// 	.should.beEqualTo(expected_widgetsTypes);

	// getWidgetManager().closeAddWidgetWizard();

	// //Validate for standard layout	- no bindings in webui.json
	// getPageMenu().navigateToPage("Main Project/emptyGridPage");

	// openWidgetManager()
	// 	.getAllWidgetTypes()
	// 	.should.beEqualTo(expected_widgetsTypes);
});
