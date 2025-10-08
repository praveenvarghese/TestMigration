/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating each string filter rules", () => {
	loadPage("Main Project/TablePage");

	findWidget("pepperColourTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("pepperColourTable")
		.getColHeaderCell(0, 2)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	let expected_values = [
		["Colour - red - Cayenne", "Colour - green - Cayenne", "Colour - yellow - Cayenne"],
		["Colour - red - Padron", "Colour - green - Padron", "Colour - yellow - Padron"],
		["Colour - red - Lemon", "Colour - green - Lemon", "Colour - yellow - Lemon"],
		[
			"Colour - red green - Jalapeno",
			"Colour - green - Jalapeno",
			"Colour - yellow - Jalapeno",
		],
		["Colour - red - Pimenton", "Colour - green - Pimenton", "Colour - yellow - Pimenton"],
	];

	findWidget("pepperColourTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("pepperColourTable").getColFilter(2);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "yellow",
				rule: "contains",
				value: "colour",
				//status: "active",
			},
			{
				type: "column",
				field: "yellow",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "is", value: "Colour - yellow - Lemon" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "yellow",
				rule: "is",
				value: "Colour - yellow - Lemon",
				//status: "active",
			},
			{
				type: "column",
				field: "yellow",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("pepperColourTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("pepperColourTable")
		.getColHeaderCell(0, 2)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [
		["Colour - red - Lemon", "Colour - green - Lemon", "Colour - yellow - Lemon"],
	];

	findWidget("pepperColourTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("pepperColourTable")
		.getTableFilterButton()
		.click();

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "yellow",
				rule: "is",
				value: "Colour - yellow - Lemon",
				//status: "active",
			},
		]);
	getFilter().editFilter({ index: "0", rule: "is not", value: "Colour - yellow - Lemon" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "yellow",
				rule: "is not",
				value: "Colour - yellow - Lemon",
				//status: "active",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("pepperColourTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("pepperColourTable")
		.getColHeaderCell(0, 2)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [
		["Colour - red - Cayenne", "Colour - green - Cayenne", "Colour - yellow - Cayenne"],
		["Colour - red - Padron", "Colour - green - Padron", "Colour - yellow - Padron"],
		[
			"Colour - red green - Jalapeno",
			"Colour - green - Jalapeno",
			"Colour - yellow - Jalapeno",
		],
		["Colour - red - Pimenton", "Colour - green - Pimenton", "Colour - yellow - Pimenton"],
	];

	findWidget("pepperColourTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
