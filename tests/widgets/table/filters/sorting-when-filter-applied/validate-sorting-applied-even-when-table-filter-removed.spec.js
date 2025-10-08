/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Validating sorting functionality when filter is removed", () => {
	loadPage("Main Project/filterTable");

	findWidget("filterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(false);

	const expected_values = [
		["8.00", "1.00", "3.00", "4.00", "7.00", "8.00", "5.00", "1.00", "8.00", "1.00"],
		["8.00", "3.00", "2.00", "0.00", "8.00", "4.00", "8.00", "1.00", "5.00", "6.00"],
	];

	findWidget("filterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterTable").sortColumn(0, "increase");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

	findWidget("filterTable").getColFilter(0);

	getFilter().clearAllFilters();

	findWidget("filterTable")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);
});
