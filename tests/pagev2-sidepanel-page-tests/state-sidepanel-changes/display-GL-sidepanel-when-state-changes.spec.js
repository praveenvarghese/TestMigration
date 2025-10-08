/*!
 * @AIMMS_FILE=models/PageV2/SPStatePagev2/spstate.aimms
 */

scenario("Open side panel and check it stays open when attributes change", () => {
	loadPage("Main Project/Cargo Simulation");

	findWidget("ShowSidePanels")
		.getCell(6, 0)
		.getValue()
		.should.be.equal("Active");

	findWidget("ShowSidePanels")
		.getCell(6, 1)
		.getValue()
		.should.be.equal("Hidden");

	findWidget("ShowSidePanels")
		.getCell(6, 2)
		.getValue()
		.should.be.equal("Active");

	findWidget("ShowSidePanels")
		.getCell(6, 3)
		.getValue()
		.should.be.equal("Active");

	findWidget("cargo_simulation")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Controls", "Fleet Selection", "Details"]);

	findWidget("ShowSidePanels")
		.getCell(6, 0)
		.setValue("aCtiVe");

	findWidget("ShowSidePanels")
		.getCell(6, 1)
		.setValue("hiDdEn");

	findWidget("ShowSidePanels")
		.getCell(6, 2)
		.setValue("aCti?");

	/*
	findWidget("ShowSidePanels")
		.getCell(6, 3)
		.click()
		.setValue("");
*/

	findWidget("EmptySPstate").click();

	findWidget("cargo_simulation")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Controls", "Details"]);

	findWidget("ShowSidePanels")
		.getCell(6, 0)
		.setValue("Active");

	findWidget("ShowSidePanels")
		.getCell(6, 1)
		.setValue("Hidden");

	findWidget("ShowSidePanels")
		.getCell(6, 2)
		.setValue("Active");

	findWidget("ShowSidePanels")
		.getCell(6, 3)
		.setValue("Active");

	findWidget("cargo_simulation")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Controls", "Fleet Selection", "Details"]);
});
