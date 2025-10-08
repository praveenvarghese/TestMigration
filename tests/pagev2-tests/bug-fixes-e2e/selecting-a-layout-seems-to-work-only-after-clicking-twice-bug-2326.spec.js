/*!
 * @AIMMS_FILE=models/PageV2/Workflow Panel Demo/Workflow Panel Demo.aimms
 */

scenario("Selecting a layout seems to work only after clicking twice", () => {
	loadPage("Main Project/home");

	//Validate single click in Standard layout
	openPageConfigurator().selectLayout("Layout 1");

	// Verify the widgets in the widget area
	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["Test_filter"] },
			{ areaName: "Area B", widgets: ["Transport", "StoreFocus"] },
			{
				areaName: "Unassigned widgets",
				widgets: [
					"Supply",
					"Opensidepanel",
					"Demand",
					"alldata",
					"Unit Transport Cost",
					"Transport Table",
				],
			},
		]);

	//Validate single click in Custom layout

	getPageMenu().navigateToPage("Main Project/Workflows");

	openPageConfigurator().selectLayout("StandardLayoutB2 Copy", "true");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Main", widgets: ["No widgets in this area"] },
			{ areaName: "Aside A", widgets: ["No widgets in this area"] },
			{ areaName: "Aside B", widgets: ["No widgets in this area"] },
			{ areaName: "Aside C", widgets: ["No widgets in this area"] },
			{ areaName: "Aside D", widgets: ["No widgets in this area"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["Transport Cost", "Demand and Supply", "Location Table"],
			},
		]);
});
