/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert store-focus on arc", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_From3")
		.should.be.eql("Suppliers3-1");

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_To3")
		.should.be.eql("Warehouses3-1");

	findWidget("Prefilled Diagram V2").drawAnArc("Warehouses3-4", "Customers3-2");

	findWidget("Prefilled Diagram V2")
		.findArc("Warehouses3-4", "Customers3-2")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_From3")
		.should.be.eql("Warehouses3-4");

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_To3")
		.should.be.eql("Customers3-2");

	findWidget("Prefilled Diagram V2").drawAnArc("Customers3-2", "Customers3-4");

	findWidget("Prefilled Diagram V2")
		.findArc("Customers3-2", "Customers3-4")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_From3")
		.should.be.eql("Customers3-2");

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_To3")
		.should.be.eql("Customers3-4");

	findWidget("StoreFocusForNodes").removeValue("selected_Arc_From3");

	findWidget("StoreFocusForNodes").removeValue("selected_Arc_To3");

	findWidget("Prefilled Diagram V2")
		.findArc("Warehouses3-4", "Customers3-2")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_From3")
		.should.be.eql("Warehouses3-4");

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_To3")
		.should.be.eql("Customers3-2");

	findWidget("StoreFocusForNodes").removeValue("selected_Arc_From3");

	findWidget("StoreFocusForNodes").removeValue("selected_Arc_To3");

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_From3")
		.should.be.eql("Suppliers3-1");

	findWidget("StoreFocusForNodes")
		.getValue("selected_Arc_To3")
		.should.be.eql("Warehouses3-1");
});
