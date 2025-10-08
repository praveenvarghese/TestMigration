/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("drag and drop a node", () => {
	loadPage("Main Project/new page");

	findWidget("s2")
		.findNode("Suppliers-1")
		.dragNdropNode(-100, -50);

	findWidget("s2")
		.findNode("Suppliers-1")
		.nodeExist().should.be.true;

	findWidget("s2")
		.findNode("Suppliers-1")
		.getNodePosition()
		.should.be.equal("-480,-144");
});
