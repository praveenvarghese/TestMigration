/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @DEVICE_TYPE=tablet
 */

scenario(
	"While we land and exit on a Classic-Layout page, assert values of flags that set through a Page-Load and Page-Leave procedures.",
	() => {
		// Navigate to Home page, a page with classic layout.
		loadPage("Main Project/home");

		// Assert values of Binary-Flags updated through a Page-Load procedure
		let expected_values = [[true, true, true, true, true, true]];
		findWidget("flagsonhome")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Test Page/Classic Layout Page");

		// Assert values of Binary-Flags now updated through a Page-Leave procedure
		expected_values = [[true, false, true, false, true, false]];
		findWidget("Flags_1")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		// Navigate to Home page
		getPageMenu().navigateToPage("Main Project/home");

		// Assert values of Binary-Flags now updated through a Page-Load procedure
		expected_values = [[true, true, true, true, true, true]];
		findWidget("flagsonhome")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);
	}
);
