/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"The nodeset button order on the buttom of the diagram should follow the order of the node sets in the options editor.",
	() => {
		loadPage("Main Project/home");

		// Get the node type details.
		findWidget("MyDiagram")
			.getNodeSetTypeDetails()
			.should.be.shallowDeepEqual([{ nodeTitle: "Cities" }, { nodeTitle: "People" }]);

		// Change the order of the node sets in the options editor.

		findWidget("MyDiagram")
			.openDiagramNodeSetOptionEditor()
			.moveUpANodeSet(1);

		// And verify the effect on the node type details order...
		findWidget("MyDiagram")
			.getNodeSetTypeDetails()
			.should.be.shallowDeepEqual([{ nodeTitle: "People" }, { nodeTitle: "Cities" }]);
	}
);
