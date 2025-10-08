/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verifying node icon with store focus functionality", () => {
	loadPage("Main Project/StepsV3/Two node layers");

	findWidget("twoNodeSetMap")
		.getIcon("Breda")
		.click();

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Breda");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("");

	findWidget("twoNodeSetMap")
		.getIcon("Schiphol")
		.click();

	findWidget("twoNodeSetMap")
		.getIcon("Teuge")
		.click();

	findWidget("twoNodeSetMap")
		.getIcon("Maastricht")
		.click()
		.click();

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Maastricht");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("Teuge");
});
