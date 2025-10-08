/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario("Asserting that data headers other than 'Identifiers' is filter ready.", () => {
	loadPage("Main Project/Widgets/Tables/SpecialTable");

	/* Make sure no filtering rules are in place */
	findWidget("SpecialTable")
		.getTableFilterButton()
		.should.be.eql("None");

	/* Add a filter rule on "Identifier" header */
	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "is", itemsSearched: ["$(tring)"], isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	/* Assert filtered indication is available to Table widget */
	findWidget("SpecialTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["60", "142", "107", "302", "315", "393", "384", "246", "335"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "is not", itemsSearched: ["$(tring)"], isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["350", "247", "242", "283", "346", "101", "153", "81", "56"],
			["107", "319", "70", "295", "130", "290", "54", "59", "381"],
			["142", "122", "279", "226", "394", "259", "182", "51", "141"],
			["179", "121", "263", "197", "112", "162", "299", "344", "191"],
			["200", "225", "248", "347", "170", "172", "82", "90", "336"],
			["102", "221", "78", "73", "53", "59", "182", "167", "301"],
			["141", "195", "299", "179", "288", "188", "239", "232", "115"],
			["277", "343", "230", "211", "162", "382", "301", "372", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "contains", value: ")", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["60", "142", "107", "302", "315", "393", "384", "246", "335"],
			["277", "343", "230", "211", "162", "382", "301", "372", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "does not contain", value: "(", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["350", "247", "242", "283", "346", "101", "153", "81", "56"],
			["107", "319", "70", "295", "130", "290", "54", "59", "381"],
			["142", "122", "279", "226", "394", "259", "182", "51", "141"],
			["179", "121", "263", "197", "112", "162", "299", "344", "191"],
			["200", "225", "248", "347", "170", "172", "82", "90", "336"],
			["102", "221", "78", "73", "53", "59", "182", "167", "301"],
			["141", "195", "299", "179", "288", "188", "239", "232", "115"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "matches regex", value: "@", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["350", "247", "242", "283", "346", "101", "153", "81", "56"],
			["277", "343", "230", "211", "162", "382", "301", "372", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "contains", value: "!", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["107", "319", "70", "295", "130", "290", "54", "59", "381"],
			["277", "343", "230", "211", "162", "382", "301", "372", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "contains", value: "#", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["142", "122", "279", "226", "394", "259", "182", "51", "141"],
			["277", "343", "230", "211", "162", "382", "301", "372", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "contains", value: "[", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["277", "343", "230", "211", "162", "382", "301", "372", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "contains", value: "]", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["277", "343", "230", "211", "162", "382", "301", "372", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "contains", value: "%", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["179", "121", "263", "197", "112", "162", "299", "344", "191"],
			["277", "343", "230", "211", "162", "382", "301", "372", "254"],
		]);
});
