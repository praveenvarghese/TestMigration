/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario("Do a panning action and check the effect on the parametrized x/y/zoom options.", () => {
	loadPage("Main Project/XYZoomParam");

	// validate the center.x, center.y, zoom value
	findWidget("TheValues")
		.getValue("CentreX")
		.should.eql("-48.00");
	findWidget("TheValues")
		.getValue("CentreY")
		.should.eql("179.16");
	findWidget("TheValues")
		.getValue("ZoomLevel")
		.should.eql("10.00");

	findWidget("Zoom Diagram").panDiagram(250, 250);

	findWidget("TheValues")
		.getValue("CentreX")
		.should.eql("13.98");
	findWidget("TheValues")
		.getValue("CentreY")
		.should.eql("228.75");
	findWidget("TheValues")
		.getValue("ZoomLevel")
		.should.eql("10.00");
});
