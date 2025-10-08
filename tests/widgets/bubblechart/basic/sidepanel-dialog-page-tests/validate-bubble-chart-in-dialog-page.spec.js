/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Bubble chart func in sidepanel page", () => {
	loadPage("Main Project/Charts/Bubblechart");

	//Validate bubble chart is displayed in the Dialog page
	findWidget("OPenDIalog").click();

	findWidget("bubblechartdialogpage_1")
		.getVisibleWidgets()
		.should.eql(["dialogPageBubbleChart"]);

	//Validate number of bubbles doesnt change even after changing size data to zero values
	findWidget("dialogPageBubbleChart")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("dialogPageBubbleChart")
		.getZeroSizeBubbles()
		.should.have.numberOfItems(0);

	findDialog()
		.findButton("OK")
		.click();

	//Validate change in values are updated in the  bubble chart of dialog page
	findWidget("loadzerovalues").click();

	findWidget("OPenDIalog").click();

	findWidget("dialogPageBubbleChart")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("dialogPageBubbleChart")
		.getZeroSizeBubbles()
		.should.have.numberOfItems(2);
});
