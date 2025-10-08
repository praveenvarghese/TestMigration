/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @DURATION=medium
 */

scenario("Check for focus support behaviour on Map v3", () => {
	loadPage("Main Project/StepsV3/Two node layers");

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("");

	findWidget("twoNodeSetMap")
		.getPoint("Amsterdam")
		.click();

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Amsterdam");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("");

	findWidget("twoNodeSetMap")
		.getPoint("Lelystad")
		.click();

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Amsterdam");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("Lelystad");

	findWidget("twoNodeSetMap")
		.getPoint("Schiphol")
		.click()
		.click();

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Amsterdam");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("Schiphol");

	//Verify double-click on a node, does not clear the store-focus value that was set.
	findWidget("twoNodeSetMap")
		.getPoint("Haarlem")
		.click()
		.click();

	findWidget("selectedCity")
		.getValue()
		.should.be.equal("Haarlem");

	findWidget("selectedAirport")
		.getValue()
		.should.be.equal("Schiphol");
});
