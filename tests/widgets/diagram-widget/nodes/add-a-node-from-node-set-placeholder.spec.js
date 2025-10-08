/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Add a new node from node set placeholder", () => {
	loadPage("Main Project/new page");

	findWidget("s2").addNode("Suppliers", 100, 100);

	findWidget("s2")
		.findNode("Suppliers-5")
		.nodeExist().should.be.true;

	findWidget("s2")
		.findNode("Suppliers-5")
		.getNodeDetails("Suppliers-5")
		.should.eql([
			{
				title: "Suppliers-5",
				icon: "icon aimms aimms-store",
				count: "1",
			},
		]);
});
