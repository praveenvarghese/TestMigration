/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Validate whether the removal of Arcs works.", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(5);

	/* Make sure the expected 5 arcs are displayed on the initial diagram */
	findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-1", "Warehouses3-3");

	findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-1", "Warehouses3-4");

	findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-1", "Customers3-2");

	findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-1", "Customers3-4");

	findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-1", "Customers3-5");

	findWidget("Prefilled Diagram V2")
		.getAllArcsInfo()
		.should.beEqualInAnyOrderTo([
			{ source: "Suppliers-1", target: "Warehouses-3" },
			{ source: "Warehouses-2", target: "Customers-3" },
			{ source: "Warehouses-2", target: "Customers-5" },
			{ source: "Warehouses-5", target: "Customers-1" },
			{ source: "Suppliers-4", target: "Warehouses-2" },
			{ source: "Suppliers-1", target: "Warehouses-5" },
			{ source: "Suppliers-1", target: "Warehouses-6" },
			{ source: "Suppliers-1", target: "Customers-2" },
			{ source: "Suppliers-1", target: "Customers-4" },
			{ source: "Suppliers-1", target: "Customers-5" },
		]);

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(10);
});
