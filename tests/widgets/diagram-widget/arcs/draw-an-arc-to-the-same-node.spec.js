/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Validate whether the removal of Arcs works.", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(5);

	/* Make sure the expected 5 arcs are displayed on the initial diagram */
	findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-1", "Suppliers3-1");

	findWidget("Prefilled Diagram V2")
		.getNumberOfArcs()
		.should.be.equal(6);
});
