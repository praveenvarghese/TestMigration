/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */
scenario("Assert that cycling between overlapping arcs works as expected.", () => {
	loadPage("Main Project/Overlapping Arcs");

	const baseArc = () => findWidget("Overlap").findArc("Airports-1", "Airports-3");
	// Select an arc which has overlapping arcs
	baseArc().select(); // This can select any of the overlapping arcs. In this case: to Airports-5 because it is the topmost one in the stack, due to the model for this test.

	// Verify that the 'use ALT' message pops up
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain(
			"There are overlapping Arcs. Use Click+Alt key combination to toggle between the overlapping arcs."
		);

	// Now select the arc with the ALT pressed down
	baseArc().clickWithALTPressed();

	findWidget("Selected Airports")
		.getValue("AirportFrom")
		.should.be.eql("Airports-1");

	findWidget("Selected Airports")
		.getValue("AirportTo")
		.should.be.eql("Airports-3");

	// // And cycle to the next arc
	baseArc().clickWithALTPressed();

	findWidget("Selected Airports")
		.getValue("AirportFrom")
		.should.be.eql("Airports-1");

	findWidget("Selected Airports")
		.getValue("AirportTo")
		.should.be.eql("Airports-4");

	// // And cycle to the next arc
	baseArc().clickWithALTPressed();

	findWidget("Selected Airports")
		.getValue("AirportFrom")
		.should.be.eql("Airports-1");

	findWidget("Selected Airports")
		.getValue("AirportTo")
		.should.be.eql("Airports-5");

	// // And cycle back to the first arc
	baseArc().clickWithALTPressed();

	findWidget("Selected Airports")
		.getValue("AirportFrom")
		.should.be.eql("Airports-1");

	findWidget("Selected Airports")
		.getValue("AirportTo")
		.should.be.eql("Airports-3");
});
