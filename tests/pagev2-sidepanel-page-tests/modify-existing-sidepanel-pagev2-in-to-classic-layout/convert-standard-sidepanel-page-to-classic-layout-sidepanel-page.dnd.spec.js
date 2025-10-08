/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 * @HARDWARE_SHARE=medium
 */

scenario("Convert standard layout sidepanel page v2 to classic layout", () => {
	loadPage("Main Project/KPIs/Impact Score?_aimms_only_persistence.write=true");

	openPageConfigurator().selectLayout("Layout: classic");

	findWidget("impact_score")
		.getVisibleWidgets()
		.should.eql(["selectionText", "tableStandard"]);

	closePageConfigurator();

	// Navigate to another page and validate all the details is same as above
	getPageMenu().navigateToPage("Main Project/home");

	openPageConfigurator().selectAppSection();

	openAppManager().navigateToPage("Main Project/KPIs/Impact Score");

	findWidget("impact_score")
		.getVisibleWidgets()
		.should.eql(["selectionText", "tableStandard"]);
});
