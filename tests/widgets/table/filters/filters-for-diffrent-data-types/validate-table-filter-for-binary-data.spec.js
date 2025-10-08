/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating table filter when binary data is present", () => {
	loadPage("Main Project/home");

	findWidget("binaryTable_1")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("binaryTable_1")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [
		["1.00", "0.00", "1.00", "0.00"],
		["1.00", "1.00", "0.00", "1.00"],
		["1.00", "1.00", "1.00", "0.00"],
	];

	findWidget("binaryTable_1")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("binaryTable_1").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Winter",
				rule: "is equal to (=)",
				value: "1",
				//status: "active",
			},
			{
				type: "column",
				field: "Winter",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "is equal to (=)", value: "0" });

	findDialog()
		.findButton("Apply and Close")
		.click();

	expected_values = [
		["0.00", "1.00", "0.00", "1.00"],
		["0.00", "0.00", "1.00", "1.00"],
	];

	findWidget("binaryTable_1")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("binaryTable_1")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("binaryTable_1")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("binaryTable_1").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Winter",
				rule: "is equal to (=)",
				value: "0",
				//status: "active",
			},
			{
				type: "column",
				field: "Winter",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("binaryTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("binaryTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["1.00"]];

	findWidget("binaryTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("binaryTable").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "-",
				rule: "is equal to (=)",
				value: "1",
				//status: "active",
			},
			{
				type: "column",
				field: "-",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "is equal to (=)", value: "0" });

	findDialog()
		.findButton("Apply and Close")
		.click();

	expected_values = [["0.00"]];

	findWidget("binaryTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
