/*!
 * @AIMMS_FILE=models/Bugs/GL4830-SelectStoreFocusEP/Whiteboard.aimms
 */

scenario("GL4830 - Store focus select EP dropdown to show only EP in the compatible range", () => {
	loadPage("Main Project/home");

	findWidget("MyDiagram")
		.openDiagramNodeSetOptionEditor()
		.getOptionEntry(1, "Index")
		.clickToGetIdentifierSelectionDialog()
		.getStoreFocusDropdownList([{ index: "p" }])
		.should.eql(["AnotherProduction", "SelectedNode", "SelectedProduction"]);
});
