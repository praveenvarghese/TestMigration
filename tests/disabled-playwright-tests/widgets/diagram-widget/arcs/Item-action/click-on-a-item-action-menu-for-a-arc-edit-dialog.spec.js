/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert edit arc info via dialog", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("Prefilled Diagram V2")
		.getItemActions()
		.getItemActionDetails(1)
		.click();

	findDialog()
		.getTitle()
		.should.equal(`Edit Arc Info`);

	getDialog().should.exist;

	findDialog().findButton("OK");
});
