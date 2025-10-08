/*!
 * @AIMMS_FILE=models/AllWidgetsModel/AllWidgetsModel.aimms
 */

scenario("Test to verify Max upto 10 tabs allowed on sidepanel tabs", () => {
	loadPage("Main Project/SidePanelPages");

	findWidget("sidepanelpages")
		.getSidepanels()
		.getCountOfTabs()
		.should.be.eql(0);

	findWidget("SidepanelWithOneTab").click();

	findWidget("sidepanelpages")
		.getSidepanels()
		.getCountOfTabs()
		.should.be.eql(1);

	findWidget("SidepanelWithSixTabs").click();

	findWidget("sidepanelpages")
		.getSidepanels()
		.getCountOfTabs()
		.should.be.eql(6);

	findWidget("SidepanelWithSevenTabs").click();

	findWidget("sidepanelpages")
		.getSidepanels()
		.getCountOfTabs()
		.should.be.eql(7);

	findWidget("SidepanelWith10tabs").click();

	findWidget("sidepanelpages")
		.getSidepanels()
		.getCountOfTabs()
		.should.be.eql(10);

	findWidget("sidepanelpages")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);

	findWidget("SidepanelWith11Tabs");

	findWidget("sidepanelpages")
		.getSidepanels()
		.getCountOfTabs()
		.should.be.eql(10);

	findWidget("sidepanelpages")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);

	findWidget("InactiveSidepanelTabs").click();

	findWidget("sidepanelpages")
		.getSidepanels()
		.getCountOfTabs()
		.should.be.eql(9);

	findWidget("sidepanelpages")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["3", "4", "5", "6", "7", "8", "9", "10", "11"]);

	findWidget("SidepanelWithOneTab").click();

	findWidget("sidepanelpages")
		.getSidepanels()
		.getCountOfTabs()
		.should.be.eql(1);
});
