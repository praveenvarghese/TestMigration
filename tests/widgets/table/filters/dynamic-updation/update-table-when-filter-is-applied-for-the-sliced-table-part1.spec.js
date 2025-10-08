/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating sliced table content updation when filter is applied", () => {
	loadPage("Main Project/TablePage?_aimms_only_data_filter=true");

	findWidget("Current Selections")
		.getCell(1, 0)
		.getValue()
		.should.contain("Cayenne");

	findWidget("ShadowYield")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("ShadowYield")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [["Colour - red - Cayenne"]];

	findWidget("ShadowYield")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("ShadowYield").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "-",
				rule: "contains",
				value: "red",
				//status: "active",
			},
			{
				type: "column",
				field: "-",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("pepperColourTable")
		.getCell(0, 0)
		.setValue("Colour - red - Pineapple");

	findWidget("ShadowYield")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("ShadowYield")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["Colour - red - Pineapple"]];

	findWidget("ShadowYield")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("ShadowYield").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "-",
				rule: "contains",
				value: "red",
				//status: "active",
			},
			{
				type: "column",
				field: "-",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	openAppManager().navigateToPage("Main Project/home");

	openAppManager().navigateToPage("Main Project/TablePage");

	findWidget("ShadowYield")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("ShadowYield")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["Colour - red - Pineapple"]];

	findWidget("ShadowYield")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("ShadowYield").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "-",
				rule: "contains",
				value: "red",
				//status: "active",
			},
			{
				type: "column",
				field: "-",
				rule: "is equal to (=)",
				value: "",
			},
		]);
});
