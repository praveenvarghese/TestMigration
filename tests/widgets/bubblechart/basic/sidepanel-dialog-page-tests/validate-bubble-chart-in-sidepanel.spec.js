/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Bubble chart func in sidepanel page", () => {
	loadPage("Main Project/Charts/Bubblechart");

	//Validate bubble chart is displayed in the sidepanel page
	findWidget("bubblechart_1")
		.getSidepanels()
		.openSidepanelTab("Bubble Chart");

	findWidget("sidepanel_page_1")
		.getVisibleWidgets()
		.should.eql(["bubbleCHartSidePanelPage"]);

	findWidget("bubbleCHartSidePanelPage")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("bubbleCHartSidePanelPage")
		.getZeroSizeBubbles()
		.should.have.numberOfItems(0);

	//Validate change in values are updated in the  bubble chart of sidepanel page
	findWidget("loadzerovalues").click();

	findWidget("bubbleCHartSidePanelPage")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("bubbleCHartSidePanelPage")
		.getZeroSizeBubbles()
		.should.have.numberOfItems(2);
});
