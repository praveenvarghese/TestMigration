/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Asserting action on click of list item.", () => {
	loadPage("Main Project/Second Page");

	closeAppManager();

	// Reset the data
	findWidget("Clear Schedule_1").click();
	// Assert there is no data on the barchart
	findWidget("TotalCostPerPlane").getEmptyWidgetMessage().should.exist;

	// Maximize the list widget
	findWidget("List Widget").goInFullScreenMode();
	findWidget("List Widget").isFullScreen().should.be.true;

	// Click on display text of 1st item in 2nd group
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.getItem()
		.click();

	// Exit full screen mode
	findWidget("List Widget").exitFullScreenMode();
	findWidget("List Widget").isFullScreen().should.be.false;

	// Assert there is data on the barchart
	findWidget("TotalCostPerPlane").getEmptyWidgetMessage().should.not.exist;

	// Reset the data
	findWidget("Clear Schedule_1").click();

	// Assert there is no data on the barchart
	findWidget("TotalCostPerPlane").getEmptyWidgetMessage().should.exist;

	// Maximize the list widget
	findWidget("List Widget").goInFullScreenMode();
	findWidget("List Widget").isFullScreen().should.be.true;

	// Click on icon of 1st item in 2nd group
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.getIcon()
		.click();

	// Exit full screen mode
	findWidget("List Widget").exitFullScreenMode();
	findWidget("List Widget").isFullScreen().should.be.false;

	// Assert there is data on the barchart
	findWidget("TotalCostPerPlane").getEmptyWidgetMessage().should.not.exist;

	// Maximize the list widget
	findWidget("List Widget").goInFullScreenMode();
	findWidget("List Widget").isFullScreen().should.be.true;

	// Click on display text of 2nd item in 2nd group
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.getItem()
		.click();

	// Assert an error message is reported for the above interaction.
	getLogMessage().openList();
	getLogMessage()
		.getCount()
		.should.be.equal(1);

	// Click on external-link icon of 2nd item in 2nd group
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.getExternalLink()
		.click();

	// Assert an error message is reported for the above interaction.
	getLogMessage()
		.getCount()
		.should.be.equal(2);

	// Assert the no. of open tabs
	getTabsCount().should.be.equal(1);

	// Click on 2nd item in 1st group
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.getItem()
		.click();

	// Assert the no. of open tabs
	getTabsCount().should.be.equal(2);
});
