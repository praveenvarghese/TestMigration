/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test asserting image shown on sidepanel and interactions on multiselect", () => {
	loadPage("Main Project/home");

	// Open the Sidepanel
	findWidget("home_1")
		.getSidepanels()
		.openSidepanelTab("Tenerife");

	// Assert Flag image widget exists
	findWidget("Flag").should.exist;
	// Assert the Flag image URL
	findWidget("Flag")
		.getUrl()
		.should.include(
			`/app-resources/resources/@lib/MainProject/images/TenerifeFlagAnimated.gif`
		);

	// Navigate to "Main Project/Great Test Page/Filter Tests" page
	openAppManager().navigateToPage("Main Project/Great Test Page/Filter Tests");

	// Assert an error log message is reported
	getLogMessage()
		.openList()
		.getCount()
		.should.be.equal(2);
	getLogMessage().closeList();

	// Navigate to "Main Project/Great Test Page/Filter Tests" page
	openAppManager().navigateToPage("Main Project/Switch Page");

	// Assert the "Select All" link is enabled while "Select None" is disabled
	findWidget("MyMulti").isSelectAllDisabled().should.be.false;
	findWidget("MyMulti").isSelectNoneDisabled().should.be.true;

	// Click on "Select All"
	findWidget("MyMulti").selectAll();

	// Asserting the active (selected) entries
	findWidget("MyMulti")
		.getSelectedItemsList()
		.should.eql(["Boeing 737", "ATR-72", "Fokker F-50"]);

	// Unselecting "ATR-72" entry
	findWidget("MyMulti").deselect(["ATR-72"]);

	// Asserting both "Select All" and "Select None" links are enabled
	findWidget("MyMulti").isSelectAllDisabled().should.be.false;
	findWidget("MyMulti").isSelectNoneDisabled().should.be.false;

	// Asserting the active (selected) entries
	findWidget("MyMulti")
		.getSelectedItemsList()
		.should.eql(["Boeing 737", "Fokker F-50"]);

	// Click on "Select None"
	findWidget("MyMulti").selectNone();
	// Asserting the active (selected) entries
	findWidget("MyMulti")
		.getSelectedItemsList()
		.should.eql([]);

	// Selecting "ATR-72", "Fokker F-50" and "Boeing 737" entries
	findWidget("MyMulti").select(["ATR-72", "Fokker F-50", "Boeing 737"]);

	// Asserting both "Select All" link is disabled and "Select None" link is enabled
	findWidget("MyMulti").isSelectAllDisabled().should.be.true;
	findWidget("MyMulti").isSelectNoneDisabled().should.be.false;

	// Asserting the active (selected) entries
	findWidget("MyMulti")
		.getSelectedItemsList()
		.should.eql(["Boeing 737", "ATR-72", "Fokker F-50"]);
});
