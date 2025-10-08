/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_GridLayout/ModelFromScratch2.aimms
 */

scenario("Add a widget on a fresh new WebUI on PageV2", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("Layout 6");

	// Create a bubble chart and check whether it exists and has the expected number of bubbles
	createWidget("bubblechart", ["MinimumFL", "MaximumFL", "Megapixels"], "Camera Bubbles");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["No widgets in this area"] },
			{ areaName: "Area B", widgets: ["No widgets in this area"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Area E", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["Camera Bubbles"] },
		]);
});
