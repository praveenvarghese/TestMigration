/*!
 * @AIMMS_FILE=models/Diagram/Diagram.aimms
 */

scenario("Check that the diagram header title is displayed", () => {
	loadPage("Main Project/home");

	findWidget("DataCheck1")
		.getScalarCell("DiagramTitle", { mode: "multiple" })
		.getValue()
		.should.eql("Supply Chain Network");

	findWidget("NetworkDiagram")
		.getTitle()
		.should.eql("Supply Chain Network");

	findWidget("DataCheck1")
		.getScalarCell("DiagramTitle", { mode: "multiple" })
		.setValue("Network Diagram");

	findWidget("NetworkDiagram")
		.getTitle()
		.should.eql("Network Diagram");
});
