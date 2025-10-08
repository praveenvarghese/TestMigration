/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"Assert that the deletion of the X Coordinates of a Node Set immediately removes all nodes of that set from the diagram.",
	() => {
		loadPage("Main Project/home");

		findWidget("MyDiagram")
			.getNodeDetails()
			.should.beEqualInAnyOrderTo([
				{ nodeName: "Stad-1" },
				{ nodeName: "Stad-2" },
				{ nodeName: "Stad-3" },
				{ nodeName: "Stad-4" },
				{ nodeName: "Stad-5" },
				{ nodeName: "Stad-6" },
				{ nodeName: "Stad-7" },
				{ nodeName: "Stad-8" },
				{ nodeName: "Stad-9" },
				{ nodeName: "People-1" },
				{ nodeName: "People-2" },
				{ nodeName: "Marietje" },
				{ nodeName: "Piet" },
				{ nodeName: "People-3" },
				{ nodeName: "People-4" },
			]);

		findWidget("MyDiagram")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(1)
			.deleteNodeInformation(1, "X Coordinate");

		findWidget("MyDiagram")
			.getNodeDetails()
			.should.beEqualInAnyOrderTo([
				{ nodeName: "Stad-1" },
				{ nodeName: "Stad-2" },
				{ nodeName: "Stad-3" },
				{ nodeName: "Stad-4" },
				{ nodeName: "Stad-5" },
				{ nodeName: "Stad-6" },
				{ nodeName: "Stad-7" },
				{ nodeName: "Stad-8" },
				{ nodeName: "Stad-9" },
			]);
	}
);
