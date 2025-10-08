/*!
 * @AIMMS_FILE=models/CustomWidgets/3157-ListUnfoldedWhenAdded/ListUnfoldedWhenAdded.aimms
 */

scenario(
	"Asserting that irrespective of whether the previous List Entry Set is collapsed or unfolded, when a new List Entry is added, it is always unfolded and its options visible #3157",
	() => {
		loadPage("Main Project/home");

		// When the previous List Entry is collapsed and new List entry is added. Asserting the details on option-editor.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.addSet()
			.closeListEntrySet({ listEntryName: "samples.0" })
			.addSet()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Collapsed",
					ListEntryOrder: 0,
					Options: [],
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
			]);

		// When the previous List Entry is unfolded and new List Entry is added. Asserting the details on option-editor.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.openListEntrySet({ listEntryName: "samples.1" })
			.addSet()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Collapsed",
					ListEntryOrder: 0,
					Options: [],
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
			]);

		// When the previous List Entry is unfolded and collapsed, and a new List Entry is added. Asserting the details on option-editor.
		findWidget("CustomCollapsibleTitle")
			.CustomCollapsibleTitlesOptionEditor()
			.openListEntrySet({ listEntryName: "samples.2" })
			.closeListEntrySet({ listEntryName: "samples.2" })
			.addSet()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "samples.0",
					ListEntryState: "Collapsed",
					ListEntryOrder: 0,
					Options: [],
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
					ListEntryState: "Collapsed",
					ListEntryOrder: 2,
					Options: [],
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
			]);
	}
);
