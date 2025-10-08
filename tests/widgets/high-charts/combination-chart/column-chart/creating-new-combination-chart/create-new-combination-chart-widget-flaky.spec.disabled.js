/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 * @INTERACTION_MODE=dnd
 */

scenario("Create column chart widget from scratch on PageV2 with Classic layout", () => {
	loadPage("Main Project/ColumnChart?dnd=true&_aimms_only_highcharts=true");

	createWidget("combinationchart", [], "ColumnChart_OnClassic", 4, 3);

	openPageConfigurator();

	getPageConfigurator()
		.dragWidget("ColumnChart_OnClassic")
		.toArea("Area A");

	findWidget("columnchart")
		.getVisibleWidgets()
		.should.eql(["ColumnChart_OnClassic"]);

	findWidget("ColumnChart_OnClassic").getEmptyWidgetMessage().should.exist;

	findWidget("ColumnChart_OnClassic")
		.HighChartContentsOptionEditor()
		.editSet(
			0,
			{
				value: "Demand",
				type: "identifier",
			},
			{
				value: "p_Demand_IsVisible",
				type: "identifier",
			}
		);

	findWidget("ColumnChart_OnClassic").closeOptionDialog();

	findWidget("ColumnChart_OnClassic")
		.getNumberOfBars()
		.should.eql(10);

	findWidget("ColumnChart_OnClassic")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Others",
				name: "Chart Title",
				value: "Column Chart",
				valueType: "LITERAL",
			},
		]);

	findWidget("ColumnChart_OnClassic")
		.getHighChartTitle()
		.should.eql("Column Chart");
});
