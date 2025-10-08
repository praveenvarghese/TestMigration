/*!
 * @AIMMS_FILE=models/ColumnChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether index coloring works correctly for a Column Chart", () => {
	loadPage("Main Project/AnnotationTests");

	// The chart is colored by custom css. Check a few of the expected colours as a result of that.
	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 3, bar: 1 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorNonStandardDarkGrey.rgb); //"rgb(169, 169, 169)"

	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 4, bar: 1 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorMod16Ord4.rgb);

	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 1, bar: 4 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorPrimitiveWhite100Smoke.rgb); //"rgb(245, 245, 245)"

	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 6, bar: 3 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorMod16Ord6.rgb);

	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 4, bar: 3 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorMod16Ord4.rgb); //"rgb(93, 170, 215)"

	// Change the pivoting and re-check some colours.
	findWidget("Anno1")
		.dragIndex("c")
		.dropBefore("y");

	findWidget("Anno1")
		.dragIndex("y")
		.dropBefore("<IDENTIFIER-SET>");

	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 3, bar: 1 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorPrimitiveWhite100Smoke.rgb); //"rgb(245, 245, 245)"

	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 3, bar: 2 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorTrolleyGrey.rgb); //"rgb(128, 128, 128)"

	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 5, bar: 4 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorMod16Ord5.rgb);

	// EN2022-06-09: check same thing twice without any interaction?
	findWidget("Anno1")
		.getNthBarForMultipleContents({ content: 5, bar: 4 })
		.getCSSStyleProperty("fill")
		.should.be.equal(colors.colorMod16Ord5.rgb);
});
