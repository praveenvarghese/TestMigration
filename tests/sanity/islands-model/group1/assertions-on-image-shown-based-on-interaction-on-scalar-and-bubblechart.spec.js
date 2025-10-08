/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Test asserting image shown, based on the interaction on 'Plane Type Displayed' scalar and 'Aircraft Data' bubblechart",
	() => {
		// We start from Home page.
		loadPage("Main Project/home");

		// Select "Boeing 737" entry on "Plane Type Displayed" scalar
		findWidget("SelectedPlane").setValue("Boeing 737");
		// Assert "Boeing 737" image is shown
		findWidget("PlaneImage")
			.getUrl()
			.should.include(`/resources/@lib/MainProject/images/Boeing737.jpg`);

		// Select "ATR-72" entry on "Plane Type Displayed" scalar
		findWidget("SelectedPlane").setValue("ATR-72");
		// Assert "ATR-72" image is shown
		findWidget("PlaneImage")
			.getUrl()
			.should.include(`/resources/@lib/MainProject/images/ATR72.jpg`);

		// Select "Fokker F-50" entry on "Plane Type Displayed" scalar
		findWidget("SelectedPlane").setValue("Fokker F-50");
		// Assert "Fokker F-50" image is shown
		findWidget("PlaneImage")
			.getUrl()
			.should.include(`/resources/@lib/MainProject/images/Fokker50.jpg`);

		// Select all the plane types from "Aircraft Selection" selection widget
		findWidget("PlaneSelectionBox").selectAll();

		// Click on "Boeing 737: 130 seats" circle in "Aircraft Data" bubblechart
		findWidget("AircraftData")
			.findBubble("Boeing 737: 130 seats")
			.click();
		// Assert "Boeing 737" image is shown
		findWidget("PlaneImage")
			.getUrl()
			.should.include(`/resources/@lib/MainProject/images/Boeing737.jpg`);

		// Click on "Fokker F-50: 60 seats" circle in "Aircraft Data" bubblechart
		findWidget("AircraftData")
			.findBubble("Fokker F-50: 60 seats")
			.click();
		// Assert "Fokker F-50" image is shown
		findWidget("PlaneImage")
			.getUrl()
			.should.include(`/resources/@lib/MainProject/images/Fokker50.jpg`);

		// Click on "ATR-72: 50 seats" circle in "Aircraft Data" bubblechart
		findWidget("AircraftData")
			.findBubble("ATR-72: 50 seats")
			.click();
		// Assert "ATR-72" image is shown
		findWidget("PlaneImage")
			.getUrl()
			.should.include(`/resources/@lib/MainProject/images/ATR72.jpg`);
	}
);
