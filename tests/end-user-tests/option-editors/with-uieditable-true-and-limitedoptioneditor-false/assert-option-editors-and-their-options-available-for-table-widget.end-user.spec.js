/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Table Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/Shipping Schedules?table-v2=false");

		// Verify that the Kebab menu is present
		findWidget("Shipping Departure DateTime")
			.isKebabMenuPresent()
			.should.eql(true);

		// Click on Table Widget Settings, and assert the info on Option Editor.
		findWidget("Shipping Departure DateTime")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(tableWidgetOptions());

		// For the Table Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("Shipping Departure DateTime")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Shipping Departure DateTime",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("Shipping Departure DateTime")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Widget Actions", NewOptionType: true, Value: "", Index: 0 },
				{
					Name: "Item Actions",
					NewOptionType: true,
					Value:
						"ItemActionsInfo(webui::indexWidgetItemActionSpec, webui::indexPageExtension, webui::indexWidgetActionSpec)",
					Index: 1,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("Shipping Departure DateTime")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
				{ Name: "Lower threshold", NewOptionType: true, Value: "", Index: 2 },
				{ Name: "Upper threshold", NewOptionType: true, Value: "", Index: 3 },
				{ Name: "Default column width", NewOptionType: false, Value: "", Index: 4 },
				{ Name: "Default row height", NewOptionType: false, Value: "", Index: 5 },
				{
					Name: "Header Visibility",
					NewOptionType: true,
					Value: "SHOW_ROW_COLUMN_HEADER",
					Index: 6,
				},
				{ Name: "Show Html in Headers", NewOptionType: true, Value: "false", Index: 7 },

				{ Name: "Visible", NewOptionType: false, Value: "", Index: 8 },
				{
					Name: "Title",
					NewOptionType: true,
					Value: "Shipping Departure DateTime",
					Index: 9,
				},
				{ Name: "Highlight", NewOptionType: true, Value: "", Index: 10 },
			]);

		// Assert options available on "Store Focus" option editor and their data
		findWidget("Shipping Departure DateTime")
			.openStoreFocusOptionEditor()
			.getStoreFocusOptionsInfo()
			.should.eql([
				{
					Name: "<IDENTIFIER-SET>",
					Value: "SelectedIdentifier",
					Index: 0,
				},
				{ Name: "I1", Value: "SelectedIsland1", Index: 1 },
				{ Name: "I2", Value: "SelectedIsland2", Index: 2 },
			]);
	}
);
