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
			.addNodeSet();

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
			.specifyXCoordinate(4, {
				value: "AirportsX",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.specifyYCoordinate(4, {
				value: "AirportsY",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.setTemplateFromOptionEditor(4, "2 Data Fields", true);

		// findWidget("s2")
		// 	.openDiagramNodeSetOptionEditor()
		// 	.editTemplateIcon(4, "office", false);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField1(4, {
				value: "AirportName",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField2(4, {
				value: "AirportAbbreviation",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getNodeSetListDetails()
			.should.eql([
				{
					NodeSetTitle: ["Suppliers", "Warehouses", "Customers", "nodes.3", "Airports"],
					NodeSetIndex: [
						"s, s -> SelectedSupplier",
						"w",
						"c, c -> selectedCustomer",
						null,
						"a, a -> SelectedAirport",
					],
				},
			]);

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
				{ nodeTitle: "Airports", nodeIcon: undefined },
			]);
	}
);
