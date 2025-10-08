/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Combination chart widget on Grid page when copy-paste on Classic page", () => {
	loadPage("Main Project/HighCharts/HighCharts_1");

	findWidget("SupplyColumnChart").getEmptyWidgetMessage().should.not.exist;

	loadPage("Main Project/SecondHome");

	openAppManager().unfoldWidgetContainers(["Main Project/HighCharts/HighCharts_1"]);

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/HighCharts/HighCharts_1",
			widgetName: "SupplyColumnChart",
		})
		.clickOnCopy();

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/SecondHome",
		})
		.clickOnPasteWidget();

	closeAppManager();

	findWidget("SupplyColumnChart_1").getEmptyWidgetMessage().should.exist;
});
