/*!
 * @AIMMS_FILE=models/Bugs/GL665-EmptyTableCausedByNewlinesInDomainCondition/FujiEmptyTableReproductuin.aimms
 */

scenario(
	"GL665 Having newlines in a domain condition made a table become completely empty (in the Fuji model) in AIMMS 4.60.0",
	() => {
		loadPage("Main Project/home");

		// The top left cell is the only cell which should have the annotation "edited". The other five cells should not.
		findWidget("Country Data")
			.getNumRowsInGridViewport()
			.should.be.equal(4);

		findWidget("Country Data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("Country Data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("2.00");

		findWidget("Country Data")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("3.00");

		findWidget("Country Data")
			.getCell(3, 0)
			.getValue()
			.should.be.equal("5.00");
	}
);
