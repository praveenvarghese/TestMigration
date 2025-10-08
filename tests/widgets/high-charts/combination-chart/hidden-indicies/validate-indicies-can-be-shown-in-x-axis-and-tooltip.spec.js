/*!
 * @AIMMS_FILE=models/CombiChartConversions/CombiChartConversions.aimms
 */

scenario(
	"Validate indicies is shown in tooltip and in x-axis when its toggled through element parameter",
	() => {
		loadPage("Main Project/TestHiddenIndices");

		findWidget("widget_2")
			.getNumberOfBars()
			.should.eql(12);

		findWidget("widget_2")
			.getXaxisScaleValues()
			.should.eql(["-"]);

		findWidget("widget_2")
			.getNthBarForSingleContent({ bar: 5 })
			.hover();

		findWidget("widget_2")
			.getTooltipText()
			.should.eql("(May): 49.00 mm");

		findWidget("scalarWidget_2").setValue("SHOW");

		findWidget("widget_2")
			.getXaxisScaleValues()
			.should.eql(["AveragePrecipitation"]);

		findWidget("widget_2")
			.getNthBarForSingleContent({ bar: 5 })
			.hover();

		findWidget("widget_2")
			.getTooltipText()
			.should.eql("(AveragePrecipitation,May): 49.00 mm");
	}
);
