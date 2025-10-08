/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */
scenario(
	"Assert that the coordinates of a node are synched between the diagram and the model after dragging a node.",
	() => {
		loadPage("Main Project/home");

		// Verify that the node "Piet" is at the expected location upon startup
		findWidget("MyDiagram")
			.findNode("Piet")
			.getNodePosition()
			.should.eql("-176,-208");

		// And that this location is indeed present in the model
		findWidget("Coordinates_1")
			.getCell(5, 0)
			.getValue()
			.should.eql("-176.00");
		findWidget("Coordinates_1")
			.getCell(5, 1)
			.getValue()
			.should.eql("-208.00");

		// Drag it about
		findWidget("MyDiagram")
			.findNode("Piet")
			.dragNdropNode(-100, -50);

		// Check that the new coordinates of the nodes are as expected
		findWidget("MyDiagram")
			.findNode("Piet")
			.getNodePosition()
			.should.eql("-240,-240");

		// And that this location was indeed updated in the model
		findWidget("Coordinates_1")
			.getCell(5, 0)
			.getValue()
			.should.eql("-240.00");
		findWidget("Coordinates_1")
			.getCell(5, 1)
			.getValue()
			.should.eql("-240.00");
	}
);
