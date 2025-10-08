/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a Dialog, table data is downloaded as CSV file. Asserting the downloaded file details.",
	() => {
		loadPage("Main Project/Switch Page");

		// Close the PageManager
		closeAppManager();

		// Unfold the Page Actions
		findWidget("switch_page")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Click on the action that opens a dialog page
		findWidget("switch_page")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		// Click on Table Download-CSV Button, and assert the downloaded file
		findWidget("DP_PlaneCharacteristics")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "DP_PlaneCharacteristics.csv",
				size: 136,
				contents:
					String.fromCharCode(0xfeff) +
					"Planes,Boeing 737,ATR-72,Fokker F-50\n" +
					"Identifier,,,\n" +
					"#Seats,130,50,60\n" +
					"Cost/Mile,65,20,28\n" +
					"Cost/Flight,1200,600,670\n" +
					"Max. Flights,7,50,20\n",
			});

		// Click on Table Download-CSV Button, and assert the downloaded file
		findWidget("DP_PlaneIsSelected")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "DP_PlaneIsSelected.csv",
				size: 76,
				contents:
					String.fromCharCode(0xfeff) +
					"Planes,Boeing 737,ATR-72,Fokker F-50\n" +
					"Identifier,,,\n" +
					"PlaneIsSelected,0,0,0\n",
			});

		// Close the Dialog
		findWidget("planes_characteristics").clickDialogPageButton("ok");
	}
);
