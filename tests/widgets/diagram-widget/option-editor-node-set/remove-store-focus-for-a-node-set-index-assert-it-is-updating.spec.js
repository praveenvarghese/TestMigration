/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Remove the storefocus value for a set index and assert it's saving and node has no impact",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getOptionEntry(0, "Index")
			.clickToGetIdentifierSelectionDialog()
			.setStoreFocus([
				{ index: "s", clear: true },
				// { index: "s", value: "SelectedAirport" },
			])
			.clickOnFinish();

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(0)
			.getCurrentIndex(0)
			.should.be.equal("s");

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
