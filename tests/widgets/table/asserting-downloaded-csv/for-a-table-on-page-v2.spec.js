/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Table data is downloaded as CSV file. Asserting the downloaded file details.", () => {
	loadPage("Main Project/pagev2");

	// Close the PageManager
	closeAppManager();

	// Click on Table Download-CSV Button, and assert the downloaded file
	findWidget("DailyPassengersPageV2")
		.mouseHover()
		.getWidgetDownloadButton()
		.click()
		.getDownloadedFile()
		.should.include.something.like({
			filename: "DailyPassengersPageV2.csv",
			size: 525,
			contents:
				String.fromCharCode(0xfeff) +
				"Islands,Isla de La Palma,Isla de Tenerife,Isla de Gran Canaria,Isla de Lanzarote,Isla de Fuerteventura,Isla de La Gomera,Isla Del Hierro,total sum\n" +
				"Islands,,,,,,,,\n" +
				"Isla de Lanzarote,80,240,430,,350,70,30,1200\n" +
				"Isla Del Hierro,30,50,40,20,12,75,,227\n" +
				"Isla de La Gomera,98,160,140,80,25,,40,543\n" +
				"Isla de La Palma,,300,260,130,90,100,50,930\n" +
				"Isla de Tenerife,275,,740,200,150,300,63,1728\n" +
				"Isla de Gran Canaria,170,820,,240,190,80,45,1545\n" +
				"Isla de Fuerteventura,60,170,380,310,,55,15,990\n" +
				"total sum,713,1740,1990,980,817,680,243,7163\n",
		});
});
