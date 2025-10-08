/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert number of nodes", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.hoverOnNode()
		.click();

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.hoverOnNode()
		.rightClickOnNode();

	findWidget("Prefilled Diagram V2")
		.getItemActions()
		.getItemActionDetails(3)
		.click();

	getDialog().should.exist;

	findDialog()
		.getTitle()
		.should.equal(`Edit Node Info`);

	findWidget("node Info").setValue("SupplierCount3", "10");

	findWidget("node Info").setValue("SupplierName3", "Suppliers");

	findDialog()
		.findButton("OK")
		.click();

	findWidget("Prefilled Diagram V2")
		.findNode("Suppliers3-1")
		.getNodeDetails("Suppliers3-1")
		.should.eql([
			{
				title: "Suppliers",
				icon: "icon aimms aimms-store",
				count: "10",
			},
		]);
});
