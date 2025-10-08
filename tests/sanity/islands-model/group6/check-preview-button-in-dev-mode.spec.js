/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 */

scenario("Check that the Preview button is present on page header in dev mode", () => {
	loadPage("Main Project/home");

	getPageHeader()
		.getButtons()
		.isPreviewButtonPresent()
		.should.eql(true);
});
