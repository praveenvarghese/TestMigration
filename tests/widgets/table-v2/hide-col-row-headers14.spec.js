/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario(
	"TF: Hiding all indices still left open an empty row header column if the IDENTIFIER-SET index was pivoted to the Totals section.",
	() => {
		loadPage("Main Project/home?table-v2=true");

		// Upon entering the page, the identifier has the default value 'Show'; check the effect.
		findWidget("OneDim")
			.getRowHeaderTitles()
			.should.eql(["Identifier", "Cities"]);

		findWidget("OneDim")
			.getColHeaderTitles()
			.should.eql([]);

		// Hide both row headers.
		findWidget("ShowHide").setValue("hide");

		// Verify the result.
		findWidget("OneDim")
			.getRowHeaderTitles()
			.should.eql([]);

		findWidget("OneDim")
			.getColHeaderTitles()
			.should.eql([]);

		// Pivot the IDENTIFIER-SET to the Totals section.
		findWidget("OneDim")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("Totals");

		// Verify that all headers are still gone.
		findWidget("OneDim")
			.getRowHeaderTitles()
			.should.eql([]);

		findWidget("OneDim")
			.getColHeaderTitles()
			.should.eql([]);
	}
);
