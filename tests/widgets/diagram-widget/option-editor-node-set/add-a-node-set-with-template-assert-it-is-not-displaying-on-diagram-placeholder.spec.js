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
				value: "c",
				type: "identifier",
				storeFocus: [
					{
						index: "c",
						value: "selectedCustomer",
					},
				],
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(3)
			.getCurrentIndex(3)
			.should.be.equal("c, c -> selectedCustomer");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(3)
			.setTemplateFromOptionEditor(3, "Image Field");

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);
	}
);
