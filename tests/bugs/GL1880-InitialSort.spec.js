/*!
 * @AIMMS_FILE=models/Bugs/GL1880-InitialSort/InitialSort.aimms
 */

scenario(
	"GL1880 - Original problem noticed by Fuji -> Table with sorted column does not apply the sort if the Table is empty upon page enter and only filled by an action on the page.",
	() => {
		loadPage("Main Project/home");

		// Check that the table is indeed empty upon entering the page
		findWidget("Pee").getEmptyWidgetMessage().should.exist;

		// Click on the 'Assign' button
		findWidget("Assign").click();

		// Verify that the table has content...
		findWidget("Pee").getEmptyWidgetMessage().should.not.exist;

		// ... and that it is sorted descending on the only column
		findWidget("Pee")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("6.00");

		findWidget("Pee")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("5.00");

		findWidget("Pee")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("4.00");

		findWidget("Pee")
			.getCell(3, 0)
			.getValue()
			.should.be.equal("3.00");

		findWidget("Pee")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("2.00");

		findWidget("Pee")
			.getCell(5, 0)
			.getValue()
			.should.be.equal("1.00");
	}
);
