/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario("Hide row headers, basic scenario", () => {
	loadPage("Main Project/home?table-v2=true");

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

	// Hide the first row header column
	findWidget("German Cities")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 0,
				visibility: "Hide",
			},
		]);

	findWidget("German Cities")
		.getRowHeaderCells(0, 0, 5)
		.should.eql(["-", "-", "-", "-", "-", "-"]);

	// Show the first row header column again
	findWidget("German Cities")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 0,
				visibility: "Show",
			},
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
});
