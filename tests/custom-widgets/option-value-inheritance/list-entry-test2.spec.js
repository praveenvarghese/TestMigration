/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"Adding data on a default list entry set options, and later adding a list entry set. Asserting the newly added list entry set has the defaults inherited.",
	() => {
		loadPage("Main Project/home");

		// Adding data to the Default List Entry Set Options
		findWidget("EnumOptions")
			.getCustomListEntryOptionEditor()
			.addListEntryInfo([
				{
					optionName: "default.type",
					optionValueType: "ENUM",
					optionValue: "Bar",
				},
				{
					optionName: "default.procedure",
					optionValueType: "ENUM",
					optionValue: "Load_TestData",
				},
				{
					optionName: "default.show.decimals",
					listEntryType: "BOOLEAN",
					optionValueType: "LITERAL",
					optionValue: "TRUE",
				},
				{
					optionName: "default.num.decimals",
					listEntryType: "VALUE",
					optionValueType: "LITERAL",
					optionValue: "3",
				},
				{
					optionName: "default.icon",
					optionValueType: "ICON",
					optionValue: "commit",
				},
			]);

		// Post adding data to default list entry set, adding a new List Entry set that inherits data from defaults.
		findWidget("EnumOptions")
			.getCustomListEntryOptionEditor()
			.addNewListEntrySet();

		// Assert List Entry Set Data on the Option Editor
		findWidget("EnumOptions")
			.getCustomListEntryOptionEditor()
			.getListEntryDetails()
			.should.include.something.like([
				{
					ListEntryTitle: "Option Set",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "contents.#.type",
							NewOptionType: true,
							Value: "Bar",
							Index: 0,
							"Option-Entry Action Tooltip": "Inherits from default.type",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.procedure",
							NewOptionType: true,
							Value: "Load_TestData",
							Index: 1,
							"Option-Entry Action Tooltip": "Inherits from default.procedure",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.show.decimals",
							NewOptionType: true,
							Value: "true",
							Index: 2,
							"Option-Entry Action Tooltip": "Inherits from default.show.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.num.decimals",
							NewOptionType: true,
							Value: "3",
							Index: 3,
							"Option-Entry Action Tooltip": "Inherits from default.num.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.icon",
							NewOptionType: true,
							Value: "commit",
							Index: 4,
							"Option-Entry Action Tooltip": "Inherits from default.icon",
							"Option-Entry Action Icon": "icon-enter5",
						},
					],
				},
				{
					ListEntryTitle: "Option Set",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "contents.#.type",
							NewOptionType: true,
							Value: "Bar",
							Index: 0,
							"Option-Entry Action Tooltip": "Inherits from default.type",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.procedure",
							NewOptionType: true,
							Value: "Load_TestData",
							Index: 1,
							"Option-Entry Action Tooltip": "Inherits from default.procedure",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.show.decimals",
							NewOptionType: true,
							Value: "true",
							Index: 2,
							"Option-Entry Action Tooltip": "Inherits from default.show.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.num.decimals",
							NewOptionType: true,
							Value: "3",
							Index: 3,
							"Option-Entry Action Tooltip": "Inherits from default.num.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.icon",
							NewOptionType: true,
							Value: "commit",
							Index: 4,
							"Option-Entry Action Tooltip": "Inherits from default.icon",
							"Option-Entry Action Icon": "icon-enter5",
						},
					],
				},
			]);

		// Assert data shown on the Widget
		findWidget("EnumOptions")
			.getListEntryValues()
			.should.include.something.like([
				{
					DataOf: "Defaults",
					Type: "Bar",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "3",
					Icon: "commit",
				},
				{
					DataOf: "List Entry Index 0",
					Type: "Bar",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "3",
					Icon: "commit",
				},
				{
					DataOf: "List Entry Index 1",
					Type: "Bar",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "3",
					Icon: "commit",
				},
			]);
	}
);
