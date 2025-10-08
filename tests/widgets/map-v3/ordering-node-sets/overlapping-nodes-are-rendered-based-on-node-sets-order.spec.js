/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"With overlapping nodes from different node-sets, check on a node and assert the store-focus value set based on the order of node-sets configured.",
	() => {
		loadPage("Main Project/MapV3 Page/Node sets Ordering");

		findWidget("MapV3_1")
			.getNodeSet(0)
			.getPoint("Karnataka")
			.click();

		let storeFocusScalarWidget = findWidget("IND StoreFocus");
		storeFocusScalarWidget.getValue("IND_F_SelectedFactory").should.be.equal("Karnataka");
		storeFocusScalarWidget.getValue("IND_DC_SelectedDC").should.be.equal("");
		storeFocusScalarWidget.getValue("IND_Q_SelectedQualityCentre").should.be.equal("");

		findWidget("MapV3_1")
			.getNodeSet(3)
			.getPoint("Karnataka")
			.click();

		storeFocusScalarWidget = findWidget("IND StoreFocus");
		storeFocusScalarWidget.getValue("IND_F_SelectedFactory").should.be.equal("Karnataka");
		storeFocusScalarWidget.getValue("IND_DC_SelectedDC").should.be.equal("");
		storeFocusScalarWidget.getValue("IND_Q_SelectedQualityCentre").should.be.equal("");

		findWidget("MapV3_1")
			.getNodeSet(3)
			.getPoint("Chhattisgarh")
			.click();

		storeFocusScalarWidget = findWidget("IND StoreFocus");
		storeFocusScalarWidget.getValue("IND_F_SelectedFactory").should.be.equal("Karnataka");
		storeFocusScalarWidget.getValue("IND_DC_SelectedDC").should.be.equal("");
		storeFocusScalarWidget
			.getValue("IND_Q_SelectedQualityCentre")
			.should.be.equal("Chhattisgarh");

		findWidget("MapV3_1")
			.getNodeSet(5)
			.getPoint("Chhattisgarh")
			.click();

		storeFocusScalarWidget = findWidget("IND StoreFocus");
		storeFocusScalarWidget.getValue("IND_F_SelectedFactory").should.be.equal("Karnataka");
		storeFocusScalarWidget.getValue("IND_DC_SelectedDC").should.be.equal("");
		storeFocusScalarWidget
			.getValue("IND_Q_SelectedQualityCentre")
			.should.be.equal("Chhattisgarh");

		findWidget("MapV3_1")
			.nodeSetsMapLeafletOptionEditor()
			.moveUpANodeSet(5);

		findWidget("MapV3_1")
			.getNodeSet(5)
			.getPoint("Chhattisgarh")
			.click();

		storeFocusScalarWidget = findWidget("IND StoreFocus");
		storeFocusScalarWidget.getValue("IND_F_SelectedFactory").should.be.equal("Karnataka");
		storeFocusScalarWidget.getValue("IND_DC_SelectedDC").should.be.equal("Chhattisgarh");
		storeFocusScalarWidget
			.getValue("IND_Q_SelectedQualityCentre")
			.should.be.equal("Chhattisgarh");
	}
);
