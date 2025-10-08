/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"Clearing the underlying set of a node set in the model should lead to the complete removal of any nodes of that set from the actual diagram.",
	() => {
		loadPage("Main Project/home");

		// Get all the displayed node names. These include translated node names.
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

		// Clear the whole people set
		findWidget("ClearPeopleSet").click();

		// Verify the effect on the diagram
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
