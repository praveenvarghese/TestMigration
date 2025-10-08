/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Configure the arc settings from scratch and verify that arcs can be drawn after that.",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.setOptions([
				{
					name: "Identifier",
					value: "WhiteboardConnection2",
					valueType: "IDENTIFIER",
					optionEditorType: "IDENTIFIER",
					sliceInfo: null,
				},
			]);

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.setOptions([
				{
					name: "Label",
					value: "WhiteboardConnectionLabel2",
					valueType: "IDENTIFIER",
					optionEditorType: "IDENTIFIER",
					sliceInfo: null,
				},
			]);

		findWidget("s2").drawAnArc("Warehouses-2", "Customers-1");

		// findWidget("s2")
		// 	.findArc("Warehouses-2", "Customers-1")
		// 	.arcIsVisibleOnDiagram().should.be.true;

		findWidget("s2")
			.getNumberOfArcs()
			.should.be.equal(1);
	}
);
