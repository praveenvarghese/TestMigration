/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("s2")
			.openDiagramArcOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Identifier",
					NewOptionType: true,
					Value: "",
					Index: 0,
					"Option-Entry Action Tooltip": "",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Label",
					NewOptionType: true,
					Value: "",
					Index: 1,
					"Option-Entry Action Tooltip": "",
					"Option-Entry Action Icon": "",
				},
			]);
	}
);
