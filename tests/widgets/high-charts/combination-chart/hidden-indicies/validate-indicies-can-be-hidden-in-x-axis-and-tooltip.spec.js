/*!
 * @AIMMS_FILE=models/CombiChartConversions/CombiChartConversions.aimms
 */

scenario(
	"Validate indicies is hidden/shown in tooltip and in x-axis when its toggled through element parameter",
	() => {
		loadPage("Main Project/TestHiddenIndices");

		findWidget("widget_1")
			.getNumberOfBars()
			.should.eql(12);

		findWidget("widget_1")
			.getXaxisScaleValues()
			.should.eql(["AveragePrecipitation"]);

		findWidget("widget_1")
			.getNthBarForSingleContent({ bar: 5 })
			.hover();

		findWidget("widget_1")
			.getTooltipText()
			.should.eql("(AveragePrecipitation,May): 49.00 mm");

		findWidget("scalarWidget_1").setValue("HIDE");

		findWidget("widget_1")
			.getXaxisScaleValues()
			.should.eql(["-"]);

		findWidget("widget_1")
			.getNthBarForSingleContent({ bar: 5 })
			.hover();

		findWidget("widget_1")
			.getTooltipText()
			.should.eql("(May): 49.00 mm");
	}
);
