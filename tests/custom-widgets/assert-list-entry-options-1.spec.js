/*!
 * @AIMMS_FILE=models/CustomWidgets/3157-ListUnfoldedWhenAdded/ListUnfoldedWhenAdded.aimms
 */

scenario(
	"Asserting List Entry and its options visible, when added on a Custom Widget custom list-enty option-editor #3157",
	() => {
		loadPage("Main Project/home");

		// When no list entry is added yet. Asserting the details on the option-editor.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);

		// Post adding 1 List Entry. Asserting the List Entry and its option visible on the option-editor.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.addSet()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.1",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);

		// When the option-editor is closed and reopened, asserting the details.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.1",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);

		// Post adding 5 more list entries, asserting the details.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.addSet()
			.addSet()
			.addSet()
			.addSet()
			.addSet()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.1",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.2",
					ListEntryState: "Expanded",
					ListEntryOrder: 2,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.3",
					ListEntryState: "Expanded",
					ListEntryOrder: 3,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.4",
					ListEntryState: "Expanded",
					ListEntryOrder: 4,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.5",
					ListEntryState: "Expanded",
					ListEntryOrder: 5,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.6",
					ListEntryState: "Expanded",
					ListEntryOrder: 6,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);

		// When the option-editor is closed and reopened, asserting the details.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.1",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.2",
					ListEntryState: "Expanded",
					ListEntryOrder: 2,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.3",
					ListEntryState: "Expanded",
					ListEntryOrder: 3,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.4",
					ListEntryState: "Expanded",
					ListEntryOrder: 4,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.5",
					ListEntryState: "Expanded",
					ListEntryOrder: 5,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.6",
					ListEntryState: "Expanded",
					ListEntryOrder: 6,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);

		// When the option-editor is closed and reopened. Adding 5 more List Entries and asserting the details.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.addSet()
			.addSet()
			.addSet()
			.addSet()
			.addSet()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Expanded",
					ListEntryOrder: 0,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.1",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.2",
					ListEntryState: "Expanded",
					ListEntryOrder: 2,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.3",
					ListEntryState: "Expanded",
					ListEntryOrder: 3,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.4",
					ListEntryState: "Expanded",
					ListEntryOrder: 4,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.5",
					ListEntryState: "Expanded",
					ListEntryOrder: 5,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.6",
					ListEntryState: "Expanded",
					ListEntryOrder: 6,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.7",
					ListEntryState: "Expanded",
					ListEntryOrder: 7,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.8",
					ListEntryState: "Expanded",
					ListEntryOrder: 8,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.9",
					ListEntryState: "Expanded",
					ListEntryOrder: 9,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.10",
					ListEntryState: "Expanded",
					ListEntryOrder: 10,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
				{
					ListEntryTitle: "samples.11",
					ListEntryState: "Expanded",
					ListEntryOrder: 11,
					Options: [
						{
							Name: "samples.#.optionA",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "samples.#.optionB",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
					],
				},
			]);
	}
);
