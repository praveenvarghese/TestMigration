/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"Adding data on a default list entry set options, and asserting data as seen on the default list entry set and on the 1st contents list entry set.",
	() => {
		loadPage("Main Project/home");

		findWidget("EnumOptions")
			.getCustomListEntryOptionEditor()
			.addListEntryInfo([
				{
					optionName: "default.type",
					// listEntryType: "VALUE",
					optionValueType: "ENUM",
					optionValue: "Bar",
					// sliceValue: null,
					// storeFocusValue: null,
				},
				// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
				// {
				// 	optionName: "default.identifier",
				// 	// listEntryType: "VALUE",
				// 	optionValueType: "IDENTIFIER",
				// 	optionValue: "TestData",
				// 	// sliceValue: null,
				// 	// storeFocusValue: null,
				// },
				// {
				// 	optionName: "default.index",
				// 	// listEntryType: "VALUE",
				// 	optionValueType: "ENUM",
				// 	optionValue: "b",
				// 	// sliceValue: null,
				// 	// storeFocusValue: null,
				// },
				{
					optionName: "default.procedure",
					// listEntryType: "VALUE",
					optionValueType: "ENUM",
					optionValue: "Load_TestData",
					// sliceValue: null,
					// storeFocusValue: null,
				},
				{
					optionName: "default.show.decimals",
					listEntryType: "BOOLEAN",
					optionValueType: "LITERAL",
					optionValue: "TRUE",
					// sliceValue: null,
					// storeFocusValue: null,
				},
				{
					optionName: "default.num.decimals",
					listEntryType: "VALUE",
					optionValueType: "LITERAL",
					optionValue: "3",
					// sliceValue: null,
					// storeFocusValue: null,
				},
				{
					optionName: "default.icon",
					// listEntryType: "VALUE",
					optionValueType: "ICON",
					optionValue: "commit",
					// sliceValue: null,
					// storeFocusValue: null,
				},
			]);

		findWidget("EnumOptions")
			.getCustomListEntryOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "default.type",
					NewOptionType: true,
					Value: "Bar",
					Index: 0,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
				// {
				// 	Name: "default.index",
				// 	NewOptionType: true,
				// 	Value: "b",
				// 	Index: 1,
				// 	"Option-Entry Action Tooltip": "Set to initial",
				// 	"Option-Entry Action Icon": "icon-close",
				// },
				// {
				// 	Name: "default.identifier",
				// 	NewOptionType: true,
				// 	Value: "TestData(a, b, c)",
				// 	Index: 2,
				// 	"Option-Entry Action Tooltip": "Set to initial",
				// 	"Option-Entry Action Icon": "icon-close",
				// },
				{
					Name: "default.procedure",
					NewOptionType: true,
					Value: "Load_TestData",
					Index: 1,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "default.show.decimals",
					NewOptionType: true,
					Value: "true",
					Index: 2,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "default.num.decimals",
					NewOptionType: true,
					Value: "3",
					Index: 3,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
				{
					Name: "default.icon",
					NewOptionType: true,
					Value: "commit",
					Index: 4,
					"Option-Entry Action Tooltip": "Set to initial",
					"Option-Entry Action Icon": "icon-close",
				},
			]);

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
						// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
						// {
						// 	Name: "contents.#.index",
						// 	NewOptionType: true,
						// 	Value: "b",
						// 	Index: 1,
						// 	"Option-Entry Action Tooltip": "Inherits from default.index",
						// 	"Option-Entry Action Icon": "icon-enter5",
						// },
						// {
						// 	Name: "contents.#.identifier",
						// 	NewOptionType: true,
						// 	Value: "",
						// 	Index: 2,
						// 	"Option-Entry Action Tooltip": "undefined",
						// 	"Option-Entry Action Icon": "",
						// },
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

		findWidget("EnumOptions")
			.getListEntryValues()
			.should.include.something.like([
				{
					DataOf: "Defaults",
					Type: "Bar",
					// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
					// Index: "undefined",
					// 	Identifier: "undefined",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "3",
					Icon: "commit",
				},
				{
					DataOf: "List Entry Index 0",
					Type: "Bar",
					// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
					// Index: "undefined",
					// 	Identifier: "undefined",
					Procedure: "Load_TestData",
					ShowDecimals: "true",
					DecimalsUpto: "3",
					Icon: "commit",
				},
				{
					DataOf: "List Entry Index 1",
					Type: "undefined",
					// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
					// Index: "undefined",
					// 	Identifier: "undefined",
					Procedure: "undefined",
					ShowDecimals: "undefined",
					DecimalsUpto: "undefined",
					Icon: "undefined",
				},
				{
					DataOf: "List Entry Index 2",
					Type: "undefined",
					// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
					// Index: "undefined",
					// 	Identifier: "undefined",
					Procedure: "undefined",
					ShowDecimals: "undefined",
					DecimalsUpto: "undefined",
					Icon: "undefined",
				},
				{
					DataOf: "List Entry Index 3",
					Type: "undefined",
					// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
					// Index: "undefined",
					// 	Identifier: "undefined",
					Procedure: "undefined",
					ShowDecimals: "undefined",
					DecimalsUpto: "undefined",
					Icon: "undefined",
				},
				{
					DataOf: "List Entry Index 4",
					Type: "undefined",
					// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
					// Index: "undefined",
					// 	Identifier: "undefined",
					Procedure: "undefined",
					ShowDecimals: "undefined",
					DecimalsUpto: "undefined",
					Icon: "undefined",
				},
				{
					DataOf: "List Entry Index 5",
					Type: "undefined",
					// Stuff not supported by Value Inheritance at this moment (as discussed with PO):
					// Index: "undefined",
					// 	Identifier: "undefined",
					Procedure: "undefined",
					ShowDecimals: "undefined",
					DecimalsUpto: "undefined",
					Icon: "undefined",
				},
			]);
	}
);
