/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario("Hide all column and row headers from a Table, basic scenario", () => {
	loadPage("Main Project/home?table-v2=true");

	findWidget("German Cities")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 3,
				visibility: "Show",
			},
		]);

	findWidget("German Cities")
		.getRowHeaderTitles()
		.should.eql(["Identifier", "Cities", "Cities"]);

	findWidget("German Cities")
		.getColHeaderTitles()
		.should.eql("Cities");

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

	findWidget("German Cities")
		.getRowHeaderCells(0, 0, 5)
		.should.eql([
			"NumberOfInhabitants",
			"NumberOfInhabitants",
			"NumberOfInhabitants",
			"NumberOfInhabitants",
			"NumberOfInhabitants",
			"NumberOfInhabitants",
		]);

	findWidget("German Cities")
		.getRowHeaderCells(1, 0, 5)
		.should.eql(["-", "-", "-", "-", "-", "-"]);

	findWidget("German Cities")
		.getRowHeaderCells(2, 0, 5)
		.should.eql([
			"Frankfurt (Main)",
			"Frankfurt (Oder)",
			"Berlin",
			"Hamburg",
			"Hannover",
			"Bremen",
		]);

	// Hide all row and column headers
	findWidget("German Cities")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 0,
				visibility: "Hide",
			},
			{
				entry: 1,
				visibility: "Hide",
			},
			{
				entry: 2,
				visibility: "Hide",
			},
			{
				entry: 3,
				visibility: "Hide",
			},
		]);

	findWidget("German Cities")
		.getRowHeaderTitles()
		.should.eql([]);

	findWidget("German Cities")
		.getColHeaderTitles()
		.should.eql([]);

	findWidget("German Cities")
		.getNumRowsInColHeaderViewport()
		.should.eql(0);

	findWidget("German Cities")
		.getNumColsInRowHeaderViewport()
		.should.eql(0);

	// Show all headers again
	findWidget("German Cities").closeOptionDialog();

	findWidget("German Cities")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 0,
				visibility: "Show",
			},
			{
				entry: 1,
				visibility: "Show",
			},
			{
				entry: 2,
				visibility: "Show",
			},
			{
				entry: 3,
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

	findWidget("German Cities")
		.getRowHeaderCells(0, 0, 5)
		.should.eql([
			"NumberOfInhabitants",
			"NumberOfInhabitants",
			"NumberOfInhabitants",
			"NumberOfInhabitants",
			"NumberOfInhabitants",
			"NumberOfInhabitants",
		]);

	findWidget("German Cities")
		.getRowHeaderCells(1, 0, 5)
		.should.eql(["-", "-", "-", "-", "-", "-"]);

	findWidget("German Cities")
		.getRowHeaderCells(2, 0, 5)
		.should.eql([
			"Frankfurt (Main)",
			"Frankfurt (Oder)",
			"Berlin",
			"Hamburg",
			"Hannover",
			"Bremen",
		]);
});
