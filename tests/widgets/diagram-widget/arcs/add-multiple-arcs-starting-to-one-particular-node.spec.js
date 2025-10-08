/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Validate whether the removal of Arcs works.", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(5);

	/* Make sure the expected 5 arcs are displayed on the initial diagram */
	findWidget("Prefilled Diagram V2").drawAnArc("Warehouses3-3", "Suppliers3-1");

	findWidget("Prefilled Diagram V2").drawAnArc("Warehouses3-4", "Suppliers3-1");

	findWidget("Prefilled Diagram V2").drawAnArc("Customers3-2", "Suppliers3-1");

	findWidget("Prefilled Diagram V2").drawAnArc("Customers3-4", "Suppliers3-1");

	findWidget("Prefilled Diagram V2").drawAnArc("Customers3-5", "Suppliers3-1");

	findWidget("Prefilled Diagram V2")
		.getAllArcsInfo()
		.should.beEqualInAnyOrderTo([
			{ source: "Suppliers-1", target: "Warehouses-3" },
			{ source: "Warehouses-2", target: "Customers-3" },
			{ source: "Warehouses-2", target: "Customers-5" },
			{ source: "Warehouses-5", target: "Customers-1" },
			{ source: "Suppliers-4", target: "Warehouses-2" },
			{ source: "Warehouses-5", target: "Suppliers-1" },
			{ source: "Warehouses-6", target: "Suppliers-1" },
			{ source: "Customers-2", target: "Suppliers-1" },
			{ source: "Customers-4", target: "Suppliers-1" },
			{ source: "Customers-5", target: "Suppliers-1" },
		]);

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(10);
});
