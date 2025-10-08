/*!
 * @AIMMS_FILE=models/CustomWidgets/3157-ListUnfoldedWhenAdded/ListUnfoldedWhenAdded.aimms
 */

scenario(
	"Asserting List Entry Set custom title, when editing options of the list-entry set on a Custom Widget option-editor #3156",
	() => {
		loadPage("Main Project/3156");

		// Adding a new List entry set, with any data.
		// Asserting the list entry title reflects as configured in custom widget
		findWidget("LETitles")
			.getNewCustomWidgetEnumOptionEditor()
			.addSet()
			.getListEntryDetails()
			.should.eql([
				{
					ListEntryTitle: "FlightCargoCost(a1, a2) Between Airports and Airports",
					ListEntryState: "Collapsed",
					ListEntryOrder: 0,
					Options: [],
				},
				{
					ListEntryTitle: "Between  and",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "contents.#.type",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "contents.#.indexfrom",
							NewOptionType: true,
							Value: "",
							Index: 1,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "contents.#.indexto",
							NewOptionType: true,
							Value: "",
							Index: 2,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
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

		// Editing a List entry set. Providing the data for the options.
		// Asserting the list entry title reflects as configured in custom widget
		findWidget("LETitles")
			.getNewCustomWidgetEnumOptionEditor()
			.openListEntrySet({ listEntryIndex: 1 })
			.editSet(
				1,
				null,
				{
					value: "f",
					type: "identifier",
				},
				{
					value: "a1",
					type: "identifier",
				},
				{
					value: "FlightCargoCost",
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
					ListEntryTitle: "FlightCargoCost(a1, a2) Between Factories and Airports",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "contents.#.type",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
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

		// Editing a List entry set. Updating the data for the options.
		// Asserting the list entry title reflects as configured in custom widget
		findWidget("LETitles")
			.getNewCustomWidgetEnumOptionEditor()
			.openListEntrySet({ listEntryIndex: 1 })
			.editSet(
				1,
				null,
				{
					value: "a2",
					type: "identifier",
				},
				{
					value: "f",
					type: "identifier",
				},
				{ type: "Clear value" }
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
					ListEntryTitle: "Between Airports and Factories",
					ListEntryState: "Expanded",
					ListEntryOrder: 1,
					Options: [
						{
							Name: "contents.#.type",
							NewOptionType: true,
							Value: "",
							Index: 0,
							"Option-Entry Action Tooltip": "undefined",
							"Option-Entry Action Icon": "",
						},
						{
							Name: "contents.#.indexfrom",
							NewOptionType: true,
							Value: "a2",
							Index: 1,
							"Option-Entry Action Tooltip": "Set to initial",
							"Option-Entry Action Icon": "icon-close",
						},
						{
							Name: "contents.#.indexto",
							NewOptionType: true,
							Value: "f",
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
