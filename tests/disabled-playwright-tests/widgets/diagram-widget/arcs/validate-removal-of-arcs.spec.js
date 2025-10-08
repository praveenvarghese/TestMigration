/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Validate whether the removal of Arcs works.", () => {
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

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.eql(5);

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("Prefilled Diagram V2")
		.getItemActions()
		.getItemActionDetails(2)
		.click();

	/* Check that this arc has indeed disappeared */
	findWidget("Prefilled Diagram V2")
		.getAllArcsInfo()
		.should.beEqualInAnyOrderTo([
			{ source: "Suppliers-1", target: "Warehouses-3" },
			{ source: "Warehouses-2", target: "Customers-3" },
			{ source: "Warehouses-5", target: "Customers-1" },
			{ source: "Suppliers-4", target: "Warehouses-2" },
		]);

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.eql(4);

	findWidget("Prefilled Diagram V2")
		.getNumberOfNodes()
		.should.eql(11);
});
