/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Verify group widget options are not displayed for dialog page v2", () => {
	loadPage("Main Project/KPIs/Energy Score");

	//Validate for custom Layout
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

	//Validate for standard Layout
	getWidgetManager().closeAddWidgetWizard();

	openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

	openWidgetManager()
		.getAllWidgetTypes()
		.should.beEqualTo(expected_widgetsTypes);
});
