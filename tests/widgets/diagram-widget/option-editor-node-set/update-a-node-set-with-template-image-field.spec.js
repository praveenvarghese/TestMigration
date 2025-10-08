/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(0);

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.setTemplateFromOptionEditor(0, "Image Field");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplate(0)
			.should.be.equal("Image Field");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateImage(0, {
				value: "SupplierImageUri",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateImageValue(0)
			.should.eql("SupplierImageUri(s)");
	}
);
