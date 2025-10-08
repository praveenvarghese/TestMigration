/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test asserting Breadcrumb's on the page and action of click on its links.", () => {
	loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts");

	getCurrentPage().should.be.equal(
		"Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts"
	);

	getFooter()
		.getBreadcrumb()
		.getBreadcrumbsInfo()
		.should.eql([
			{ Index: 0, Name: "Item Actions", Link: "Main Project/Item Actions" },
			{ Index: 1, Name: "Charts", Link: "Main Project/Item Actions/Charts" },
			{
				Index: 2,
				Name: "Bar-Line Chart Data",
				Link: "Main Project/Item Actions/Charts/Bar-Line Chart Data",
			},
			{
				Index: 3,
				Name: "Other Bar-Line Charts",
				Link: "Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts",
			},
		]);

	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink(2)
		.click();

	getCurrentPage().should.be.equal("Main Project/Item Actions/Charts/Bar-Line Chart Data");

	getFooter()
		.getBreadcrumb()
		.getBreadcrumbsInfo()
		.should.eql([
			{ Index: 0, Name: "Item Actions", Link: "Main Project/Item Actions" },
			{ Index: 1, Name: "Charts", Link: "Main Project/Item Actions/Charts" },
			{
				Index: 2,
				Name: "Bar-Line Chart Data",
				Link: "Main Project/Item Actions/Charts/Bar-Line Chart Data",
			},
		]);

	getFooter()
		.getBreadcrumb()
		.getBreadcrumbLink(0)
		.click();

	getCurrentPage().should.be.equal("Main Project/Item Actions");

	getFooter()
		.getBreadcrumb()
		.getBreadcrumbsInfo()
		.should.eql([{ Index: 0, Name: "Item Actions", Link: "Main Project/Item Actions" }]);

	// Navigate to another page
	openPageMenu()
		.toggleSubMenu("Main Project/Workflow Tests/Error Handling")
		.navigateToPage("Main Project/Workflow Tests/Error Handling/Page 1");

	getFooter()
		.getBreadcrumb()
		.getBreadcrumbsInfo()
		.should.eql([
			{ Index: 0, Name: "Workflow Tests", Link: "Main Project/Workflow Tests" },
			{
				Index: 1,
				Name: "Error Handling",
				Link: "Main Project/Workflow Tests/Error Handling",
			},
			{ Index: 2, Name: "Page 1", Link: "Main Project/Workflow Tests/Error Handling/Page 1" },
		]);
});
