/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(0);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.clearTemplate(0);

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: undefined },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.setTemplateFromOptionEditor(0, `2 Data Fields`, true);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplate(0)
			.should.be.equal(`2 Data Fields`);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField1(0, {
				value: "SupplierName",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField1Value(0)
			.should.be.equal("SupplierName(s)");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField2(0, {
				value: "SupplierCount",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField2Value(0)
			.should.be.equal("SupplierCount(s)");

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: undefined },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);
	}
);
