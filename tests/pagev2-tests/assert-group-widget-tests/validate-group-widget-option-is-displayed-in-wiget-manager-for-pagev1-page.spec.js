/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Test to Verify group widget options is dispalyed for pagev1", () => {
	loadPage("Main Project/home?ignore-grid-layout=true");

	//Validate For custom Layout
	const expected_widgetsTypes = [
		"Select a Widget Type",
		"Bar Chart",
		"Bar Line Chart",
		"Bubble Chart",
		"Button",
		"Download",
		"Gantt Chart",
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
		"Table",
		"Text",
		"Tree Map",
		"Upload",
	];

	openWidgetManager()
		.getAllWidgetTypes()
		.should.eql(expected_widgetsTypes);

	//Validate For standard Layout
	getWidgetManager().closeAddWidgetWizard();
	getPageMenu().navigateToPage("Main Project/StandardLayout");

	openWidgetManager()
		.getAllWidgetTypes()
		.should.eql(expected_widgetsTypes);

	//Validate For custom Layout
	getWidgetManager().closeAddWidgetWizard();
	getPageMenu().navigateToPage("Main Project/CustomLayout");

	openWidgetManager()
		.getAllWidgetTypes()
		.should.eql(expected_widgetsTypes);
});
