/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Test verifying Bubble chart 3-axis labels availability and their text shown.", () => {
	loadPage("Main Project/home");

	// After page load, verify there are no labels loaded on Bubble chart

	findWidget("AircraftData").getXAxisLabel().should.not.exist;
	findWidget("AircraftData").getYAxisLabel().should.not.exist;
	findWidget("AircraftData").getSizeAxisLabel().should.not.exist;

	// Load data onto bubble chart
	findWidget("PlaneSelectionBox").selectAll();

	// Verify the 3-axis labels text

	findWidget("AircraftData")
		.getXAxisLabelText()
		.should.be.equal("Cost per Mile");
	findWidget("AircraftData")
		.getYAxisLabelText()
		.should.be.equal("Cost per Flight");
	findWidget("AircraftData")
		.getSizeAxisLabelText()
		.should.be.equal("Size: Number of Seats");

	findWidget("AircraftData").goInFullScreenMode();

	// With the bubblechart in full-screen mode, verify the 3-axis labels text

	findWidget("AircraftData")
		.getXAxisLabelText()
		.should.be.equal("Cost per Mile");
	findWidget("AircraftData")
		.getYAxisLabelText()
		.should.be.equal("Cost per Flight");
	findWidget("AircraftData")
		.getSizeAxisLabelText()
		.should.be.equal("Size: Number of Seats");
});
