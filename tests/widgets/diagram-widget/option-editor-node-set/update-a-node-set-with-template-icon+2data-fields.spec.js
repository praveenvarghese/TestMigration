/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

const templateName = `Icon`;

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(1);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.setTemplateFromOptionEditor(1, templateName, false);

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.be.shallowDeepEqual([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses" },
				{ nodeTitle: "Customers" },
			]);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplate(1)
			.should.be.equal("Icon + 2 Data Fields");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateIcon(1, "office", false);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplateIconValue(1)
			.should.be.equal("office");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField1(1, {
				value: "WarehouseName",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField1Value(1)
			.should.be.equal("WarehouseName(w)");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField2(1, {
				value: "WarehouseCount",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField2Value(1)
			.should.be.equal("WarehouseCount(w)");

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.be.shallowDeepEqual([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: "icon aimms aimms-office" },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);
	}
);
