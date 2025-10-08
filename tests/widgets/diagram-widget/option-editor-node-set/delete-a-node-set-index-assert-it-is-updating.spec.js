/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.getNodeTypeDetails("Warehouses")
			.should.eql([
				{ nodeName: "Warehouses-2", nodeIcon: undefined, nodeCount: "1" },
				{ nodeName: "Warehouses-3", nodeIcon: undefined, nodeCount: "1" },
				{ nodeName: "Warehouses-5", nodeIcon: undefined, nodeCount: "1" },
			]);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.deleteNodeSet(1);

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);

		findWidget("s2")
			.getNodeTypeDetails("Warehouses")
			.should.be.eql("None");
	}
);
