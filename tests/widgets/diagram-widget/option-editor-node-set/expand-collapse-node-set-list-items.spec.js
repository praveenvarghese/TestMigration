/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert Collapse and Expand of node set list", () => {
	loadPage("Main Project/new page");

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(0)
		.getNumberOfItemsForNodeSet(0)
		.should.be.equal(8);

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.isNodeSetCollapsedORExpanded(0)
		.should.be.equal("Expanded");

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(0)
		.getDetailsForNodeSetItem(0)
		.should.eql([
			{
				NodeSetItem: [
					"Index",
					"X Coordinate",
					"Y Coordinate",
					"Button Visibility",
					"Template",
					"Icon",
					"Field 1",
					"Field 2",
				],
				NodeSetItemValue: [
					"s, s -> SelectedSupplier",
					["Active", "Icon + 2 Data Fields", "store"],
					"SupplierX(s)",
					"SupplierY(s)",
					"SupplierName(s)",
					"SupplierCount(s)",
				],
			},
		]);

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.collapseNodeSet(0)
		.isNodeSetCollapsedORExpanded(0)
		.should.be.equal("Collapsed");

	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.getNodeSetListDetails()
		.should.eql([
			{
				NodeSetTitle: ["Suppliers", "Warehouses", "Customers"],
				NodeSetIndex: ["s, s -> SelectedSupplier", "w", "c, c -> selectedCustomer"],
			},
		]);
});
