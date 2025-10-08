/*!
 * @AIMMS_FILE=models/PageV2/AppManager/DialogPagev2.aimms
 */

scenario("Post deleting from a dialog page ", () => {
	loadPage("Main Project/Custom Grid Layout Dialog");

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["widget1_v2 (1) (1) (2)"] },
			{ areaName: "Area A", widgets: ["table_Test_v2 (1) (1) (2)"] },
			{ areaName: "Area B", widgets: ["widget1_1_v2 (1) (1) (2)"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator()
		.getWidgetFlyoutMenu("widget1_v2_1_1_2")
		.clickOnDelete()
		.actionYes()
		.click();

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area A", widgets: ["table_Test_v2 (1) (1) (2)"] },
			{ areaName: "Area B", widgets: ["widget1_1_v2 (1) (1) (2)"] },
			{ areaName: "Area D", widgets: ["No widgets in this area"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);
});
