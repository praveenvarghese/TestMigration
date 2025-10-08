/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario(
	"Table structural changes should fully update unfocused table and show reload button in focused table",
	() => {
		loadPage("Main Project/table/structural changes");

		findWidget("table-with-multiple-identifiers")
			.getCell(7, 1)
			.getValue()
			.should.be.equal("0.90");

		findWidget("copy-of-table-with-multiple-identifiers")
			.getCell(7, 1)
			.getValue()
			.should.be.equal("0.90");

		findWidget("table-with-multiple-identifiers")
			.getCell(4, 0)
			.setValue(false);

		findWidget("table-with-multiple-identifiers").getRefreshButton().should.exist;

		findWidget("copy-of-table-with-multiple-identifiers").getRefreshButton().should.not.exist;

		findWidget("table-with-multiple-identifiers")
			.getCell(7, 1)
			.getValue()
			.should.be.equal("0.90");

		findWidget("copy-of-table-with-multiple-identifiers")
			.getCell(6, 1)
			.getValue()
			.should.be.equal("0.90");
	}
);
