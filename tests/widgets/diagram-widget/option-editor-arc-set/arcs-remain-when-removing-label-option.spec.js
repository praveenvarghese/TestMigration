/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"When removing the Arc label, all arcs should just remain to be displayed. This used to be a different test.",
	() => {
		loadPage("Main Project/PageWithArcs");

		/* Make sure 5 arcs are displayed on the initial diagram */
		findWidget("Prefilled Diagram V2")
			.getNumberOfArcs()
			.should.eql(5);

		/* Change the Template field from '1 Data Field' to '2 Data Fields' */
		findWidget("Prefilled Diagram V2")
			.openDiagramArcOptionEditor()
			.clearLabel();

		/* Check that all arcs have disappeared */
		findWidget("Prefilled Diagram V2")
			.getNumberOfArcs()
			.should.eql(5);
	}
);
