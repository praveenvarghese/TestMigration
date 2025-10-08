/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Post table data is updated, its data is downloaded as CSV file. Asserting the downloaded file details.",
	() => {
		loadPage("Main Project/home");

		// Close the PageManager
		closeAppManager();

		// Select few entries on MultiSelect, such that the data on table is updated.
		findWidget("PlaneSelectionBox").select(["ATR-72", "Fokker F-50"]);

		// Click on Table Download-CSV Button, and assert the downloaded file
		findWidget("Plane Data")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Plane Data.csv",
				size: 120,
				contents:
					String.fromCharCode(0xfeff) +
					"Identifier,#Seats,Cost/Mile,Cost/Flight,Max. Flights\n" +
					"SelectedPlanes,,,,\nATR-72,50,20,600,50\nFokker F-50,60,28,670,20\n",
			});

		// Open 'Passengers Data' Sidepanel
		findWidget("home_1")
			.getSidepanels()
			.openSidepanelTab("Passengers Data");

		// Click on Table Download-CSV Button, and assert the downloaded file
		findWidget("SP_PlaneIsSelected")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "SP_PlaneIsSelected.csv",
				size: 76,
				contents:
					String.fromCharCode(0xfeff) +
					"Planes,Boeing 737,ATR-72,Fokker F-50\n" +
					"Identifier,,,\nPlaneIsSelected,0,1,1\n",
			});
	}
);
