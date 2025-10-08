/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Right click on a table cell. Assert action on click of item action.", () => {
	loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

	// Close Page Manager
	closeAppManager();

	// Data setup
	findWidget("Reset Data").click();

	findWidget("IND Factories Output")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("0.00");

	// Right click on cell (0,2). Click on the 1st item action.
	findWidget("IND Factories Output")
		.getCell(0, 2)
		.rightClick()
		.getItemActionDetails(0)
		.click();

	// Assert results based on the above action
	findWidget("Flags")
		.getCell(0, 0)
		.getValue().should.be.true;
	findWidget("Flags")
		.getCell(1, 0)
		.getValue().should.be.false;

	// Navigate to `Shipping Schedules` page
	getPageMenu().navigateToPage("Main Project/Shipping Schedules");

	// Right click on cell (0,0). Click on the 1st item action.
	findWidget("Shipping Departure DateTime")
		.getCell(0, 0)
		.rightClick()
		.getItemActionDetails(0)
		.click();

	// Assert Dialog page is shown.
	findDialog()
		.getTitle()
		.should.equal("Table Item ACtion");
	findDialog()
		.findButton("Ok")
		.click();

	// Right click on cell (0,0). Click on the 2nd item action. This item action has an invalid procedure configured.
	findWidget("Shipping Departure DateTime")
		.getCell(0, 0)
		.rightClick()
		.getItemActionDetails(1)
		.click();

	// Check for the error message reported for above action
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain(
			"data session:Running procedure 'MKG' has resulted in an error: No authorization to run procedure MKG (code=500)"
		);

	// Right click on cell (0,0). Click on the 3rd item action. This is an inactive item action.
	findWidget("Shipping Departure DateTime")
		.getCell(0, 0)
		.rightClick()
		.getItemActionDetails(3)
		.click();

	// Assert no action. Dialog page should not be loaded.
	getDialog().should.not.exist;

	// Right click on cell (0,0). Click on the 5th item action. This item action has no procedure configured.
	findWidget("Shipping Departure DateTime")
		.getCell(0, 0)
		.rightClick()
		.getItemActionDetails(4)
		.click();

	// Check for the error message reported for above action
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain("Context Menu:No action specified");
});
