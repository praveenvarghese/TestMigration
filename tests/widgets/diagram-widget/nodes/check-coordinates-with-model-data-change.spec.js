/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */
scenario(
	"Assert that the coordinates of a node are synched between the diagram and the model after changing coordinates in the model.",
	() => {
		loadPage("Main Project/home");

		// Verify that the location of node "Piet" is as expected upon startup
		findWidget("Coordinates_1")
			.getCell(5, 0)
			.getValue()
			.should.eql("-176.00");
		findWidget("Coordinates_1")
			.getCell(5, 1)
			.getValue()
			.should.eql("-208.00");

		// And that this coordinates are indeed the actual diagram coordinates of the node
		findWidget("MyDiagram")
			.findNode("Piet")
			.getNodePosition()
			.should.eql("-176,-208");

		// Change the identifier values
		findWidget("Coordinates_1")
			.getCell(5, 0)
			.setValue("280.00");
		findWidget("Coordinates_1")
			.getCell(5, 1)
			.setValue("190.00");

		// Check that the new coordinates of the nodes are as expected
		findWidget("MyDiagram")
			.findNode("Piet")
			.getNodePosition()
			.should.eql("280,190");
	}
);
