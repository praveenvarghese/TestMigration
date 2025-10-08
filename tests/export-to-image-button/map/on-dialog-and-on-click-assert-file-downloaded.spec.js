/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For a Map widget on a Dialog, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage(
			"Main Project/StepsV3/2 - Single node layer, single arc layer?Download-Image=true"
		);

		// Click on the button that loads Dialog page with Maps in it.
		findWidget("Opens Dialog").click();

		// Assert a Dialog is open
		// We need this to introduce a slight delay in further test execution
		getDialog().should.exist;

		// Hover the title of the Map widget.
		findWidget("SP_Map2_1").movePointerToWidget(10, 10);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("SP_Map2_1")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "æāṣśēḍcvr̥ṅṭñḥṇṁūīl̥ō !@#$%^&_()_+ -= {}[] __ ;_ '.png",
			});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
