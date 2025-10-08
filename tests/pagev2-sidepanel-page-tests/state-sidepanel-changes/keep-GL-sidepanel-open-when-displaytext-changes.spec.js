/*!
 * @AIMMS_FILE=models/PageV2/SPStatePagev2/spstate.aimms
 */

scenario("Open side panel and check it stays open when attributes change", () => {
	loadPage("Main Project/Cargo Simulation");

	findWidget("cargo_simulation")
		.getSidepanels()
		.openSidepanelTab("Controls");

	findWidget("ShowSidePanels")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("Controls");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;

	findWidget("ShowSidePanels")
		.getCell(1, 0)
		.setValue("Control");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;

	findWidget("ShowSidePanels")
		.getCell(1, 0)
		.setValue("Controls");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;
});
