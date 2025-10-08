/*!
 * @AIMMS_FILE=models/ForceReadOnly/ForceReadOnly.aimms
 */

scenario("Setting a few identifiers to read only by using a literal value for the option.", () => {
	loadPage("Main Project/home?table-v2=true");

	// Check a Table which has set two identifiers to read-only, one to default and the other identifier IS a read-only identifier.
	findWidget("Tab")
		.getGridValues()
		.should.shallowDeepEqual([
			["83.00", "8.00", "26.00", "40.00", "69.00", "82.00"],
			["Haarlem", "Barcelona", "Wenen", "Killarney", "Jeruzalem", "Limburg"],
			["The Netherlands", "Spain", "Austria", "Ireland", "Israel", "Germany"],
			["1.00", "0.00", "0.00", "0.00", "0.00", "0.00"],
			["0.00", "1.00", "0.00", "0.00", "0.00", "0.00"],
			["0.00", "0.00", "0.00", "0.00", "0.00", "1.00"],
			["0.00", "0.00", "0.00", "0.00", "1.00", "0.00"],
			["0.00", "0.00", "1.00", "0.00", "0.00", "0.00"],
			["0.00", "0.00", "0.00", "1.00", "0.00", "0.00"],
		]);

	const assertRowIsReadOnly = function(tableName, row) {
		for (const col of [0, 1, 2, 3, 4, 5]) {
			findWidget(tableName)
				.getCell(row, col)
				.hasFlags(["readOnly"])
				.should.be.equal(true);
		}
	};

	const assertRowIsWritable = function(tableName, row) {
		for (const col of [0, 1, 2, 3, 4, 5]) {
			findWidget(tableName)
				.getCell(row, col)
				.hasFlags(["readOnly"])
				.should.be.equal(false);
		}
	};

	assertRowIsWritable("Tab", 0);
	for (const row of [1, 2, 3, 4, 5, 6, 7, 8]) {
		assertRowIsReadOnly("Tab", row);
	}
});
