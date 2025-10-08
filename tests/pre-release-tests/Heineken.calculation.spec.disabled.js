/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/HeinekenBCM22112018/HeinekenBCM.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Heineken app compliance script: The Calculation", () => {
	loadPage("Main Project/home");

	// Load the AIMMS case.
	findWidget("Button_AIMMS_Load_Case").click();

	// Click on Base Case and check whether you are taken to the 'Input >>>' page automatically.
	findWidget("Button_GoTo_Actuals").click();

	findWidget("Table_Flow_Process_Progress")
		.getTitle()
		.should.be.equal("Progress Overview");

	getCurrentPage().should.be.equal("Main Project/Input >>>");

	// The calculation part
	loadPage("Main Project/Calculate");

	findWidget("Button_Optimization_GoTo_Automatic_Allocation").click();

	getCurrentPage().should.be.equal("Main Project/Calculate/Automatic Allocation");

	findWidget("Button_Optimization_Execute").click();

	// In the official script, a Status dialog now pops up. I did not get this to work properly somehow (possibly due to the longer time needed to run the optimization
	// above). So I removed it from the model.
	findDialog("Status", 10000, 10000)
		.findButton("OK")
		.click();

	loadPage("Main Project/Output >>>");

	// loadPage("Main Project/Output >>>/OpCo View");

	loadPage("Main Project/Production Unit View");

	findWidget("Button_Output_Production_Unit_GoTo_Capacity").click();

	getCurrentPage().should.be.equal("Main Project/Production Unit View/Capacity");

	// Check the barcharts displayed
	// Barchart 'Center'
	findWidget("Bar_Output_OpCo_Production")
		.getYAxisElements()
		.should.have.numberOfItems.equal(11);

	findWidget("Bar_Output_OpCo_Production")
		.getYAxisElements()
		.should.eql([
			"0",
			"1,000,000",
			"2,000,000",
			"3,000,000",
			"4,000,000",
			"5,000,000",
			"6,000,000",
			"7,000,000",
			"8,000,000",
			"9,000,000",
			"10,000,000",
		]);

	findWidget("Bar_Output_OpCo_Production")
		.getXAxisElements()
		.should.have.numberOfItems.equal(4);

	findWidget("Bar_Output_OpCo_Production")
		.getXAxisElements()
		.should.eql(["Brewhouse", "Fermentation", "Maturation", "Horap"]);

	// Barchart 'North'
	findWidget("Bar_Output_Production_Unit_Capacity_1")
		.getYAxisElements()
		.should.have.numberOfItems.equal(8);

	findWidget("Bar_Output_Production_Unit_Capacity_1")
		.getYAxisElements()
		.should.eql([
			"0",
			"2,000,000",
			"4,000,000",
			"6,000,000",
			"8,000,000",
			"10,000,000",
			"12,000,000",
			"14,000,000",
		]);

	findWidget("Bar_Output_Production_Unit_Capacity_1")
		.getXAxisElements()
		.should.have.numberOfItems.equal(8);

	findWidget("Bar_Output_Production_Unit_Capacity_1")
		.getXAxisElements()
		.should.eql([
			"Brewhouse",
			"Fermentation",
			"Maturation",
			"Filter",
			"Mixing",
			"Dealcoholization",
			"Sugar",
			"Packaging",
		]);

	findWidget("Bar_Output_Production_Unit_Capacity").getEmptyWidgetMessage().should.exist;

	loadPage("Main Project/OpCo View");

	findWidget("Button_Output_OpCo_Level_GoTo_Demand_Satisfaction").click();

	// Verify all the values in the 'Forecast vs Production' table
	const expected_values = [
		["1,349,500", "1,434,250", "1,522,713", "1,595,598", "1,672,127", "2,213,416"],
		["691,500", "729,150", "767,940", "808,040", "849,646", "892,984"],
		["6,000", "6,000", "6,000", "6,000", "6,000", "6,000"],
		["1,286,000", "1,403,900", "1,526,428", "1,634,452", "1,747,378", "2,202,453"],
		["-149,000", "-153,500", "-158,225", "-163,186", "-168,396", "-297,946"],
	];

	findWidget("Table_Output_OpCo_Demand_Satisfaction")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
