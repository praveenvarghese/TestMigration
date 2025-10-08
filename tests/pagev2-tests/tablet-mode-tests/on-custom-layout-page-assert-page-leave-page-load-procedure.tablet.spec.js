/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @DEVICE_TYPE=tablet
 */

scenario(
	"While we land and exit on a Custom-Layout page, assert values of flags that set through a Page-Load and Page-Leave procedures.",
	() => {
		//Navigate to 'Home page', a page with classic layout.
		loadPage("Main Project/home");
		// Here on 'Home page', values of Binary-Flags are updated through a Page-Load and Page-Leave procedures

		// Navigate to 'Custom Grid Page' page, a page with a Custom layout.
		getPageMenu().navigateToPage("Main Project/Test Page/Custom Grid Page");

		// Assert values of Binary-Flags now updated through a Page-Load procedure
		let expected_values = [[false, true, false, true, false, true]];
		findWidget("Flags")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Test Page/Classic Layout Page");

		// Assert values of Binary-Flags now updated through a Page-Leave procedure
		expected_values = [[false, false, false, true, true, true]];
		findWidget("Flags_1")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);
	}
);
