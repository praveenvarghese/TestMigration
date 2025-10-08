/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"Customer-ticket#3964 - Filtering issue on Table with identifiers of different domain.",
	() => {
		loadPage("Main Project/Bugs/c3964");

		// Asserting data on the table, with its decimal values.
		findWidget("c3964")
			.getGridValues()
			.should.be.eql([
				["45.90", "-363.50", "-155.26", "-425.09", "416.12"],
				["259.64", "-372.80", "-251.71", "357.39", "-71.21"],
				["368.74", "-151.48", "308.48", "-344.12", "229.47"],
			]);
	}
);
