/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

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
			.setTemplateFromOptionEditor(3, `3 Data Fields`, true);

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.specifyXCoordinate(3, {
				value: "AirportsX",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.specifyYCoordinate(3, {
				value: "AirportsY",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplate(3)
			.should.be.equal(`3 Data Fields`);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField1(3, {
				value: "AirportAbbreviation",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField1Value(3)
			.should.be.equal("AirportAbbreviation(a)");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField2(3, {
				value: "AirportName",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField2Value(3)
			.should.be.equal("AirportName(a)");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField3(3, {
				value: "NumberOfRunways",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField3Value(3)
			.should.be.equal("NumberOfRunways(a)");

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
