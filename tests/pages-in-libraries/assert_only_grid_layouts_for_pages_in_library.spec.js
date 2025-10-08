/*!
 * @AIMMS_FILE=models/IdentifierListTest/IdentifierListTest.aimms
 */

scenario(
	"Assert that only grid (aka V2) layouts are present for pages in libraries. For regular pages, the Classic Layout should still be present.",
	() => {
		loadPage("Main Project/home");

		openPageConfigurator()
			.getLayoutNames()
			.should.eql([
				"Layout 1",
				"Layout 2",
				"Layout 3",
				"Layout 4",
				"Layout 5",
				"Layout 6",
				"Layout 7",
				"Layout 8",
				"Layout 9",
				"Layout 10",
				"Layout 11",
				"Layout: classic", // Present for a 'global' page
			]);

		loadPage("Lib1/Lib1Page");

		openPageConfigurator()
			.getLayoutNames()
			.should.eql([
				"Layout 1",
				"Layout 2",
				"Layout 3",
				"Layout 4",
				"Layout 5",
				"Layout 6",
				"Layout 7",
				"Layout 8",
				"Layout 9",
				"Layout 10",
				"Layout 11", // "classic" should be missing for a library page
			]);
	}
);
