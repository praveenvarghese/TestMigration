/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"Simply verify that the label above the first node set is called 'Nodes.0' on an empty diagram.",
	() => {
		loadPage("Main Project/Empty Diagram");

		findWidget("CleanSheet")
			.openDiagramNodeSetOptionEditor()
			.getNodeSetListDetails(0)
			.should.eql([{ NodeSetTitle: ["nodes.0"], NodeSetIndex: [null] }]);
	}
);
