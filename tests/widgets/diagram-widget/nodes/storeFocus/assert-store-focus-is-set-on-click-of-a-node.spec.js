/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert number of nodes", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.hoverOnNode()
		.click();

	findWidget("StoreFocusForNodes")
		.getValue("SelectedSupplier3")
		.should.be.eql("Suppliers3-1");

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-2")
		.hoverOnNode()
		.rightClickOnNode();

	findWidget("StoreFocusForNodes")
		.getValue("SelectedSupplier3")
		.should.be.eql("Suppliers3-2");

	findWidget("StoreFocusForNodes").removeValue("SelectedSupplier3");

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.hoverOnNode()
		.click();

	findWidget("StoreFocusForNodes")
		.getValue("SelectedSupplier3")
		.should.be.eql("Suppliers3-1");

	findWidget("StoreFocusForNodes").removeValue("SelectedSupplier3");

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-2")
		.hoverOnNode()
		.click();

	findWidget("StoreFocusForNodes")
		.getValue("SelectedSupplier3")
		.should.be.eql("Suppliers3-2");

	findWidget("Prefilled Diagram V2")
		.findNode("Customers3-1")
		.hoverOnNode()
		.click();

	findWidget("StoreFocusForNodes")
		.getValue("SelectedCustomer3")
		.should.be.eql("Customers3-1");

	findWidget("Prefilled Diagram V2")
		.findNode("Customers3-4")
		.hoverOnNode()
		.rightClickOnNode();

	findWidget("StoreFocusForNodes")
		.getValue("SelectedCustomer3")
		.should.be.eql("Customers3-4");
});
