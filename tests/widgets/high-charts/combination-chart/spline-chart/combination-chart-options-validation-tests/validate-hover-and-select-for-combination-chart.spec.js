/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether hover and select work correctly for a spline Chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.hasClass("highcharts-point-hover")
		.should.be.equal(false);

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.getCSSStyleProperty("fill-opacity")
		.should.be.equal("0.8");

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.hover();

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.hover();

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.hasClass("highcharts-point-hover")
		.should.be.equal(true);

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.getCSSStyleProperty("fill-opacity")
		.should.be.equal("0.8");

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 5 })
		.click();

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 5 })
		.hasClass("highcharts-point-select")
		.should.be.equal(true);

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.hasClass("highcharts-point-select")
		.should.be.equal(false);

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 5 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorGreySilver.rgb); //"rgb(204, 204, 204)"

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.getCSSStyleProperty("fill")
		.should.not.be.equal(colors.colorGreySilver.rgb);

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.click();

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 5 })
		.hasClass("highcharts-point-select")
		.should.be.equal(false);

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.hasClass("highcharts-point-select")
		.should.be.equal(true);

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 5 })
		.getCSSStyleProperty("fill")
		.should.not.be.equal(colors.colorGreySilver.rgb);

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 8 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorGreySilver.rgb);
});
