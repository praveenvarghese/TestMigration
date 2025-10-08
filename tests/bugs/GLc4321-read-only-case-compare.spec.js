/*!
 * @AIMMS_FILE=models/Bugs/GLc4321-ReadOnlyCaseCompare/CaseCompare.aimms
 * @TEST_TYPE=functional
 */

scenario("Check data stays read-only after case comparison", () => {
	loadPage("Main Project/home");

	openDataManager().setActiveCase("Case-1");

	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("Case-1");

	findWidget("CustomerDemand")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("5.00");

	findWidget("CustomerDemand")
		.getCell(0, 1)
		.clearValue();

	findWidget("CustomerDemand")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("5.00");

	openDataManager()
		.getCase("Case-2")
		.compare();

	findWidget("CustomerDemand")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("5.00");

	findWidget("CustomerDemand")
		.getCell(0, 1)
		.clearValue();

	findWidget("CustomerDemand")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("5.00");
});
