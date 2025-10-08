/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario(
	"Ticket #840: Using a model identifier to show/hide indices (as opposed to a literal value).",
	() => {
		loadPage("Main Project/home?table-v2=true");

		findWidget("OneDim")
			.getColHeaderTitles()
			.should.eql([]);

		findWidget("OneDim")
			.getColHeaderTitles()
			.should.eql([]);

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

		// And flip back to the original situation.
		// Hide both row headers.
		findWidget("ShowHide").setValue("show");

		findWidget("OneDim")
			.getRowHeaderTitles()
			.should.eql(["Identifier", "Cities"]);

		findWidget("OneDim")
			.getColHeaderTitles()
			.should.eql([]);
	}
);
