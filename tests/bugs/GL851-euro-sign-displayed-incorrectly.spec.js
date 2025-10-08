/*!
 * @AIMMS_FILE=models/Bugs/GL851-IncorrectlyDisplayedEuroSign/GL851-IncorrectlyDisplayedEuroSign.aimms
 */

scenario(
	"GL851 The Euro sign was displayed incorrectly (as a diamond with a question mark) in some intermediate AIMMS version",
	() => {
		loadPage("Main Project/home");

		// Check the name columns header, where the euro sign is in as well
		findWidget("Prices")
			.getColHeaderCell(0, 0)
			.getText()
			.should.be.equal("Price [€]");

		// Also check one of the three values in the table itself (there the euro is displayed as the unit)

		findWidget("Prices")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("60.00 €");
	}
);
