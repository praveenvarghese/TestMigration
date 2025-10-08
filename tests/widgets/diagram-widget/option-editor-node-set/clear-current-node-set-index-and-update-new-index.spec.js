/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Clear the node set selected index and select a new identifier", () => {
	loadPage("Main Project/new page");

	findWidget("s2")
		.getNodeSetTypeDetails()
		.should.eql([
			{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
			{ nodeTitle: "Warehouses", nodeIcon: undefined },
			{ nodeTitle: "Customers", nodeIcon: undefined },
		]);

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(0)
		.clearNodeIndex(0);

	findWidget("s2")
		.getNodeSetTypeDetails()
		.should.eql([
			{ nodeTitle: "Warehouses", nodeIcon: undefined },
			{ nodeTitle: "Customers", nodeIcon: undefined },
		]);

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(0)
		.getCurrentIndex(0)
		.should.be.eql("None");

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.editNodeSet(0, {
			value: "a",
			type: "identifier",
			storeFocus: [
				{
					index: "a",
					value: "SelectedAirport",
				},
			],
		});

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(0)
		.getCurrentIndex(0)
		.should.be.equal("a, a -> SelectedAirport");

	findWidget("s2")
		.getNodeSetTypeDetails()
		.should.eql([
			{ nodeTitle: "Warehouses", nodeIcon: undefined },
			{ nodeTitle: "Customers", nodeIcon: undefined },
		]);
});
