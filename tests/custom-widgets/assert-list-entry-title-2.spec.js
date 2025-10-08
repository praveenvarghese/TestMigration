/*!
 * @AIMMS_FILE=models/CustomWidgets/3157-ListUnfoldedWhenAdded/ListUnfoldedWhenAdded.aimms
 */

scenario(
	"Asserting List Entry Set custom title, when a new list-entry is added on a Custom Widget option-editor #3156",
	() => {
		loadPage("Main Project/3156");

		// Adding a new List entry set. Providing the data for the options.
		// Asserting the list entry title reflects as configured in custom widget
		findWidget("LETitles")
			.getNewCustomWidgetEnumOptionEditor()
			.addSet(
				{
					value: "Area",
					type: "enum",
				},
				{
					value: "f",
					type: "identifier",
				},
				{
					value: "a1",
					type: "identifier",
				}
			)
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "FlightCargoCost(a1, a2) Between Airports and Airports",
					ListEntryState: "Collapsed",
					ListEntryOrder: 0,
					Options: [],
				},
				{
					ListEntryTitle: "Between Factories and Airports",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "contents.#.type",
							NewOptionType: true,
							Value: "Area",
							Index: 0,
							"Option-Entry Action Tooltip": "Set to initial",
							"Option-Entry Action Icon": "icon-close",
						},
						{
							Name: "contents.#.indexfrom",
							NewOptionType: true,
							Value: "f",
							Index: 1,
							"Option-Entry Action Tooltip": "Set to initial",
							"Option-Entry Action Icon": "icon-close",
						},
						{
							Name: "contents.#.indexto",
							NewOptionType: true,
							Value: "a1",
							Index: 2,
							"Option-Entry Action Tooltip": "Set to initial",
							"Option-Entry Action Icon": "icon-close",
						},
						{
							Name: "Identifier",
							NewOptionType: true,
							Value: "",
							Index: 3,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
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
	}
);
