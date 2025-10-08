/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getEditorTitle()
			.should.be.equal("Node Sets");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.addNodeSet({
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
			.getNodeSetListDetails()
			.should.eql([
				{
					NodeSetTitle: ["Suppliers", "Warehouses", "Customers", "Airports"],
					NodeSetIndex: [
						"s, s -> SelectedSupplier",
						"w",
						"c, c -> selectedCustomer",
						"a, a -> SelectedAirport",
					],
				},
			]);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(3)
			.getCurrentIndex(3)
			.should.be.equal("a, a -> SelectedAirport");

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);
	}
);
