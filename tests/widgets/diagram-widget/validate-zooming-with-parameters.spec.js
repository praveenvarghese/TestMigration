/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario("Do a zoom out and check the effect on the parametrized x/y/zoom options.", () => {
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

	// do a mouse scroll down for zoom out
	findWidget("Zoom Diagram").diagramZoomOut(3);

	// validate the center.x, center.y, zoom value
	findWidget("TheValues")
		.getValue("CentreX")
		.should.eql("-48.00");
	findWidget("TheValues")
		.getValue("CentreY")
		.should.eql("179.16");
	findWidget("TheValues")
		.getValue("ZoomLevel")
		.should.eql("7.00");
});
