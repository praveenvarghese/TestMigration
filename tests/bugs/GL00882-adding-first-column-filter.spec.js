/*!
 * @AIMMS_FILE=models/Bugs/GL00882-FilterTableIndices/FilterTableIndices.aimms
 */

scenario("Table with single column filter", () => {
	loadPage("Main Project/filter_page?_aimms_only_data_filter=true");

	findWidget("FilterTable")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("FilterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	let expected_values = [["2.00"], ["1.00"]];

	findWidget("FilterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("FilterTable").getColFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Frankfurt (Main) - Frankfurt (Main)",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("FilterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("FilterTable")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("FilterTable").getColFilter(0);

	getFilter().addFilter({ rule: "is equal to (=)", value: "1" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Frankfurt (Main) - Frankfurt (Main)",
				rule: "is equal to (=)",
				value: "1",
				//status: "active",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("FilterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("FilterTable")
		.getColHeaderCell(1, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [["1.00"]];

	findWidget("FilterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	openAppManager().navigateToPage("Main Project/home");

	openAppManager().navigateToPage("Main Project/filter_page");

	findWidget("FilterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("FilterTable")
		.getColHeaderCell(1, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("FilterTable").getColFilter(0);

	findWidget("FilterTable")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "column",
				field: "Frankfurt (Main) - Frankfurt (Main)",
				rule: "is equal to (=)",
				value: "1",
			},
			{
				type: "column",
				field: "Frankfurt (Main) - Frankfurt (Main)",
				rule: "is equal to (=)",
				value: "",
			},
		]);
});
