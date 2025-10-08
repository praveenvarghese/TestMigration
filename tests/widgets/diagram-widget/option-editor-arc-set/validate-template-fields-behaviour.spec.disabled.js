/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Check that the 2 options of the Template dropdown have the desired effect on the showing/hiding of the data fields in the options editor",
	() => {
		loadPage("Main Project/new page");

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.templateField1Exists()
			.should.eql(false);

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.templateField2Exists()
			.should.eql(false);

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.setTemplateFromOptionEditor("1 Data Field");

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.templateField1Exists()
			.should.eql(true);

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.templateField2Exists()
			.should.eql(false);

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.setTemplateFromOptionEditor("2 Data Fields");

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.templateField1Exists()
			.should.eql(true);

		findWidget("s2")
			.openDiagramArcOptionEditor()
			.templateField2Exists()
			.should.eql(true);
	}
);
