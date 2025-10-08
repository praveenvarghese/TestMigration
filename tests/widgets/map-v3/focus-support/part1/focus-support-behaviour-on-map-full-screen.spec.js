/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Check for focus support behaviour on Map, while juggling between normal and full screen.",
	() => {
		loadPage("Main Project/StepsV3/Two node layers");

		findWidget("twoNodeSetMap").goInFullScreenMode();

		findWidget("twoNodeSetMap").isFullScreen().should.be.true;

		findWidget("twoNodeSetMap")
			.getPoint("Breda")
			.click();

		findWidget("twoNodeSetMap").exitFullScreenMode();

		findWidget("twoNodeSetMap").isFullScreen().should.be.false;

		findWidget("selectedCity")
			.getValue()
			.should.be.equal("Breda");

		findWidget("selectedAirport")
			.getValue()
			.should.be.equal("");

		findWidget("twoNodeSetMap")
			.getPoint("Schiphol")
			.click();

		findWidget("twoNodeSetMap").goInFullScreenMode();

		findWidget("twoNodeSetMap").isFullScreen().should.be.true;

		findWidget("twoNodeSetMap")
			.getPoint("Teuge")
			.click();

		findWidget("twoNodeSetMap")
			.getPoint("Maastricht")
			.click()
			.click();

		findWidget("twoNodeSetMap").exitFullScreenMode();

		findWidget("twoNodeSetMap").isFullScreen().should.be.false;

		findWidget("selectedCity")
			.getValue()
			.should.be.equal("Maastricht");

		findWidget("selectedAirport")
			.getValue()
			.should.be.equal("Teuge");
	}
);
