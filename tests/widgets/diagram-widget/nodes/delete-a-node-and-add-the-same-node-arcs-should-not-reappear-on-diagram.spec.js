/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Delete a Node and arcs should be removed and again on adding the same node arcs should not appear",
	() => {
		loadPage("Main Project/PageWithArcs");

		findWidget("Prefilled Diagram V2").addNode("Suppliers3", 150, 350);

		findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-3", "Warehouses3-4");

		findWidget("Prefilled Diagram V2")
			.getNumberOfArcs()
			.should.eql(6);

		findWidget("Prefilled Diagram V2")
			.findNode("Suppliers3-3")
			.hoverOnNode()
			.click();

		findWidget("Prefilled Diagram V2")
			.findNode("Suppliers3-3")
			.hoverOnNode()
			.rightClickOnNode();

		//Delete Option from itemaction
		findWidget("Prefilled Diagram V2")
			.getItemActions()
			.getItemActionDetails(4)
			.click();

		findWidget("Prefilled Diagram V2")
			.findNode("Suppliers3-3")
			.nodeExist().should.be.false;

		findWidget("Prefilled Diagram V2")
			.getNumberOfArcs()
			.should.eql(5);

		findWidget("Prefilled Diagram V2").addNode("Suppliers3", 150, 350);

		findWidget("Prefilled Diagram V2")
			.getAllArcsInfo()
			.should.beEqualInAnyOrderTo([
				{ source: "Suppliers-1", target: "Warehouses-3" },
				{ source: "Warehouses-2", target: "Customers-3" },
				{ source: "Warehouses-2", target: "Customers-5" },
				{ source: "Warehouses-5", target: "Customers-1" },
				{ source: "Suppliers-4", target: "Warehouses-2" },
			]);

		findWidget("Prefilled Diagram V2")
			.getNumberOfArcs()
			.should.eql(5);
	}
);
