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

	getFilter().editFilter({ index: "0", rule: "does not contain", value: "lemon" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "yellow",
				rule: "does not contain",
				value: "lemon",
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

	openAppManager().navigateToPage("Main Project/home");

	openAppManager().navigateToPage("Main Project/TablePage");

	findWidget("pepperColourTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("pepperColourTable")
		.getColHeaderCell(0, 2)
		.hasFlags(["filtered"])
		.should.be.equal(true);

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
				rule: "does not contain",
				value: "lemon",
				//status: "active",
			},
		]);
	getFilter().editFilter({ index: "0", rule: "starts with", value: "c" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "yellow",
				rule: "starts with",
				value: "c",
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
				rule: "starts with",
				value: "c",
				//status: "active",
			},
			{
				type: "column",
				field: "yellow",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().editFilter({ index: "0", rule: "ends with", value: "o" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "yellow",
				rule: "ends with",
				value: "o",
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
		[
			"Colour - red green - Jalapeno",
			"Colour - green - Jalapeno",
			"Colour - yellow - Jalapeno",
		],
	];

	findWidget("pepperColourTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
