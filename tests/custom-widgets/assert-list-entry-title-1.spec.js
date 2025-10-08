/*!
 * @AIMMS_FILE=models/CustomWidgets/3157-ListUnfoldedWhenAdded/ListUnfoldedWhenAdded.aimms
 */

scenario("Asserting custom title of List-Entry on a Custom Widget option-editor #3156", () => {
	loadPage("Main Project/3156");

	// Asserting list entry title for an existing list-entry set on the option-editor.
	findWidget("LETitles")
		.getNewCustomWidgetEnumOptionEditor()
		.getListEntryDetails()
		.should.eql([
			{
				ListEntryTitle: "FlightCargoCost(a1, a2) Between Airports and Airports",
				ListEntryState: "Collapsed",
				ListEntryOrder: 0,
				Options: [],
			},
		]);

	// Unfolding the list-entry and asserting the details on the option-editor.
	findWidget("LETitles")
		.getNewCustomWidgetEnumOptionEditor()
		.openListEntrySet({ listEntryIndex: 0 })
		.getListEntryDetails()
		.should.eql([
			{
				ListEntryTitle: "FlightCargoCost(a1, a2) Between Airports and Airports",
				ListEntryState: "Expanded",
				ListEntryOrder: 0,
				Options: [
					{
						Name: "contents.#.type",
						NewOptionType: true,
						Value: "Bar",
						Index: 0,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "contents.#.indexfrom",
						NewOptionType: true,
						Value: "a1",
						Index: 1,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "contents.#.indexto",
						NewOptionType: true,
						Value: "a2",
						Index: 2,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Identifier",
						NewOptionType: true,
						Value: "FlightCargoCost(a1, a2)",
						Index: 3,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Decimal Places",
						NewOptionType: true,
						Value: "",
						Index: 4,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
				],
			},
		]);
});
