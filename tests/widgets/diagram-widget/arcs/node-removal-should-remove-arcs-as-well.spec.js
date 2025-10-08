/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Validate whether the removal of a node indeed removes all arcs starting/ending in that node as well.",
	() => {
		loadPage("Main Project/PageWithArcs");

		/* Make sure the expected 5 arcs are displayed on the initial diagram */
		findWidget("Prefilled Diagram V2")
			.getAllArcsInfo()
			.should.beEqualInAnyOrderTo([
				{ source: "Suppliers-1", target: "Warehouses-3" },
				{ source: "Warehouses-2", target: "Customers-3" },
				{ source: "Warehouses-2", target: "Customers-5" },
				{ source: "Warehouses-5", target: "Customers-1" },
				{ source: "Suppliers-4", target: "Warehouses-2" },
			]);

		// findWidget("Prefilled Diagram V2")
		// 	.findNode("Warehouses3-2")
		// 	.hoverOnNode()
		// 	.click();

		findWidget("Prefilled Diagram V2")
			.findNode("Warehouses3-2")
			.hoverOnNode()
			.rightClickOnNode();

		//Delete Option from itemaction
		findWidget("Prefilled Diagram V2")
			.getItemActions()
			.getItemActionDetails(4)
			.click();

		/* Check that the relevant arcs have indeed disappeared */
		findWidget("Prefilled Diagram V2")
			.getAllArcsInfo()
			.should.beEqualInAnyOrderTo([
				{ source: "Suppliers-1", target: "Warehouses-3" },
				{ source: "Warehouses-5", target: "Customers-1" },
			]);
	}
);
