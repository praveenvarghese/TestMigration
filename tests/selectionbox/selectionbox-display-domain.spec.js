/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario(
	"Verify the influence of a display domain on the elements listed in the searchlist of the selectionbox",
	() => {
		loadPage("Main Project/4thPage");

		// Click the dropdown open.
		findWidget("DDBox").click();

		// // Verify that the filtered results are as expected
		findWidget("DDBox")
			.getAllFullyVisibleOptions()
			.should.eql(["NED", "UK", "GIB", "FRA"]);

		// Close the dropdown again
		findWidget("DDBox").click();

		// Set the display domain to 1 (which implicitly asserts that the options editor is there for the display domain)
		findWidget("DDBox").setDisplayDomain({
			CountrySelected: "1",
		});

		findWidget("DDBox").closeOptionDialog();

		// Click the dropdown open.
		findWidget("DDBox").click();

		// Verify that the filtered results are as expected
		findWidget("DDBox")
			.getAllFullyVisibleOptions()
			.should.eql(["NED", "GER", "UK", "GIB", "FRA", "NOR"]);
	}
);
