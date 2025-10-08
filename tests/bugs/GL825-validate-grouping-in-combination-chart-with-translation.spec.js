/*!
 * @AIMMS_FILE=models/Bugs/GL825-ContractAllocation/ContractAllocation.aimms
 */

scenario("Check the grouping of identifiers in Column Chart with translation", () => {
	loadPage("Main Project/Results");

	findWidget("cbc_costPerProducer")
		.getNumberOfBars()
		.should.eql(20);
});
