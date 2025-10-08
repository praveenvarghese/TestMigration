/*!
 * @AIMMS_FILE=models/Miscellaneous/Miscellaneous.aimms
 */

scenario("Table with single row filter and single column filter in the same table", () => {
	loadPage("Main Project/table-page?_aimms_only_data_filter=true");

	findWidget("filter-table")
		.getTableFilterButton()
		.should.be.eql("None");

	let expected_values = [
		["bangalore1", "delhi1", "chennai1", "cochin1", "tumkur1"],
		["hebbal1", "sarjapur1", "madras1", "bombay1", "mumbai1"],
		["kolkata1", "calicut1", "hyderabad1", "vishakapattanam1", "pune1"],
		["baroda1", "kannur1", "trivandrum1", "panajim1", "hubli1"],
		["dharwad1", "mysore1", "hindupur1", "indore1", "shimla11"],
	];

	findWidget("filter-table")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filter-table")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("filter-table")
		.getRowHeaderCell(1, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("filter-table").getRowFilter(1);

	getFilter().addFilter({ rule: "contains", value: "hebbal" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Employer-2",
				rule: "contains",
				value: "hebbal",
				//status: "active",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("filter-table")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filter-table")
		.getRowHeaderCell(1, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filter-table")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("filter-table").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Employer-2",
				rule: "contains",
				value: "hebbal",
				//status: "active",
			},
			{
				type: "column",
				field: "Employee-1",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	getFilter().addFilter({ rule: "contains", value: "bangalore" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Employer-2",
				rule: "contains",
				value: "hebbal",
				//status: "active",
			},
			{
				type: "column",
				field: "Employee-1",
				rule: "contains",
				value: "bangalore",
				//status: "active",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("filter-table")
		.getTableFilterButton()
		.should.not.be.eql("None");

	// findWidget("filter-table")
	// 	.getRowHeaderCell(0, 0)
	// 	.hasFlags(["filtered"])
	// 	.should.be.equal(true);

	findWidget("filter-table")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["bangalore1"]];

	findWidget("filter-table")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filter-table").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Employer-2",
				rule: "contains",
				value: "hebbal",
				//status: "active",
			},
			{
				type: "column",
				field: "Employee-1",
				rule: "contains",
				value: "bangalore",
				//status: "active",
			},
			{
				type: "column",
				field: "Employee-1",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("filter-table").getRowFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Employer-2",
				rule: "contains",
				value: "hebbal",
				//status: "active",
			},
			{
				type: "column",
				field: "Employee-1",
				rule: "contains",
				value: "bangalore",
				//status: "active",
			},
			{
				type: "row",
				field: "Employer-1",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	openAppManager().navigateToPage("Main Project/home");

	getAppManager().navigateToPage("Main Project/table-page");

	closeAppManager();

	findWidget("filter-table")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("filter-table").mouseHover();

	findWidget("filter-table")
		.getTableFilterButton()
		.should.not.be.eql("None");

	// findWidget("filter-table")
	// 	.getRowHeaderCell(0, 0)
	// 	.hasFlags(["filtered"])
	// 	.should.be.equal(true);

	findWidget("filter-table")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("filter-table").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Employer-2",
				rule: "contains",
				value: "hebbal",
				//status: "active",
			},
			{
				type: "column",
				field: "Employee-1",
				rule: "contains",
				value: "bangalore",
				//status: "active",
			},
			{
				type: "column",
				field: "Employee-1",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("filter-table").getRowFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Employer-2",
				rule: "contains",
				value: "hebbal",
				//status: "active",
			},
			{
				type: "column",
				field: "Employee-1",
				rule: "contains",
				value: "bangalore",
				//status: "active",
			},
			{
				type: "row",
				field: "Employer-1",
				rule: "is equal to (=)",
				value: "",
			},
		]);
});
