/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario("Hide row headers in a table showing a two-dimensional parameter, then re-pivot", () => {
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

	// Hide the both row header columns
	findWidget("TwoDim")
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
		]);

	findWidget("TwoDim")
		.dragIndex("c1")
		.dropBefore("c2");

	findWidget("TwoDim")
		.getRowHeaderTitles()
		.should.eql("");

	findWidget("TwoDim")
		.getColHeaderTitles()
		.should.eql("Cities");

	findWidget("TwoDim")
		.getColHeaderTitles()
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
		.getRowHeaderCells(0, 0, 0)
		.should.eql(["SomeValue"]);

	findWidget("TwoDim")
		.getRowHeaderTitles()
		.should.eql("Identifier");

	findWidget("TwoDim")
		.getColHeaderTitles()
		.should.eql("Cities");
});
