/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Assert all available EPs are related to the set in the Identifier list .", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_1")
		.openIndexOptionEditor()
		.unCollapseContents("Centers");

	findWidget("DemandColumnChart_1")
		.openIndexOptionEditor()
		.clickToGetIdentifierSelectionDialogWithIndex("0", "storefocus")
		.clearSearch()
		.getIdentifierList()
		.should.eql(["ep_Center", "SelectedLocation"]);
});
