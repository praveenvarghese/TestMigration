/*!
 * @AIMMS_FILE=models/Bugs/GL812-TransNetT2toT1/TransNet.aimms
 */

scenario("Migrate Table V2 -> V1 and validate change type", () => {
	loadPage("Main Project/Home?table-v2=true&_aimms_only_persistence.write=true");

	findWidget("SupplyData")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("67.82 ton");

	loadPage("Main Project/Home?table-v2=false&_aimms_only_persistence.write=true");

	findWidget("SupplyData")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("67.82 ton");

	findWidget("SupplyData")
		.openChangeWidgetTypeOptionEditor()
		.changeWidgetTypeTo("barchart");

	waitUntilDataLoadedOnWidget("SupplyData", 5000);

	findWidget("SupplyData")
		.getNumberOfBars()
		.should.be.equal(3);
});
