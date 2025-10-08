/*!
 * @AIMMS_FILE=models/Bugs/GL2079-FixedTextTranslations/GL2079-FixedTextTranslations.aimms
 */

scenario(
	"On a single page WebUI app, that has literal 1 value set for 'Menu Hidden' option entry. Assert menu is hidden. ",
	() => {
		loadPage("Main Project/home");

		// Model used - models\Bugs\GL2079-FixedTextTranslations

		// Assert Menu is available on Home Page.
		getPageMenu().should.exist;

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
					Value: "false",
					Index: 1,
				},
			]);
	}
);
