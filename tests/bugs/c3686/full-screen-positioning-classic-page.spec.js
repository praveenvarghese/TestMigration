/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Check full screen positioning of widget on Classic Page", () => {
	loadPage("Main Project/home");

	closeAppManager();
	// with closed sidebar
	findWidget("BOE").goInFullScreenMode();
	findWidget("BOE").isFullScreen().should.be.true;

	// clean up widget state
	findWidget("BOE").exitFullScreenMode();

	openAppManager();
	// with opened sidebar
	findWidget("BOE").goInFullScreenMode();
	findWidget("BOE").isFullScreen().should.be.true;
});
