/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert number of nodes", () => {
	loadPage("Main Project/new page");

	findWidget("s2")
		.findNode("Suppliers-1")
		.rightClickOnNode();

	findWidget("s2")
		.getItemActions()
		.isItemActionDisplayed().should.be.true;

	findWidget("s2")
		.findNode("Suppliers-1")
		.rightClickOnNode()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Make an Item Action In-Active", icon: "aimms-minus", state: "active" },
			{ title: "Show network info", icon: "aimms-tree7", state: "active" },
			{ title: "Show current date and time", icon: "aimms-map", state: "active" },
		]);

	findWidget("s2")
		.findNode("Warehouses-3")
		.rightClickOnNode();

	findWidget("s2")
		.getItemActions()
		.isItemActionDisplayed().should.be.true;

	findWidget("s2")
		.findNode("Warehouses-3")
		.rightClickOnNode()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Make an Item Action Active", icon: "aimms-plus", state: "active" },
			{ title: "Show warehouse info", icon: "aimms-tree7", state: "active" },
			{ title: "Stock count", icon: "aimms-book", state: "active" },
		]);
});
