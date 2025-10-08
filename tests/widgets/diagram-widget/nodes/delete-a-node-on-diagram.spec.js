/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Delete a Node", () => {
	loadPage("Main Project/PageWithArcs");

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

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.hoverOnNode()
		.click();

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.hoverOnNode()
		.rightClickOnNode();

	//Delete Option from itemaction
	findWidget("Prefilled Diagram V2")
		.getItemActions()
		.getItemActionDetails(4)
		.click();

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.nodeExist().should.be.false;

	findWidget("Prefilled Diagram V2")
		.getAllArcsInfo()
		.should.beEqualInAnyOrderTo([
			{ source: "Warehouses-2", target: "Customers-3" },
			{ source: "Warehouses-2", target: "Customers-5" },
			{ source: "Warehouses-5", target: "Customers-1" },
			{ source: "Suppliers-4", target: "Warehouses-2" },
		]);

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.eql(4);
});
