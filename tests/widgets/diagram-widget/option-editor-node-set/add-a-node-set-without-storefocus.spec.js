/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

const templateName = `Icon`;

scenario(
	"Add a node-set without storefocus and with template details it should be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.addNodeSet({
				value: "a",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.setTemplateFromOptionEditor(3, templateName, false);

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplate(3)
			.should.be.equal("Icon + 2 Data Fields");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateIcon(3, "office", false);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplateIconValue(3)
			.should.be.equal("office");

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
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: "icon aimms aimms-office" },
				{ nodeTitle: "Customers", nodeIcon: undefined },
				{ nodeTitle: "Airports", nodeIcon: undefined },
			]);
	}
);
