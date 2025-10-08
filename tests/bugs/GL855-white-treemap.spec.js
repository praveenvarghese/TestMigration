/*!
 * @AIMMS_FILE=models/Bugs/GL855-WhiteTreemap/TransNet.aimms
 */

scenario(
	"GL855 After switching from a (valid) table using 'superslicing' to a treemap, part of the treemap was white instead of grey at some point.",
	() => {
		loadPage("Main Project/CubeDomain1");

		// Check the data of the treemap chart
		findWidget("Table1") // Yes, TABLE 1 ;)
			.findRectangle("Hamburg, Supply")
			.getCSSStyleProperty("fill")
			.should.be.equal(colors.colorPrimitiveGrey40.rgb); // "rgb(160, 164, 173)");
	}
);
