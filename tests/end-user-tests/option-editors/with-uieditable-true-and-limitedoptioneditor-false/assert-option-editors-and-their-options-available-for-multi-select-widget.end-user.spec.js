/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Multi-Select Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home");

		// Verify that the Kebab menu is present
		findWidget("PlaneSelectionBox")
			.isKebabMenuPresent()
			.should.eql(true);

		// Click on Multi-Select Widget Settings, and assert the info on Option Editor.
		findWidget("PlaneSelectionBox")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(multiSelectWidgetOptions());

		// For the Multi-Select Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("PlaneSelectionBox")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Aircraft Selection",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("PlaneSelectionBox")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value: "",
					Index: 0,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("PlaneSelectionBox")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Aircraft Selection", Index: 1 },
			]);
	}
);
