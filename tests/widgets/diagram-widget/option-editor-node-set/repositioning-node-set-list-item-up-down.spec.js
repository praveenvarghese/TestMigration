/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert Repositioning of a node set in the list option is possible", () => {
	loadPage("Main Project/new page");

	/* The code `findWidget("s2").openDiagramNodeSetOptionEditor().getEditorTitle().should.be.equal("Node Sets");`
	is finding a widget with the identifier "s", opening the diagram option editor for that widget, and
	then checking if the editor title is equal to "Node Sets". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.getEditorTitle()
		.should.be.equal("Node Sets");

	/* The code is finding a widget with the identifier "s", opening the diagram option editor for that
	widget, and then getting the details of the node set list. It is asserting that the details of the
	node set list should be equal to an array containing an object with properties `NodeSetTitle` and
	`NodeSetIndex`, both set to the value "First View". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.getNodeSetListDetails()
		.should.eql([
			{
				NodeSetTitle: ["Suppliers", "Warehouses", "Customers"],
				NodeSetIndex: ["s, s -> SelectedSupplier", "w", "c, c -> selectedCustomer"],
			},
		]);

	/* The code `findWidget("s2").openDiagramNodeSetOptionEditor().moveUpANodeSet(2);` is performing a series of
	actions on a widget with the identifier "s". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.moveUpANodeSet(2);

	/* The code `findWidget("s2").openDiagramNodeSetOptionEditor().moveDownANodeSet(0);` is performing a series of
	actions on a widget with the identifier "s". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.moveDownANodeSet(0);

	/* The code is finding a widget with the identifier "s", opening the diagram option editor for that
	widget, and then getting the details of the node set list. It is asserting that the details of the
	node set list should be equal to an array containing an object with properties `NodeSetTitle` and
	`NodeSetIndex`, both set to the value "First View". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.getNodeSetListDetails()
		.should.eql([
			{
				NodeSetTitle: ["Customers", "Suppliers", "Warehouses"],
				NodeSetIndex: ["c, c -> selectedCustomer", "s, s -> SelectedSupplier", "w"],
			},
		]);
});
