/*!
 * @AIMMS_FILE=models/PageV2/SPStatePagev2/spstate.aimms
 */

scenario("Open side panel and check it stays open when attributes change", () => {
	loadPage("Main Project/Cargo Simulation");

	findWidget("cargo_simulation")
		.getSidepanels()
		.openSidepanelTab("Controls");

	findWidget("ShowSidePanels")
		.getCell(5, 0)
		.getValue()
		.should.be.equal("blue");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;

	findWidget("ShowSidePanels")
		.getCell(5, 0)
		.setValue("black");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;

	findWidget("ShowSidePanels")
		.getCell(5, 0)
		.setValue("blue");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;
});
