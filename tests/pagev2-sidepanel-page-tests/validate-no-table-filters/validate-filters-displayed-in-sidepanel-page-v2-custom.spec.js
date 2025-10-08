/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Validate filter option is displayed on an custom sidepanel page v2", () => {
	loadPage("Main Project/home");

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("WoW Score");

	findWidget("customTable2")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("customTable2")
		.getGridValues()
		.should.be.shallowDeepEqual([["1.00", "1.00", "1.00", "1.00", "1.00"]]);

	findWidget("customTable2")
		.getTableFilterButton()
		.click();

	getFilter().clearAllFilters();

	findWidget("customTable2")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("customTable2")
		.getGridValues()
		.should.be.shallowDeepEqual([["1.00", "1.00", "1.00", "1.00", "1.00"]]);
});
