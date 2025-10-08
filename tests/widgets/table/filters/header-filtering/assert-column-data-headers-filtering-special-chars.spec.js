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
	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

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
			["60"],
			["350"],
			["107"],
			["142"],
			["179"],
			["200"],
			["102"],
			["141"],
			["277"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "is not", itemsSearched: ["$(tring)"], isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["142", "107", "302", "315", "393", "384", "246", "335"],
			["247", "242", "283", "346", "101", "153", "81", "56"],
			["319", "70", "295", "130", "290", "54", "59", "381"],
			["122", "279", "226", "394", "259", "182", "51", "141"],
			["121", "263", "197", "112", "162", "299", "344", "191"],
			["225", "248", "347", "170", "172", "82", "90", "336"],
			["221", "78", "73", "53", "59", "182", "167", "301"],
			["195", "299", "179", "288", "188", "239", "232", "115"],
			["343", "230", "211", "162", "382", "301", "372", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "contains", value: ")", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["60", "335"],
			["350", "56"],
			["107", "381"],
			["142", "141"],
			["179", "191"],
			["200", "336"],
			["102", "301"],
			["141", "115"],
			["277", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "does not contain", value: "(", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["142", "107", "302", "315", "393", "384", "246"],
			["247", "242", "283", "346", "101", "153", "81"],
			["319", "70", "295", "130", "290", "54", "59"],
			["122", "279", "226", "394", "259", "182", "51"],
			["121", "263", "197", "112", "162", "299", "344"],
			["225", "248", "347", "170", "172", "82", "90"],
			["221", "78", "73", "53", "59", "182", "167"],
			["195", "299", "179", "288", "188", "239", "232"],
			["343", "230", "211", "162", "382", "301", "372"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "matches regex", value: "@", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["142", "335"],
			["247", "56"],
			["319", "381"],
			["122", "141"],
			["121", "191"],
			["225", "336"],
			["221", "301"],
			["195", "115"],
			["343", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "contains", value: "!", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["107", "335"],
			["242", "56"],
			["70", "381"],
			["279", "141"],
			["263", "191"],
			["248", "336"],
			["78", "301"],
			["299", "115"],
			["230", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "contains", value: "#", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["302", "335"],
			["283", "56"],
			["295", "381"],
			["226", "141"],
			["197", "191"],
			["347", "336"],
			["73", "301"],
			["179", "115"],
			["211", "254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "contains", value: "[", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["335"],
			["56"],
			["381"],
			["141"],
			["191"],
			["336"],
			["301"],
			["115"],
			["254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "contains", value: "]", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["335"],
			["56"],
			["381"],
			["141"],
			["191"],
			["336"],
			["301"],
			["115"],
			["254"],
		]);

	findWidget("SpecialTable")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("SpecialTable").getDataHeaderFilter(0, 0);

	getFilter().addFilter({ rule: "contains", value: "%", isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	// Assert the resulting data
	findWidget("SpecialTable")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["315", "335"],
			["346", "56"],
			["130", "381"],
			["394", "141"],
			["112", "191"],
			["170", "336"],
			["53", "301"],
			["288", "115"],
			["162", "254"],
		]);
});
