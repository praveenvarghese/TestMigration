/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"Change the x/y/zoom option values through the model and check the effects on the diagram itself.",
	() => {
		loadPage("Main Project/XYZoomParam");

		findWidget("Zoom Diagram")
			.findNode("Books-1")
			.getNodePosition()
			.should.eql("-288,-144");

		// do both a pan and a zoom
		findWidget("PerformPanAndZoom").click();

		// This should NOT(!) have an effect on the actual coordinates of the node
		findWidget("Zoom Diagram")
			.findNode("Books-1")
			.getNodePosition()
			.should.eql("-288,-144");
	}
);
