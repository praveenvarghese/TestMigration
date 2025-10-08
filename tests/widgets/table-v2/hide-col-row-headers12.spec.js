/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario(
	"At some point, after pivoting all indexes into the row header, setting 1 index to hide removed all indices with the same root set (in this case, hiding c1 also hid c2).",
	() => {
		loadPage("Main Project/home?table-v2=true");

		findWidget("TwoDim")
			.getRowHeaderTitles()
			.should.eql(["Identifier", "Cities"]);

		findWidget("TwoDim")
			.dragIndex("c2")
			.dropAfter("c1");

		findWidget("TwoDim")
			.getRowHeaderTitles()
			.should.eql(["Identifier", "Cities", "Cities"]);

		// Hide the first row header column (c1)
		findWidget("TwoDim")
			.openIndexOptionEditor()
			.modifyIndices([
				{
					entry: 0,
					visibility: "Hide",
				},
			]);

		// Verify that the other Cities index (c2) is still present in the row header.
		findWidget("TwoDim")
			.getRowHeaderTitles()
			.should.eql(["Identifier", "Cities"]);
	}
);
