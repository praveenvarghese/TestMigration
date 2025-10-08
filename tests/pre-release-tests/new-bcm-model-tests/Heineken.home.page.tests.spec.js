/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM08042020/HeinekenBCM08042020.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Heineken home page", () => {
	loadPage("Main Project/Home");

	//Validate widgets displayed in the home page
	findWidget("actuals")
		.getVisibleWidgets()
		.should.eql([
			"SB_Home_Page_OpCo",
			"SB_Home_Page_Scenario",
			"Button_Home_Page_Load_Data",
			"Button_Home_Page_Unlock_Data_Set",
			"Label_Active_Scenario",
			"Table_Flow_Process_Progress",
			"Table_Home_General_Overview",
			"Table_Home_Brewhouse_Overview",
			"Table_Home_Cellar_Overview",
			"Table_Home_Dealcoholization_Overview",
			"Table_Home_Filter_Overview",
			"Table_Home_Mixing_Overview",
			"Table_Home_Packaging_Overview",
			"Table_Home_Asset_Overview",
			"Table_InitializationMessages_2",
			"Table_Error_Log",
		]);

	//Validate France is displayed as data in the dropdown
	findWidget("SB_Home_Page_OpCo")
		.getValue()
		.should.be.equal("France");

	//Validate data is displayed in the table
	let expected_values = [
		["3,430 khl", "3,430 khl", "3,469 khl", "3,516 khl", "3,574 khl", "3,846 khl"],
		["273 khl", "272 khl", "273 khl", "275 khl", "276 khl", "282 khl"],
		["1,324 khl", "1,215 khl", "1,203 khl", "1,148 khl", "1,158 khl", "1,289 khl"],
		["-106 khl", "-81 khl", "-78 khl", "-74 khl", "-74 khl", "-71 khl"],
	];

	findWidget("Table_Home_General_Overview")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	//Validate Widget action list for the table General Output Overview
	findWidget("Table_Home_General_Overview")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Table_Home_General_Overview")
		.getAllWidgetActionListName()
		.should.eql(["Show only peak month (May)", "Change unit to mhl", "Change unit to hl"]);

	//Show results for peak month(Widget action),Validate data changed in below tables
	findWidget("Table_Home_General_Overview")
		.getWidgetActionDetails(0)
		.click();

	expected_values = [
		["668 khl", "675 khl", "672 khl", "671 khl", "671 khl", "670 khl"],
		["315 khl", "320 khl", "321 khl", "323 khl", "320 khl", "350 khl"],
	];

	findWidget("Table_Home_Brewhouse_Overview")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Validate sidepanel pages
	findWidget("actuals")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Location filters", "Capacity parameters"]);

	//Validate location filters sidepanel page and check upon select none and select all features
	findWidget("actuals")
		.getSidepanels()
		.openSidepanelTab("Location filters");

	findWidget("filter_location_production_unit_1")
		.getVisibleWidgets()
		.should.eql(["MS_SidePanel_Production_Unit1"]);

	findWidget("MS_SidePanel_Production_Unit1").deselect(["Marseille"]);

	expected_values = [
		["506 khl", "507 khl", "505 khl", "504 khl", "504 khl", "505 khl"],
		["258 khl", "262 khl", "263 khl", "264 khl", "262 khl", "285 khl"],
	];

	findWidget("Table_Home_Brewhouse_Overview")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
