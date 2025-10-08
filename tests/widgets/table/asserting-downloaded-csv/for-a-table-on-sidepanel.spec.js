/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a SidePanel, table data is downloaded as CSV file. Asserting the downloaded file details.",
	() => {
		loadPage("Main Project/home");

		// Close the PageManager
		closeAppManager();

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
					"Identifier,,,\n" +
					"PlaneIsSelected,0,0,0\n",
			});

		// Click on Table Download-CSV Button, and assert the downloaded file
		findWidget("SP_DailyPassengers")
			.mouseHover()
			.getWidgetDownloadButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "SP_DailyPassengers.csv",
				size: 618,
				contents:
					String.fromCharCode(0xfeff) +
					",Islands,Isla de La Palma,Isla de Tenerife,Isla de Gran Canaria,Isla de Lanzarote,Isla de Fuerteventura,Isla de La Gomera,Isla Del Hierro\n" +
					"Identifier,Islands,,,,,,,\n" +
					"DailyNumberOfPassengers,Isla de La Palma,,300,260,130,90,100,50\n" +
					"DailyNumberOfPassengers,Isla de Tenerife,275,,740,200,150,300,63\n" +
					"DailyNumberOfPassengers,Isla de Gran Canaria,170,820,,240,190,80,45\n" +
					"DailyNumberOfPassengers,Isla de Lanzarote,80,240,430,,350,70,30\n" +
					"DailyNumberOfPassengers,Isla de Fuerteventura,60,170,380,310,,55,15\n" +
					"DailyNumberOfPassengers,Isla de La Gomera,98,160,140,80,25,,40\n" +
					"DailyNumberOfPassengers,Isla Del Hierro,30,50,40,20,12,75,\n",
			});
	}
);
