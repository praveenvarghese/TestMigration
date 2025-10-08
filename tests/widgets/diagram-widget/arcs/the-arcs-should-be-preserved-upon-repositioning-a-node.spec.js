/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("upon repositioning a node, the arcs should be preserved", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(5);

	/* Make sure the expected 6 arcs are displayed on the initial diagram */
	findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-1", "Warehouses3-4");

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(6);

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.dragNdropNode(-100, -50);

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.nodeExist().should.be.true;

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(6);

	findWidget("Prefilled Diagram V2")
		.getAllArcsInfo()
		.should.beEqualInAnyOrderTo([
			{ source: "Suppliers-1", target: "Warehouses-3" },
			{ source: "Warehouses-2", target: "Customers-3" },
			{ source: "Warehouses-2", target: "Customers-5" },
			{ source: "Warehouses-5", target: "Customers-1" },
			{ source: "Suppliers-4", target: "Warehouses-2" },
			{ source: "Suppliers-1", target: "Warehouses-6" },
		]);
});
