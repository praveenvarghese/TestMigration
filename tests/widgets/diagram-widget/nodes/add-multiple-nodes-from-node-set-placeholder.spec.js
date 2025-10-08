/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert number of nodes", () => {
	loadPage("Main Project/new page");

	findWidget("s2").addNode("Suppliers", 120, 120, 3);

	findWidget("s2")
		.getNodeTypeDetails("Suppliers")
		.should.eql([
			{
				nodeName: "Suppliers-1",
				nodeIcon: "icon aimms aimms-store",
				nodeCount: "1",
			},
			{
				nodeName: "Suppliers-4",
				nodeIcon: "icon aimms aimms-store",
				nodeCount: "1",
			},
			{
				nodeName: "Suppliers-5",
				nodeIcon: "icon aimms aimms-store",
				nodeCount: "1",
			},
			{
				nodeName: "Suppliers-6",
				nodeIcon: "icon aimms aimms-store",
				nodeCount: "1",
			},
			{
				nodeName: "Suppliers-7",
				nodeIcon: "icon aimms aimms-store",
				nodeCount: "1",
			},
		]);
});
