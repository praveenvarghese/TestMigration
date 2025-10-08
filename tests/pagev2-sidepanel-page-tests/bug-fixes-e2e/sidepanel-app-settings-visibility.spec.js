/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 */

scenario(
	"Check whether the app settings icon is present when have the side panel page open in design mode",
	() => {
		loadPage("Main Project/Tenerife Side Panel");

		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.isDisplayedInViewport().should.be.true;
	}
);
