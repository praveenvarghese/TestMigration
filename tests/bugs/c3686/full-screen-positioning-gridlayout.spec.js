/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Check full screen positioning of widget on Classic Page", () => {
	loadPage("Main Project/Book Corner");

	closeAppManager();
	// with closed sidebar
	findWidget("Book Bars").goInFullScreenMode();
	findWidget("Book Bars").isFullScreen().should.be.true;

	// clean up widget state
	findWidget("Book Bars").exitFullScreenMode();

	openAppManager();
	// with opened sidebar
	findWidget("Book Bars").goInFullScreenMode();
	findWidget("Book Bars").isFullScreen().should.be.true;
});
