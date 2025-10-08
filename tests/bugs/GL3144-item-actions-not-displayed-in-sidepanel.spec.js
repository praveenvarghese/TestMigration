/*!
 * @AIMMS_FILE=models/Bugs/GL3144-MKG_LatestModel/MKG_LatestModel.aimms
 */

scenario("Verify item actions are displayed in sidepanel page", () => {
	loadPage("Main Project/Side Panels Configuration");

	waitForBackgroundActionToComplete();

	findWidget("side_panels_configuration")
		.getSidepanels()
		.openSidepanelTab("GLSP");

	findWidget("SP_BLChart_1")
		.findBar("Madhu K,DevOn_Exp")
		.rightClick(0, 0);

	findWidget("SP_BLChart_1")
		.getItemActions()
		.isItemActionDisplayed().should.be.true;

	findWidget("side_panels_configuration")
		.getPrimaryPageAction()
		.click();

	findWidget("SP_BLChart_1")
		.findBar("Madhu K,DevOn_Exp")
		.rightClick(0, 0);

	findWidget("SP_BLChart_1")
		.getItemActions()
		.isItemActionDisplayed().should.be.true;
});
