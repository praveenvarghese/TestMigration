/*!
 * @AIMMS_FILE=models/ColumnChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check the Trendline functionality of the Column Chart.", () => {
	loadPage("Main Project/TrendlineTests");

	// Check a fully static trendline
	findWidget("TL1")
		.showsTrendline()
		.should.eql(true);

	findWidget("TL1")
		.getTrendlineLabel()
		.should.eql("I am so trendy");

	// Check a fully parameterized trendline
	findWidget("ShowTrendline").setValue("0");
	findWidget("TL2")
		.showsTrendline()
		.should.eql(false);

	findWidget("ShowTrendline").setValue("1");
	findWidget("TrendlineLabel").setValue("Testlabel");
	findWidget("TL2")
		.getTrendlineLabel()
		.should.eql("Testlabel");

	findWidget("TrendlineLabel").setValue("中國哲學書電子化計劃");
	findWidget("TL2")
		.getTrendlineLabel()
		.should.eql("中國哲學書電子化計劃");

	findWidget("ShowTrendline").setValue("0");
	findWidget("TL2")
		.showsTrendline()
		.should.eql(false);
});
