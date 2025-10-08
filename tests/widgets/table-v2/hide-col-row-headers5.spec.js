/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario("Hide row headers in a table showing a two-dimensional parameter, basic scenario", () => {
	loadPage("Main Project/home?table-v2=true");

	findWidget("TwoDim")
		.getRowHeaderCells(0, 0, 5)
		.should.eql(["SomeValue", "SomeValue", "SomeValue", "SomeValue", "SomeValue", "SomeValue"]);

	findWidget("TwoDim")
		.getRowHeaderCells(1, 0, 5)
		.should.eql([
			"Frankfurt (Main)",
			"Frankfurt (Oder)",
			"Berlin",
			"Hamburg",
			"Hannover",
			"Bremen",
		]);

	findWidget("TwoDim")
		.getRowHeaderTitles()
		.should.eql(["Identifier", "Cities"]);

	// Hide the first row header column
	findWidget("TwoDim")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 1,
				visibility: "Hide",
			},
		]);

	findWidget("TwoDim")
		.getRowHeaderCells(0, 0, 5)
		.should.eql([
			"Frankfurt (Main)",
			"Frankfurt (Oder)",
			"Berlin",
			"Hamburg",
			"Hannover",
			"Bremen",
		]);

	findWidget("TwoDim")
		.getRowHeaderTitles()
		.should.eql("Cities");

	// Show the first row header column again
	findWidget("TwoDim")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 1,
				visibility: "Show",
			},
		]);

	findWidget("TwoDim")
		.getRowHeaderCells(0, 0, 5)
		.should.eql(["SomeValue", "SomeValue", "SomeValue", "SomeValue", "SomeValue", "SomeValue"]);

	findWidget("TwoDim")
		.getRowHeaderCells(1, 0, 5)
		.should.eql([
			"Frankfurt (Main)",
			"Frankfurt (Oder)",
			"Berlin",
			"Hamburg",
			"Hannover",
			"Bremen",
		]);

	findWidget("TwoDim")
		.getRowHeaderTitles()
		.should.eql(["Identifier", "Cities"]);
});
