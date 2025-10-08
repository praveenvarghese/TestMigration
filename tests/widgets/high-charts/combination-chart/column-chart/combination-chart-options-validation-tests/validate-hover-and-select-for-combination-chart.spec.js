/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether hover and select work correctly for a Column Chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.hasClass("highcharts-point-hover")
		.should.be.equal(false);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.getCSSStyleProperty("fill-opacity")
		.should.be.equal("0.8");

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.hover();

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.hover();

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.hasClass("highcharts-point-hover")
		.should.be.equal(true);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.getCSSStyleProperty("fill-opacity")
		.should.be.equal("0.75");

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 5 })
		.click();

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 5 })
		.hasClass("highcharts-point-select")
		.should.be.equal(true);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.hasClass("highcharts-point-select")
		.should.be.equal(false);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 5 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorGreySilver.rgb); //"rgb(204, 204, 204)"

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.getCSSStyleProperty("fill")
		.should.not.be.equal(colors.colorGreySilver.rgb);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.click();

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 5 })
		.hasClass("highcharts-point-select")
		.should.be.equal(false);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.hasClass("highcharts-point-select")
		.should.be.equal(true);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 5 })
		.getCSSStyleProperty("fill")
		.should.not.be.equal(colors.colorGreySilver.rgb);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 8 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorGreySilver.rgb);
});
