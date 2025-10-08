/*!
 * @AIMMS_FILE=models/Bugs/GL00636-Diagram/Diagram.aimms
 */

scenario("Validate no arc if domain condition is false", () => {
	loadPage("Main Project/home");

	/* Make sure the expected 2 arcs are displayed on the initial diagram */
	findWidget("SCDiagram")
		.getAllArcsInfo()
		.should.beEqualInAnyOrderTo([
			{ source: "Suppliers-1", target: "Warehouses-2" },
			{ source: "Warehouses-1", target: "Customers-2" },
		]);

	findWidget("SCDiagram")
		.getNumberOfArcs()
		.should.eql(2);

	loadPage("Main Project/DataPage1");

	findWidget("arcAllowed")
		.getCell(0, 6)
		.setValue(false);

	loadPage("Main Project/home");

	/* Make sure that only the 1 remaining arc is displayed on the diagram */
	findWidget("SCDiagram")
		.getAllArcsInfo()
		.should.beEqualInAnyOrderTo([{ source: "Warehouses-1", target: "Customers-2" }]);

	findWidget("SCDiagram")
		.getNumberOfArcs()
		.should.eql(1);

	findWidget("SCDiagram").drawAnArc("Suppliers-1", "Warehouses-2");

	/* Check that this arc has indeed disappeared */
	findWidget("SCDiagram")
		.getAllArcsInfo()
		.should.beEqualInAnyOrderTo([{ source: "Warehouses-1", target: "Customers-2" }]);

	findWidget("SCDiagram")
		.getNumberOfArcs()
		.should.eql(1);
});
