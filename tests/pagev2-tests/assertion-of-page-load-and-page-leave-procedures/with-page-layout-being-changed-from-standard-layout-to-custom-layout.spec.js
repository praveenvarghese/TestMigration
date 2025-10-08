/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Having page layout being changed from 1 Standard Layout to another, and while we load and exit his page, assert values of flags that are set through a Page-Load and Page-Leave procedures.",
	() => {
		// Navigate to 'Test Page' page, a page with 1 of our Standard layouts.
		loadPage("Main Project/Test Page");

		// Click on the active Primary Action
		findWidget("test_page")
			.getPrimaryPageAction()
			.click();

		// Assert values of Binary-Flag on the page.
		let expected_values = [[false, true, false, false, true, true]];
		findWidget("Flags")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		// Change the page layout to 'Custom Layout MKG'.
		openPageConfigurator().selectLayout("Custom Layout MKG", "true");

		/* With the page layout being changed, assert the page load procedure was not executed. */

		// Assert values of Binary-Flags remain the same as earlier.
		expected_values = [[false, true, false, false, true, true]];
		findWidget("Flags")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		/* With the page layout being changed, assert the page leave procedure is intact. */

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Test Page/Classic Layout Page");

		// Assert values of Binary-Flags now updated through Page-Leave procedure
		expected_values = [[false, true, false, false, false, true]];
		findWidget("Flags_1")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);

		// Navigate back to 'Test Page' page
		getPageMenu().navigateToPage("Main Project/Test Page");

		/* While the page layout was changed, assert the Page-Load procedure is intact and now executed. */

		// Assert values of Binary-Flags now updated through a Page-Load procedure
		expected_values = [[true, true, false, false, true, true]];
		findWidget("Flags")
			.getGridValues()
			.should.be.shallowDeepEqual(expected_values);
	}
);
