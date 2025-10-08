/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Validate whether the removal of Arcs works.", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("Prefilled Diagram V2")
		.getItemActions()
		.getItemActionDetails(1)
		.click();

	findWidget("Arc Edit").setValue("This is a Label for Arc");

	getDialog()
		.findButton("OK")
		.click();

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.arcLabelIsVisible().should.be.true;

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.getArcLabelName()
		.should.be.equal("This is a Label for Arc");

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("Prefilled Diagram V2")
		.getItemActions()
		.getItemActionDetails(1)
		.click();

	findWidget("Arc Edit").setValue(" ");

	findDialog()
		.findButton("OK")
		.click();

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.getArcLabelName()
		.should.be.equal(""); // .arcLabelIsVisible().should.be.false;
});
