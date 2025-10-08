/*!
 * @AIMMS_FILE=models/PageV2/SPStatePagev2/spstate.aimms
 */

scenario("Open side panel and check it stays open when attributes change", () => {
	loadPage("Main Project/Cargo Simulation");

	findWidget("cargo_simulation")
		.getSidepanels()
		.openSidepanelTab("Controls");

	findWidget("ShowSidePanels")
		.getCell(6, 0)
		.getValue()
		.should.be.equal("Active");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;

	findWidget("ShowSidePanels")
		.getCell(6, 0)
		.setValue("Hidden");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.false;

	findWidget("cargo_simulation")
		.getSidepanels()
		.openSidepanelTab("Fleet Selection");

	findWidget("ShowSidePanels")
		.getCell(6, 0)
		.getValue()
		.should.be.equal("Hidden");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;

	findWidget("ShowSidePanels")
		.getCell(6, 0)
		.setValue("Active");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.false;
});
