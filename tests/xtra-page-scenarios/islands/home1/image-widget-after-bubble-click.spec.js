/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"When clicking on 'Fokker F-50' and 'Boeing 737' in the 'Aircraft Data' bubble chart the 'Plane Image' widget should show an image of a 'Fokker F-50' or 'Boeing 737' accordingly ;)",
	() => {
		loadPage("Main Project/home");

		findWidget("PlaneSelectionBox").selectAll();

		findWidget("AircraftData")
			.findBubble("Fokker F-50")
			.click();

		findWidget("PlaneImage")
			.getUrl()
			.should.include("Fokker50");

		findWidget("AircraftData")
			.findBubble("Boeing 737")
			.click();

		findWidget("PlaneImage")
			.getUrl()
			.should.include("Boeing737");
	}
);
