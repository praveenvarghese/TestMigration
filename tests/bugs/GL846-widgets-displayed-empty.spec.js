/*!
 * @AIMMS_FILE=models/Bugs/GL846-WidgetsDisplayedAsEmpty/WidgetsDisplayedAsEmpty.aimms
 */

scenario(
	"Ticket 846: Table and Line Chart were displayed empty, while data should be displayed.",
	() => {
		loadPage("Main Project/home");

		// Check a cell for data
		findWidget("Data Table")
			.getCell(1, 1)
			.getValue()
			.should.be.equal("5.00 Eur/te");

		// Check a row for no data
		findWidget("Data Table")
			.getCell(3, 0)
			.getValue()
			.should.be.equal("");

		findWidget("Data Table")
			.getCell(3, 1)
			.getValue()
			.should.be.equal("");

		// Check a line being displayed in the line chart
		findWidget("TheLines")
			.getXAxisElements()
			.should.have.numberOfItems(5);
	}
);
