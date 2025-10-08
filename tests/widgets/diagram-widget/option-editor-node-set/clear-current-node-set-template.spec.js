/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert Template options value of a node set list", () => {
	loadPage("Main Project/new page");

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(0)
		.clearTemplate(0);

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(0)
		.getCurrentTemplate(0)
		.should.be.equal("");

	findWidget("s2")
		.getNodeSetTypeDetails()
		.should.eql([
			{ nodeTitle: "Suppliers", nodeIcon: undefined },
			{ nodeTitle: "Warehouses", nodeIcon: undefined },
			{ nodeTitle: "Customers", nodeIcon: undefined },
		]);
});
