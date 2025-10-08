/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario("Validate the Map widget when named views are changed from widget header", () => {
	loadPage("Main Project/HighCharts/HighCharts_1");

	findWidget("NetworkMap2")
		.getNodesCount()
		.should.equal(13);

	findWidget("NetworkMap2").isHeatMapDisplayed().should.be.false;

	findWidget("NetworkMap2")
		.getTitle()
		.should.eql("Network");

	findWidget("NetworkMap2")
		.getWidgetNamedViewButton()
		.click();

	findWidget("NetworkMap2")
		.getNamedViewItem(1)
		.click();

	findWidget("NetworkMap2")
		.getNodesCount()
		.should.equal(3);

	findWidget("NetworkMap2")
		.getWidgetNamedViewButton()
		.click();

	findWidget("NetworkMap2")
		.getNamedViewItem(2)
		.click();

	findWidget("NetworkMap2").isHeatMapDisplayed().should.be.true;

	findWidget("NetworkMap2")
		.getWidgetNamedViewButton()
		.click();

	findWidget("NetworkMap2")
		.getNamedViewItem(4)
		.click();

	findWidget("NetworkMap2")
		.getTitle()
		.should.eql("Title Change");
});
