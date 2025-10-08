/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating table filter when decimal data is in the table", () => {
	loadPage("Main Project/newFilterPage");

	findWidget("DecimalFilter")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("DecimalFilter").getEmptyWidgetMessage().should.exist;

	findWidget("DecimalFilter")
		.getTableFilterButton()
		.click();

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "testDecimals",
				rule: "is equal to (=)",
				value: "8.56",
				//status: "active",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "is equal to (=)", value: "-8.564764" });

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("DecimalFilter")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("DecimalFilter")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [["-8.56"]];

	findWidget("DecimalFilter")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("DecimalFilter")
		.getTableFilterButton()
		.click();

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "testDecimals",
				rule: "is equal to (=)",
				value: "-8.564764",
				//status: "active",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "is greater than (>)", value: "-5" });

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("DecimalFilter")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("DecimalFilter")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["-4.26"], ["0.26"], ["1.55"]];

	findWidget("DecimalFilter")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
