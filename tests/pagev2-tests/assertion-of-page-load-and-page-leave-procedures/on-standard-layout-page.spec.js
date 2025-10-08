/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"While we land and exit on a Standard-Layout page, assert values of flags that set through a Page-Load and Page-Leave procedures.",
	() => {
		//Navigate to 'Home page', a page with classic layout.
		loadPage("Main Project/home");
		// Here on 'Home page', values of Binary-Flags are updated through a Page-Load and Page-Leave procedures

		// Navigate to 'Test Page' page, a page with 1 of our Standard layouts.
		getPageMenu().navigateToPage("Main Project/Test Page");

		// Assert values of Binary-Flags now updated through a Page-Load procedure
		let expected_values = [[true, true, false, false, true, true]];
		findWidget("Flags")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Test Page/Classic Layout Page");

		// Assert values of Binary-Flags now updated through a Page-Leave procedure
		expected_values = [[false, true, false, false, false, true]];
		findWidget("Flags_1")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);
	}
);
