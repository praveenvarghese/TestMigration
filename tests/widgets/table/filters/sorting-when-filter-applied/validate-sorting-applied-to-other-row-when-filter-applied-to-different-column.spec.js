/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Validating sorting can be applied non filtered row", () => {
	loadPage("Main Project/filterTable");

	findWidget("filterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterTable")
		.getRowHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(false);

	let expected_values = [
		["8.00", "1.00", "3.00", "4.00", "7.00", "8.00", "5.00", "1.00", "8.00", "1.00"],
		["8.00", "3.00", "2.00", "0.00", "8.00", "4.00", "8.00", "1.00", "5.00", "6.00"],
	];

	findWidget("filterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterTable").sortRow(0, "increase");

	expected_values = [
		["1.00", "1.00", "1.00", "3.00", "4.00", "5.00", "7.00", "8.00", "8.00", "8.00"],
		["3.00", "1.00", "6.00", "2.00", "0.00", "8.00", "8.00", "8.00", "4.00", "5.00"],
	];

	findWidget("filterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filterTable")
		.getRowHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

	findWidget("filterTable")
		.getColHeaderCell(0, 7)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterTable").getColFilter(7);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "01",
				rule: "is greater than (>)",
				value: "5",
				//status: "active",
			},
			{
				type: "column",
				field: "01",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("filterTable")
		.getRowHeaderCell(0, 0)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

	findWidget("filterTable")
		.getColHeaderCell(0, 7)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filterTable").sortRow(0, "decrease");

	findWidget("filterTable")
		.getRowHeaderCell(0, 0)
		.hasFlags(["sortedDecreasing"])
		.should.be.equal(true);

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [
		["8.00", "8.00", "8.00", "7.00", "5.00", "4.00", "3.00", "1.00", "1.00", "1.00"],
		["8.00", "4.00", "5.00", "8.00", "8.00", "0.00", "2.00", "3.00", "1.00", "6.00"],
	];

	findWidget("filterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
