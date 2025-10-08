/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		// clear the center.x
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("center.x")
			.clearValue();

		// Set the center.x
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("center.x")
			.setValue({
				value: "-100",
				valueType: "LITERAL",
				optionEditorType: "VALUE",
			});

		// clear the center.y
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("center.y")
			.clearValue();

		// Set the center.x
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("center.y")
			.setValue({
				value: "-250",
				valueType: "LITERAL",
				optionEditorType: "VALUE",
			});

		// clear the zoom
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Zoom")
			.clearValue();

		// Set the zoom
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Zoom")
			.setValue({
				value: "2",
				valueType: "LITERAL",
				optionEditorType: "VALUE",
			});

		// validate the center.x saved value
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "center.x",
					Value: "-100",
				},
				{
					Name: "center.y",
					Value: "-250",
				},
				{
					Name: "Zoom",
					Value: "2",
				},
			]);
	}
);
