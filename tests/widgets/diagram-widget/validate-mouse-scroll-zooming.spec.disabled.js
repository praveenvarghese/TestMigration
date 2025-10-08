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
					Name: "center.x",
					Value: "-744",
				},
				{
					Name: "center.y",
					Value: "-308",
				},
				{
					Name: "Zoom",
					Value: "4",
				},
			]);

		// do a mouse scroll down for zoom in
		findWidget("s2").scrollZoomIn(-500);

		// validate the center.x, center.y, zoom value
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "center.x",
					Value: "-744",
				},
				{
					Name: "center.y",
					Value: "-308",
				},
				{
					Name: "Zoom",
					Value: "3",
				},
			]);

		// do a mouse scroll down for zoom out
		findWidget("s2").scrollZoomOut(500);

		// validate the center.x, center.y, zoom value
		findWidget("s2")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "center.x",
					Value: "-744",
				},
				{
					Name: "center.y",
					Value: "-308",
				},
				{
					Name: "Zoom",
					Value: "5",
				},
			]);
	}
);
