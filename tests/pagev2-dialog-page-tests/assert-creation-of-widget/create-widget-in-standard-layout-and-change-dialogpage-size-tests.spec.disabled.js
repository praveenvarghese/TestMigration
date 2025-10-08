/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Add a widget in custom layout dialog page without the flag", () => {
	loadPage("Main Project/standardDialogPage?_aimms_only_persistence.write=true");

	findWidget("standarddialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Medium");

	createWidget("scalar", ["Flag"], "SelectFlag");

	getPageConfigurator()
		.dragWidget("SelectFlag")
		.toArea("Area A");

	findWidget("standarddialogpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SelectFlag"] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);

	findWidget("standarddialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Medium");

	findWidget("standarddialogpage_1").selectSizeOfDialogPage("large");

	createWidget("scalar", ["Flag"], "SelectFlag1");

	getPageConfigurator()
		.dragWidget("SelectFlag1")
		.toArea("Area B");

	findWidget("standarddialogpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SelectFlag"] },
			{ areaName: "Area B", widgets: ["SelectFlag1"] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);

	findWidget("standarddialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Large");

	findWidget("standarddialogpage_1").selectSizeOfDialogPage("small");

	createWidget("scalar", ["Flag"], "SelectFlag2");

	getPageConfigurator()
		.dragWidget("SelectFlag2")
		.toArea("Area C");

	findWidget("standarddialogpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SelectFlag"] },
			{ areaName: "Area B", widgets: ["SelectFlag1"] },
			{ areaName: "Area C", widgets: ["SelectFlag2"] },
			{ areaName: "Area D", widgets: [] },
		]);

	findWidget("standarddialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	getPageMenu().navigateToPage("Main Project/checkDialogPageV2");

	findWidget("OpenStandardLayoutDIalogPage").click();

	findWidget("standarddialogpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["SelectFlag"] },
			{ areaName: "Area B", widgets: ["SelectFlag1"] },
			{ areaName: "Area C", widgets: ["SelectFlag2"] },
			{ areaName: "Area D", widgets: [] },
		]);

	findWidget("standarddialogpage_1").clickDialogPageButton("ok");

	openAppManager().navigateToPage("Main Project/standardDialogPage");

	openWidgetManager().deleteWidget("SelectFlag");

	openWidgetManager().deleteWidget("SelectFlag1");

	openWidgetManager().deleteWidget("SelectFlag2");

	closeWidgetManager();

	findWidget("standarddialogpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);

	findWidget("standarddialogpage_1")
		.getSelectedDialogPageSize()
		.should.eql("Small");

	getPageMenu().navigateToPage("Main Project/checkDialogPageV2");

	findWidget("OpenStandardLayoutDIalogPage").click();

	findWidget("standarddialogpage_1")
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: [] },
			{ areaName: "Area B", widgets: [] },
			{ areaName: "Area C", widgets: [] },
			{ areaName: "Area D", widgets: [] },
		]);
});
