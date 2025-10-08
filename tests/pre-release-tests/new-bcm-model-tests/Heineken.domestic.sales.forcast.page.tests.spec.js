/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM08042020/HeinekenBCM08042020.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Heineken domestic sales forcast page", () => {
	loadPage("Main Project/Sales/Domestic Sales Forecast");

	//Validate widgets displayed in the home page
	findWidget("forecast_2")
		.getVisibleWidgets()
		.should.eql([
			"Group_Sales_Forecast_Down_Upload",
			"Download_Forecast_Template",
			"Upload_Forecast_Template",
			"Text_Upld_Dwnld_Explanation",
			"Table_Sales_Forecast",
			"Legend_Sales_Forecast_Brands",
			"Chart_Year_Forcast",
			"SC_Sales_Forecast_Brand_Cagr",
			"Legend_Sales_Forecast_Pack_Types",
			"Chart_Sales_Forecast_Pack",
			"Table_Sales_Forecast_Pack_Type_Cagr",
		]);

	//Validate data is displayed in the table
	let expected_values = [
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["8,961", "8,461", "8,046", "7,620", "7,410", "6,609"],
		["11,524", "10,822", "10,123", "9,406", "9,053", "7,706"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["7,246", "7,098", "6,972", "6,874", "6,780", "6,334"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
	];

	findWidget("Table_Sales_Forecast")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	//Validate Widget action list for the table General Output Overview
	findWidget("Table_Sales_Forecast")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Table_Sales_Forecast")
		.getAllWidgetActionListName()
		.should.eql("Hide/unhide zero's");

	//Show results for peak month(Widget action),Validate data changed in below tables
	findWidget("Table_Sales_Forecast")
		.getWidgetActionDetails(0)
		.click();

	expected_values = [
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["8,961", "8,461", "8,046", "7,620", "7,410", "6,609"],
		["11,524", "10,822", "10,123", "9,406", "9,053", "7,706"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
	];

	findWidget("Table_Sales_Forecast")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Validate sidepanel pages
	findWidget("forecast_2")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Brand filter", "Packtype filter", "Size RET/OW filter", "Time filter"]);

	// Validate Brand filter side panel page [Select All,None and individual selection]
	findWidget("forecast_2")
		.getSidepanels()
		.openSidepanelTab("Brand filter");

	findWidget("filter_brand")
		.getVisibleWidgets()
		.should.eql(["MS_Sidepanel_Brand_2"]);

	findWidget("MS_Sidepanel_Brand_2").selectNone();

	findWidget("Table_Sales_Forecast")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty TableContents contains no data");

	findWidget("MS_Sidepanel_Brand_2").selectAll();

	findWidget("Table_Sales_Forecast")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	//Validate user able to upload sales forcast template
	findWidget("Upload_Forecast_Template").uploadFile("Forecast Templates.xlsx");

	//Validate when uploaded is succesfull a table is shown with all the changed details
	expected_values = [
		["100", "100", "100", "100", "100", "100"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["8,961", "8,461", "8,046", "7,620", "7,410", "6,609"],
		["11,524", "10,822", "10,123", "9,406", "9,053", "7,706"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0"],
	];

	findWidget("Table_Sales_Forecast")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Validate user able to Download sales forcast template
	findWidget("Download_Forecast_Template")
		.click()
		.getDownloadedFile()
		.should.include.something.like({
			filename: "Forecast Template.xlsx",
		});
});
