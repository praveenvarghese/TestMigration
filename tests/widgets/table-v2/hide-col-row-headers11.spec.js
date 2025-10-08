/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario(
	"Ticket #839: Hiding a smaller row header should result in the original width of the wider header that remains.",
	() => {
		loadPage("Main Project/home?table-v2=true");

		findWidget("TwoDim")
			.getRowHeaderTitles()
			.should.eql(["Identifier", "Cities"]);

		findWidget("TwoDim")
			.getRowHeaderWidth(0)
			.should.be.within(85, 90);

		findWidget("TwoDim")
			.getRowHeaderWidth(1)
			.should.be.within(200, 205);

		// Hide the first header column
		findWidget("TwoDim")
			.openIndexOptionEditor()
			.modifyIndices([
				{
					entry: 1,
					visibility: "Hide",
				},
			]);

		// Verify that the width of the now only row header column is as expected (i.e. the width of the previous 2nd column)
		findWidget("TwoDim")
			.getRowHeaderWidth(0)
			.should.be.within(200, 205);
	}
);
