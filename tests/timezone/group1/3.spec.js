/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"Controlling visibility of 'Time Zone panel' through an identifier. Asserting TimeZone button and its panel visibility.",
	() => {
		loadPage("Main Project/TimeZone Tests");

		// Reset data
		findWidget("Reset Data").click();
		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Assert `Time Zone Setting` Application-extension option exists
		findWidget("application")
			.openApplicationExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Time Zone Setting",
					NewOptionType: true,
					Value: "Show_TimeZone_Panel",
					Index: 1,
				},
			]);

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();

		// Assert Timezone button is available on the page footer section
		getFooter().getTimezoneButton().should.exist;

		// Assert Timezone panel is not visible on the page
		findTimezonePanel().should.not.exist;

		// Unfold the Secondary page actions
		findWidget("timezone_tests")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Click on page action that toggles TimeZone panel visibility
		findWidget("timezone_tests")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		// Assert Timezone button is now not available on the page footer section
		getFooter().getTimezoneButton().should.not.exist;

		// Assert Timezone panel is not visible on the page
		findTimezonePanel().should.not.exist;

		//Reload the page, and assert Timezone button
		pageRefresh();

		// Assert Timezone button is not available on the page footer section
		getFooter().getTimezoneButton().should.not.exist;

		// Assert Timezone panel is not visible on the page
		findTimezonePanel().should.not.exist;

		// Unfold the Secondary page actions
		findWidget("timezone_tests")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Click on page action that toggles TimeZone panel visibility
		findWidget("timezone_tests")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();

		// Assert Timezone button is now available on the page footer section
		getFooter().getTimezoneButton().should.exist;

		// Assert Timezone panel is not visible on the page
		findTimezonePanel().should.not.exist;

		//Reload the page, and assert Timezone button
		pageRefresh();

		// Assert Timezone button is available on the page footer section
		getFooter().getTimezoneButton().should.exist;

		//Click on Timezone button in footer
		getFooter()
			.getTimezoneButton()
			.click();

		// Assert Timezone panel is now visible on the page
		findTimezonePanel().should.exist;
	}
);
