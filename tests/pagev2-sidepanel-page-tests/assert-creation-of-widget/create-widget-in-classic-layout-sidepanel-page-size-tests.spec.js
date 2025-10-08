/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Add a widget in classic layout Sidepanel page", () => {
	loadPage("Main Project/KPIs/EmptyGLSidepanelClassicPage?_aimms_only_persistence.write=true");

	createWidget("scalar", ["Flag"], "SelectFlag");

	findWidget("emptyglsidepanelclassicpage_1")
		.getVisibleWidgets()
		.should.eql(["SelectFlag"]);

	getPageMenu().navigateToPage("Main Project/home/Load Dataset");

	findWidget("load_dataset")
		.getSidepanels()
		.openSidepanelTab("Classic Empty");

	findWidget("emptyglsidepanelclassicpage_1")
		.getVisibleWidgets()
		.should.eql(["SelectFlag"]);

	openAppManager().navigateToPage("Main Project/KPIs/EmptyGLSidepanelClassicPage");

	openWidgetManager().deleteWidget("SelectFlag");

	closeWidgetManager();

	findWidget("emptyglsidepanelclassicpage_1")
		.getVisibleWidgets()
		.should.eql([]);

	getPageMenu().navigateToPage("Main Project/home/Load Dataset");

	findWidget("load_dataset")
		.getSidepanels()
		.openSidepanelTab("Classic Empty");

	findWidget("emptyglsidepanelclassicpage_1")
		.getVisibleWidgets()
		.should.eql([]);
});
