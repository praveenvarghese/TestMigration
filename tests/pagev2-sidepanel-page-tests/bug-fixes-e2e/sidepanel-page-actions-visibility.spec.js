/*!
 * @AIMMS_FILE=models/PageV2/SidePanelv2/SidePanelv2.aimms
 */

scenario("Page actions visibility for side panel v2", () => {
	loadPage("Main Project/page for dialogs v2");

	findWidget("page_for_dialogs_v2").isSecondaryPageActionDisplayed().should.be.true;

	openAppManager();

	getAppManager().navigateToPage("Main Project/Sprint Reliability");

	findWidget("sprint_reliability")
		.getWidgets()
		.should.be.eql(["selectedTable", "selectedPage"]);

	//Verify that the Primary and Secondary page actions are not visible.
	findWidget("sprint_reliability").isPrimaryActionDisplayed().should.be.false;

	findWidget("sprint_reliability").isSecondaryPageActionDisplayed().should.be.false;

	getAppManager().navigateToPage("Main Project/page for dialogs v2");

	findWidget("page_for_dialogs_v2").isSecondaryPageActionDisplayed().should.be.true;

	getAppManager().navigateToPage("Main Project/small dp v2");

	findWidget("small_dp_v2")
		.getWidgets()
		.should.be.eql(["widget1_v2"]);

	//Verify that the Primary and Secondary page actions are not visible.
	findWidget("small_dp_v2").isPrimaryActionDisplayed().should.be.false;

	findWidget("small_dp_v2").isSecondaryPageActionDisplayed().should.be.false;

	getAppManager().navigateToPage("Main Project/page for dialogs v2");

	findWidget("page_for_dialogs_v2").isSecondaryPageActionDisplayed().should.be.true;
});
