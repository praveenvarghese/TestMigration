/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"When clicking on 'Select All' in the 'Plane Selection' widget the 'Aircraft Data' bubble chart should contain 3 bubbles",
	() => {
		loadPage("Main Project/home");

		findWidget("PlaneSelectionBox").selectAll();

		findWidget("AircraftData")
			.findBubbles()
			.should.have.numberOfItems(3);
	}
);
