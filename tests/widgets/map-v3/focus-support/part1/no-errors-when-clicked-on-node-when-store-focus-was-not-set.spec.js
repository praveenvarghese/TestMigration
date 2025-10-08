/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Verify the behaviour of click on nodes, when store-focus was not set. No errors/ warnings are reported.",
	() => {
		loadPage("Main Project/MapV3 Page/zoomTests");

		findWidget("zoomMapTests")
			.getPoint("Leeuwarden")
			.click();

		getLogMessage()
			.getCount()
			.should.be.equal(0);
	}
);
