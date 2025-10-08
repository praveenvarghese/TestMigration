/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"With multiple node-sets added to MapV3 widget, check fo the Z-index of their respective nodes. Assert the Z-index of the nodes are based on the order of their node-sets configured.",
	() => {
		loadPage("Main Project/MapV3 Page/Node sets Ordering");

		findWidget("MapV3_1")
			.getNodeSetZIndex("0")
			.should.contains("403");

		findWidget("MapV3_1")
			.getNodeSetZIndex("3")
			.should.contains("402");

		findWidget("MapV3_1")
			.getNodeSetZIndex("5")
			.should.contains("401");

		findWidget("MapV3_1")
			.nodeSetsMapLeafletOptionEditor()
			.moveUpANodeSet(5);

		findWidget("MapV3_1")
			.getNodeSetZIndex("0")
			.should.contains("403");

		findWidget("MapV3_1")
			.getNodeSetZIndex("3")
			.should.contains("401");

		findWidget("MapV3_1")
			.getNodeSetZIndex("5")
			.should.contains("402");

		findWidget("MapV3_1")
			.nodeSetsMapLeafletOptionEditor()
			.moveDownANodeSet(0);

		findWidget("MapV3_1")
			.getNodeSetZIndex("0")
			.should.contains("402");

		findWidget("MapV3_1")
			.getNodeSetZIndex("3")
			.should.contains("401");

		findWidget("MapV3_1")
			.getNodeSetZIndex("5")
			.should.contains("403");

		findWidget("MapV3_1")
			.nodeSetsMapLeafletOptionEditor()
			.deleteNodeSet(3);

		findWidget("MapV3_1")
			.getNodeSetZIndex("0")
			.should.contains("401");

		findWidget("MapV3_1")
			.getNodeSetZIndex("5")
			.should.contains("402");
	}
);
