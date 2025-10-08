/*!
 * @AIMMS_FILE=models/ReverseLinkTest/ReverseLinkTest.aimms
 */

scenario(
	"Check the reverse store focus in a table with multiple one-dimensional identifiers",
	() => {
		loadPage("Main Project/home?table-v2=false");

		findWidget("Selection").setValue("SelectedCountry", "Austria");
		findWidget("Selection").setValue("SelectedIdentifier", "Ranking");

		findWidget("Country Data")
			.getCell(2, 1)
			.isFocused()
			.should.equal(true);

		findWidget("Selection").setValue("SelectedCountry", "Switzerland");
		findWidget("Selection").setValue("SelectedIdentifier", "Neighbour");

		findWidget("Country Data")
			.getCell(2, 1)
			.isFocused()
			.should.equal(false);

		findWidget("Country Data")
			.getCell(6, 2)
			.isFocused()
			.should.equal(true);

		findWidget("Selection").setValue("SelectedCountry", "Germany");
		findWidget("Selection").setValue("SelectedIdentifier", "Capital");

		findWidget("Country Data")
			.getCell(6, 2)
			.isFocused()
			.should.equal(false);

		findWidget("Country Data")
			.getCell(1, 0)
			.isFocused()
			.should.equal(true);
	}
);
