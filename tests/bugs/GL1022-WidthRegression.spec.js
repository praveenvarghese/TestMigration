/*!
 * @AIMMS_FILE=models/Bugs/GL1022-WidthRegression/WidthRegression.aimms
 */

scenario(
	"GL1022 - The max page column width option was not respected anymore. Having it set to 4, 2 widgets with width 2 were displayed vertically.",
	() => {
		loadPage("Main Project/home");

		findWidget("ValueTable")
			.getTop()
			.should.be.below(70);
		findWidget("AnotherValueTable")
			.getTop()
			.should.be.below(70);

		findWidget("ValueTable")
			.getTop()
			.should.be.above(60);
		findWidget("AnotherValueTable")
			.getTop()
			.should.be.above(60);
	}
);
