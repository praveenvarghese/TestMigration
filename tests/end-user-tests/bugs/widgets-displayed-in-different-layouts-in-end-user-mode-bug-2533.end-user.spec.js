/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Validate widgets displayed in different layout doesnt change when on PRO", () => {
	loadPage("Main Project/CustomLayout");

	findWidget("customlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["LargeDialog_2"] },
			{ areaName: "Area A", widgets: ["SmallDIalog_2"] },
			{ areaName: "Area B", widgets: ["MediumDIalog_2"] },
			{ areaName: "Area D", widgets: ["Flag_4"] },
		]);

	getPageMenu().navigateToPage("Main Project/StandardLayout");

	findWidget("standardlayout_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SmallDialog_1"] },
			{ areaName: "Area B", widgets: ["MediumDialog_1"] },
			{ areaName: "Area C", widgets: ["LargeDialog_1"] },
			{ areaName: "Area D", widgets: ["Flag_3"] },
		]);
});
