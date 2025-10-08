/*!
 * @AIMMS_FILE=models/ColumnChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether Legend annotations work correctly for a Column Chart", () => {
	loadPage("Main Project/AnnotationTests");

	// The legend is coloured by custom css. Check a few of the expected colours as a result of that.
	findWidget("Anno1")
		.getLegendItemCSSProperty(0, "fill")
		.should.be.equal(colors.colorPrimitiveWhite100Smoke.rgb); //"rgb(245, 245, 245)"

	findWidget("Anno1")
		.getLegendItemCSSProperty(1, "fill")
		.should.be.equal(colors.colorTrolleyGrey.rgb); //"rgb(128, 128, 128)"

	findWidget("Anno1")
		.getLegendItemCSSProperty(2, "fill")
		.should.be.equal(colors.colorNonStandardDarkGrey.rgb); //"rgb(169, 169, 169)"

	// The legend is also font-styled by custom css. Check it.
	findWidget("Anno1")
		.getLegendItemCSSProperty(0, "font-style")
		.should.be.equal("italic");

	findWidget("Anno1")
		.getLegendItemCSSProperty(1, "font-style")
		.should.be.equal("italic");

	findWidget("Anno1")
		.getLegendItemCSSProperty(2, "font-style")
		.should.be.equal("italic");

	// The next legend item is not styled. The style should be normal.
	findWidget("Anno1")
		.getLegendItemCSSProperty(3, "font-style")
		.should.be.equal("normal");
});
