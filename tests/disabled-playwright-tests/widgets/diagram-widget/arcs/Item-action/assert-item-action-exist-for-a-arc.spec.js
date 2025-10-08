/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert Item Action menu exist and visible", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("Prefilled Diagram V2")
		.getItemActions()
		.isItemActionDisplayed().should.be.true;

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-1", "Warehouses3-1")
		.hoverOnArc()
		.rightClickOnArc()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Arc Item Action", icon: "aimms-home", state: "active" },
			{ title: "Edit Arc Info", icon: "aimms-pen", state: "active" },
		]);

	findWidget("Prefilled Diagram V2").drawAnArc("Warehouses3-4", "Customers3-2");

	findWidget("Prefilled Diagram V2")
		.findArc("Warehouses3-4", "Customers3-2")
		.hoverOnArc()
		.rightClickOnArc();

	findWidget("Prefilled Diagram V2")
		.getItemActions()
		.isItemActionDisplayed().should.be.true;

	findWidget("Prefilled Diagram V2")
		.findArc("Warehouses3-4", "Customers3-2")
		.hoverOnArc()
		.rightClickOnArc()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Arc Item Action", icon: "aimms-home", state: "active" },
			{ title: "Edit Arc Info", icon: "aimms-pen", state: "active" },
		]);
});
