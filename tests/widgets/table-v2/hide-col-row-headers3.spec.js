/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario("Hide the only column header of a Table, basic scenario", () => {
	loadPage("Main Project/home?table-v2=true");

	findWidget("German Cities")
		.getColHeaderCells(0, 0, 7)
		.should.eql([
			"-",
			"Frankfurt (Main)",
			"Frankfurt (Oder)",
			"Hamburg",
			"Hannover",
			"Bremen",
			"Stuttgart",
			"Kassel",
		]);

	// Hide the first (and only) column header row
	findWidget("German Cities")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 2,
				visibility: "Hide",
			},
		]);

	findWidget("German Cities")
		.getNumRowsInColHeaderViewport()
		.should.eql(0);

	// Show the column header column again
	findWidget("German Cities").closeOptionDialog();

	findWidget("German Cities")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 2,
				visibility: "Show",
			},
		]);

	findWidget("German Cities")
		.getColHeaderCells(0, 0, 7)
		.should.eql([
			"-",
			"Frankfurt (Main)",
			"Frankfurt (Oder)",
			"Hamburg",
			"Hannover",
			"Bremen",
			"Stuttgart",
			"Kassel",
		]);
});
