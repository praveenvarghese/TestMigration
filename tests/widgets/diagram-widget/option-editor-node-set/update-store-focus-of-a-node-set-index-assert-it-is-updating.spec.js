/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Update Store Focus for the index should not reset the template details and no node loss",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getOptionEntry(0, "Index")
			.clickToGetIdentifierSelectionDialog()
			.setStoreFocus([
				{ index: "s", clear: true },
				{ index: "s", value: "AnotherSelectedSupplier" },
			])
			.clickOnFinish();

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(0)
			.getCurrentIndex(0)
			.should.be.equal("s, s -> AnotherSelectedSupplier");

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
			]);

		findWidget("s2")
			.getNumberOfNodes()
			.should.eql(10);
	}
);
