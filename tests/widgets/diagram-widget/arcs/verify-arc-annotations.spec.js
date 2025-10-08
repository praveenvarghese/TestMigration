/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Validate whether the removal of Arcs works.", () => {
	loadPage("Main Project/PageWithArcs");

	findWidget("Prefilled Diagram V2")
		.findArc("Suppliers3-2", "Warehouses3-2")
		.getAnnotations()
		.should.include.something.like("annotation-anno-Suppliers3-2-Warehouses3-2");
});
