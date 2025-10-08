/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"Assert that a change in the element text annotation is reflected on the diagram widget.",
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

		// Update the element text
		findWidget("UpdateElementText").click();

		findWidget("MyDiagram")
			.getNodeDetails()
			.should.beEqualInAnyOrderTo([
				{ nodeName: "Ciudad-1" },
				{ nodeName: "Ciudad-2" },
				{ nodeName: "Ciudad-3" },
				{ nodeName: "Ciudad-4" },
				{ nodeName: "Ciudad-5" },
				{ nodeName: "Ciudad-6" },
				{ nodeName: "Ciudad-7" },
				{ nodeName: "Ciudad-8" },
				{ nodeName: "Ciudad-9" },
				{ nodeName: "People-1" },
				{ nodeName: "People-2" },
				{ nodeName: "Marietje" },
				{ nodeName: "Piet" },
				{ nodeName: "People-3" },
				{ nodeName: "People-4" },
			]);
	}
);
