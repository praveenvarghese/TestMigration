/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Selection-Box (V1) Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Great Test Page");

		// Verify that the Kebab menu is present
		findWidget("BlineFilterBySelectionBox")
			.isKebabMenuPresent()
			.should.eql(true);

		// Click on Selection-Box Widget Settings, and assert the info on Option Editor.
		findWidget("BlineFilterBySelectionBox")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(selectionBoxWidgetOptions());

		// For the Selection-Box Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("BlineFilterBySelectionBox")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "BlineFilterBySelectionBox",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("BlineFilterBySelectionBox")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
			]);
	}
);
