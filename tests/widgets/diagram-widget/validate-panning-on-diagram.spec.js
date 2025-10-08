/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

		// validate the center.x, center.y, zoom value
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Visible",
					NewOptionType: false,
					Value: "",
					Index: 0,
					"Option-Entry Action Tooltip": "",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Title",
					NewOptionType: true,
					Value: "",
					Index: 1,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "center.x",
					NewOptionType: true,
					Value: "4",
					Index: 2,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "center.y",
					NewOptionType: true,
					Value: "20.16",
					Index: 3,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "Zoom",
					NewOptionType: true,
					Value: "5",
					Index: 4,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
			]);

		findWidget("s2").closeOptionDialog();

		// do a mouse scroll down for zoom in
		findWidget("s2").panDiagram(250, 250);

		// validate the center.x, center.y, zoom value
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "center.x",
					Value: "154",
				},
				{
					Name: "center.y",
					Value: "140.16",
				},
				{
					Name: "Zoom",
					Value: "5",
				},
			]);

		findWidget("s2").closeOptionDialog();
	}
);
