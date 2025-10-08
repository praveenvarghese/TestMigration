/*!
 * @AIMMS_FILE=models/MapV2Model/MapV2Model.aimms
 */

scenario("Verifying empty widget is displayed inplace of Mapv1 widget", () => {
	loadPage("Main Project/home");

	findWidget("MapV1")
		.getMapV1EmptyWidgetMessage()
		.should.be.equal(
			"This version of the map widget is deprecated. Please upgrade to the current version. For more information, please refer to the How-To. For all supported widgets please refer to the AIMMS Manual."
		);

	findWidget("MapV1").isWidgetOptionsDisplayed().should.be.false;
});
