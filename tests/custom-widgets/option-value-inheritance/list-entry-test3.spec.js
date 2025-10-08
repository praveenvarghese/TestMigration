/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"Updating data of default list entry set options, and later adding a list entry set. Asserting the list entry set has the right defaults inherited.",
	() => {
		loadPage("Main Project/Custom Widgets");

		// Reset Data
		findWidget("Reset Data").click();

		// Add a new List Entry Set
		findWidget("EnumOptions_1")
			.getCustomListEntryOptionEditor()
			.addNewListEntrySet();

		// Update data of the Default List Entry Set Options
		// For few options, the Literal value is replaces with Identifiers
		findWidget("EnumOptions_1")
			.getCustomListEntryOptionEditor()
			.addListEntryInfo([
				{
					optionName: "default.type",
					optionValueType: "ENUM",
					optionValue: "Area",
				},
				{
					optionName: "default.show.decimals",
					listEntryType: "BOOLEAN",
					optionValueType: "IDENTIFIER",
					optionValue: "Flag",
				},
				{
					optionName: "default.num.decimals",
					listEntryType: "VALUE",
					optionValueType: "IDENTIFIER",
					optionValue: "MyInteger",
				},
				{
					optionName: "default.icon",
					optionValueType: "ICON",
					optionValue: "delta",
				},
			]);

		// Post updating the defaults. Add another List Entry Set
		findWidget("EnumOptions_1")
			.getCustomListEntryOptionEditor()
			.addNewListEntrySet();

		// Assert List Entry Set Data on the Option Editor
		findWidget("EnumOptions_1")
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
							Value: "Area",
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
							Value: "false",
							Index: 2,
							"Option-Entry Action Tooltip": "Inherits from default.show.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.num.decimals",
							NewOptionType: true,
							Value: "56",
							Index: 3,
							"Option-Entry Action Tooltip": "Inherits from default.num.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.icon",
							NewOptionType: true,
							Value: "delta",
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
							Value: "Area",
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
							Value: "false",
							Index: 2,
							"Option-Entry Action Tooltip": "Inherits from default.show.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.num.decimals",
							NewOptionType: true,
							Value: "56",
							Index: 3,
							"Option-Entry Action Tooltip": "Inherits from default.num.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.icon",
							NewOptionType: true,
							Value: "delta",
							Index: 4,
							"Option-Entry Action Tooltip": "Inherits from default.icon",
							"Option-Entry Action Icon": "icon-enter5",
						},
					],
				},
				{
					ListEntryTitle: "Option Set",
					ListEntryState: "Expanded",
					ListEntryOrder: 2,
					Options: [
						{
							Name: "contents.#.type",
							NewOptionType: true,
							Value: "Area",
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
							Value: "false",
							Index: 2,
							"Option-Entry Action Tooltip": "Inherits from default.show.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.num.decimals",
							NewOptionType: true,
							Value: "56",
							Index: 3,
							"Option-Entry Action Tooltip": "Inherits from default.num.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.icon",
							NewOptionType: true,
							Value: "delta",
							Index: 4,
							"Option-Entry Action Tooltip": "Inherits from default.icon",
							"Option-Entry Action Icon": "icon-enter5",
						},
					],
				},
			]);

		// Assert data shown on the Widget
		findWidget("EnumOptions_1")
			.getListEntryValues()
			.should.include.something.like([
				{
					DataOf: "Defaults",
					Type: "Area",
					Procedure: "Load_TestData",
					ShowDecimals: "false",
					DecimalsUpto: "56",
					Icon: "delta",
				},
				{
					DataOf: "List Entry Index 0",
					Type: "Area",
					Procedure: "Load_TestData",
					ShowDecimals: "false",
					DecimalsUpto: "56",
					Icon: "delta",
				},
				{
					DataOf: "List Entry Index 1",
					Type: "Area",
					Procedure: "Load_TestData",
					ShowDecimals: "false",
					DecimalsUpto: "56",
					Icon: "delta",
				},
				{
					DataOf: "List Entry Index 2",
					Type: "Area",
					Procedure: "Load_TestData",
					ShowDecimals: "false",
					DecimalsUpto: "56",
					Icon: "delta",
				},
			]);

		// Updating value of few of the identifiers used in the default options
		findWidget("TestData_1")
			.getCell(0, 0)
			.setValue(true);
		findWidget("TestData_1")
			.getCell(1, 0)
			.setValue("12");

		// Assert List Entry Set Data on the Option Editor
		findWidget("EnumOptions_1")
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
							Value: "Area",
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
							Value: "12",
							Index: 3,
							"Option-Entry Action Tooltip": "Inherits from default.num.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.icon",
							NewOptionType: true,
							Value: "delta",
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
							Value: "Area",
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
							Value: "12",
							Index: 3,
							"Option-Entry Action Tooltip": "Inherits from default.num.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.icon",
							NewOptionType: true,
							Value: "delta",
							Index: 4,
							"Option-Entry Action Tooltip": "Inherits from default.icon",
							"Option-Entry Action Icon": "icon-enter5",
						},
					],
				},
				{
					ListEntryTitle: "Option Set",
					ListEntryState: "Expanded",
					ListEntryOrder: 2,
					Options: [
						{
							Name: "contents.#.type",
							NewOptionType: true,
							Value: "Area",
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
							Value: "12",
							Index: 3,
							"Option-Entry Action Tooltip": "Inherits from default.num.decimals",
							"Option-Entry Action Icon": "icon-enter5",
						},
						{
							Name: "contents.#.icon",
							NewOptionType: true,
							Value: "delta",
							Index: 4,
							"Option-Entry Action Tooltip": "Inherits from default.icon",
							"Option-Entry Action Icon": "icon-enter5",
						},
					],
				},
			]);

		// Assert data shown on the Widget
		findWidget("EnumOptions_1")
			.getListEntryValues()
			.should.include.something.like([
				{
					DataOf: "Defaults",
					Type: "Area",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "12",
					Icon: "delta",
				},
				{
					DataOf: "List Entry Index 0",
					Type: "Area",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "12",
					Icon: "delta",
				},
				{
					DataOf: "List Entry Index 1",
					Type: "Area",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "12",
					Icon: "delta",
				},
				{
					DataOf: "List Entry Index 2",
					Type: "Area",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "12",
					Icon: "delta",
				},
			]);
	}
);
