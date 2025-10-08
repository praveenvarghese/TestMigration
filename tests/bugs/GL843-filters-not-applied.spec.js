/*!
 * @AIMMS_FILE=models/Bugs/GL843-FiltersNotApplied/SmallExample.aimms
 */

scenario(
	"GL843 - Filters were not applied on the bar chart and default values still displayed X-values (without bars, obviously).",
	() => {
		loadPage("Main Project/home");

		// Check that the expected headers are present
		findWidget("pleetable")
			.getHeaderRow(1)
			.getLabels()
			.should.beEqualTo(["i1", "i2", "i3", "total sum"]);

		// Change the filter content
		findWidget("multis").deselect(["i3", "i5"]);

		// And again check the headers
		findWidget("pleetable")
			.getHeaderRow(1)
			.getLabels()
			.should.beEqualTo(["i1", "i2", "total sum"]);
	}
);
