/*!
 * @AIMMS_FILE=models/Bugs/GL1880-InitialSort/InitialSort.aimms
 */

scenario(
	"For a WebUI app that has literal 1 value set for 'Menu Hidden' option entry. Assert menu is hidden across WebUI.",
	() => {
		loadPage("Main Project/First Page");

		// Model used - models\Bugs\GL1880-InitialSort

		// Assert Menu is hidden on "First Page".
		getPageMenu().should.not.exist;

		// Assert "Menu Hidden" option entry in Application settings/Misc tab exists
		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Menu Bar",
					NewOptionType: true,
					Value: "",
					Index: 0,
				},
				{
					Name: "Menu Hidden",
					NewOptionType: true,
					Value: "true",
					Index: 1,
				},
			]);

		//Navigate to "Child Page"
		findWidget("Navigate To Child Page").click();

		// Assert Menu is hidden on this "Child Page"
		getPageMenu().should.not.exist;

		//Navigate to "Second Page"
		findWidget("Navigate to Second Page_1").click();

		// Assert Menu is hidden on this "Second Page"
		getPageMenu().should.not.exist;
	}
);
