/*!
 * @AIMMS_FILE=models/PageV2/SPStatePagev2/spstate.aimms
 */

scenario("Open side panel and check it stays open when attributes change", () => {
	loadPage("Main Project/Cargo Simulation");

	findWidget("ShowSidePanels")
		.getCell(0, 3)
		.setValue(false);

	findWidget("cargo_simulation")
		.getSidepanels()
		.openSidepanelTab("Controls");

	findWidget("ShowSidePanels")
		.getCell(2, 0)
		.getValue()
		.should.be.equal("simulationcontrols_1");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.true;

	findWidget("ShowSidePanels")
		.getCell(2, 0)
		.setValue("view_details");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.false;

	findWidget("cargo_simulation")
		.getSidepanels()
		.openSidepanelTab("Controls");

	findWidget("ShowSidePanels")
		.getCell(2, 0)
		.setValue("simulationcontrols_1");

	findWidget("cargo_simulation")
		.getSidepanels()
		.isSidepanelTabOpened().should.be.false;

	findWidget("ShowSidePanels")
		.getCell(0, 3)
		.setValue(true);

	findWidget("ShowSidePanels")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("view_details");
});
