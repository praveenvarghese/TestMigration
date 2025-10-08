/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Update the fields of a nodeset with the same identifier (only differently sliced) as used in the fields of another nodeset. See ticket #721.",
	() => {
		loadPage("Main Project/SameFieldIdentifier");

		findWidget("Prefilled Diagram V2_1")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(1);

		findWidget("Prefilled Diagram V2_1")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField1(1, {
				value: "NodeName",
				type: "identifier",
				slice: [{ index: "wn3", type: "subset", value: "w3" }],
			});

		findWidget("Prefilled Diagram V2_1")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField1Value(1)
			.should.be.equal("NodeName(w3)");

		findWidget("Prefilled Diagram V2_1")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField2(1, {
				value: "NodeCount",
				type: "identifier",
				slice: [{ index: "wn3", type: "subset", value: "w3" }],
			});

		findWidget("Prefilled Diagram V2_1")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField2Value(1)
			.should.be.equal("NodeCount(w3)");
	}
);
