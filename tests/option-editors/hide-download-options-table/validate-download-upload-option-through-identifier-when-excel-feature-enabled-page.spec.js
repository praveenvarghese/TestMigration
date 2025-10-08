/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */
scenario(
	"Test to verify download csv button and upload/download excel button are displayed when both download flag and excel experiemental feature flag are disabled",
	() => {
		loadPage("Main Project/home");

		findWidget("PepperData")
			.mouseHover()
			.getExcelDownloadButton().should.exist;

		findWidget("PepperData")
			.mouseHover()
			.getWidgetDownloadButton().should.exist;

		findWidget("PepperData")
			.mouseHover()
			.getExcelUploadButton().should.exist;

		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("Filter From Scratch");

		findWidget("filterFromScratch")
			.mouseHover()
			.getExcelDownloadButton().should.exist;

		findWidget("filterFromScratch")
			.mouseHover()
			.getWidgetDownloadButton().should.exist;

		findWidget("filterFromScratch")
			.mouseHover()
			.getExcelUploadButton().should.exist;

		findWidget("home")
			.getSidepanels()
			.closeSidepanelTab();

		findWidget("UnitSwitch").setValue(false);

		findWidget("PepperData")
			.mouseHover()
			.getExcelDownloadButton().should.not.exist;

		findWidget("PepperData")
			.mouseHover()
			.getWidgetDownloadButton().should.not.exist;

		findWidget("PepperData")
			.mouseHover()
			.getExcelUploadButton().should.not.exist;

		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("Filter From Scratch");

		findWidget("filterFromScratch")
			.mouseHover()
			.getExcelDownloadButton().should.not.exist;

		findWidget("filterFromScratch")
			.mouseHover()
			.getWidgetDownloadButton().should.not.exist;

		findWidget("filterFromScratch")
			.mouseHover()
			.getExcelUploadButton().should.not.exist;
	}
);
