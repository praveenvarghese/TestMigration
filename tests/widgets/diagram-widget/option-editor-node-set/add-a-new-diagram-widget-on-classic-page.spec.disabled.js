/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/Diagram_On_Classic");

		createWidget("diagram", [], "Diagram On Classic");

		findWidget("Diagram On Classic")
			.getEmptyMessage()
			.should.eql(
				`Incompatible (combinationchart) Widget! Please convert the page to a Grid Layout for compatibility.`
			);
	}
);
