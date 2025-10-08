/*!
 * @AIMMS_FILE=models/Bugs/GL00904-TransNet/TransNet.aimms
 */

scenario("Check that Combination Chart does show data", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_2");

	findWidget("DemandColumnChart_2")
		.getNumberOfBars()
		.should.eql(5);

	findWidget("DemandColumnChart_2")
		.getNthBarForSingleContent({ bar: 1 })
		.hover();

	findWidget("DemandColumnChart_2")
		.getNthBarForSingleContent({ bar: 1 })
		.hover();

	findWidget("DemandColumnChart_2")
		.getNthBarForSingleContent({ bar: 1 })
		.hasClass("highcharts-point-hover")
		.should.be.equal(true);
});
