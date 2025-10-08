/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"When deleting the arcs identifier specification, all arcs should be removed from the diagram",
	() => {
		loadPage("Main Project/PageWithArcs");

		/* Make sure 5 arcs are displayed on the initial diagram */
		findWidget("Prefilled Diagram V2")
			.getNumberOfArcs()
			.should.eql(5);

		/* Delete the 'Identifier' option */
		findWidget("Prefilled Diagram V2")
			.openDiagramArcOptionEditor()
			.deleteIdentifierOption();

		/* Check that all arcs have disappeared */
		findWidget("Prefilled Diagram V2")
			.getNumberOfArcs()
			.should.eql(0);
	}
);
