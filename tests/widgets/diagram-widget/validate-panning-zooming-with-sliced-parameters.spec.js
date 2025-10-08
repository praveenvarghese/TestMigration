/*!
 * @AIMMS_FILE=models/SmallDiagramModel/SmallDiagramModel.aimms
 */

scenario(
	"Center x/y and zoom options specified by a sliced parameter. Do some zooming and panning to make sure it works.",
	() => {
		loadPage("Main Project/home");

		// validate the center.x, center.y, zoom value
		findWidget("Diagram Data")
			.getGridValues()
			.should.eql([["791.00"], ["93.00"], ["6.00"]]);

		// do a mouse scroll down for zoom out
		findWidget("Diagram1").diagramZoomOut(3);

		findWidget("Diagram Data")
			.getGridValues()
			.should.eql([["791.00"], ["93.00"], ["3.00"]]);

		// Do a pan
		findWidget("Diagram1").panDiagram(250, 250);

		findWidget("Diagram Data")
			.getGridValues()
			.should.eql([["1,024.64"], ["279.92"], ["3.00"]]);
	}
);
