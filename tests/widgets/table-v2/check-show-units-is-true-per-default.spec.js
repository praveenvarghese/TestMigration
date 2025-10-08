/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Check show units option is true per default", () => {
	loadPage("Main Project/FirstPage");

	openPageConfigurator()
		.getAddWidgetDialogForArea("Area B")
		.selectType("table")
		.enterName("AicraftDataTable2")
		.clickAddWidgetButton();

	closePageConfigurator();

	findWidget("AicraftDataTable2")
		.openTableContentsOptionEditor()
		.getListEntryDetails()
		.should.eql([
			{
				ListEntryTitle: "contents.0",
				ListEntryState: "Expanded",
				ListEntryOrder: 0,
				Options: [
					{
						Name: "Identifier",
						NewOptionType: true,
						Value: "",
						Index: 0,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Display Domain",
						NewOptionType: true,
						Value: "",
						Index: 1,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Decimal Places",
						NewOptionType: true,
						Value: "",
						Index: 2,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Show Units",
						NewOptionType: true,
						Value: "true",
						Index: 3,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Visibility",
						NewOptionType: true,
						Value: "Default",
						Index: 4,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Read Only",
						NewOptionType: true,
						Value: "Default",
						Index: 5,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
				],
			},
		]);

	findWidget("AicraftDataTable2")
		.openTableContentsOptionEditor()
		.modifyContents(
			0,
			{
				value: "FuselageLength",
				type: "identifier",
			},
			null,
			null,
			null,
			null
		);

	findWidget("AicraftDataTable2")
		.openTableContentsOptionEditor()
		.getListEntryDetails()
		.should.eql([
			{
				ListEntryTitle: "FuselageLength(a)",
				ListEntryState: "Expanded",
				ListEntryOrder: 0,
				Options: [
					{
						Name: "Identifier",
						NewOptionType: true,
						Value: "FuselageLength(a)",
						Index: 0,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Display Domain",
						NewOptionType: true,
						Value: "",
						Index: 1,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Decimal Places",
						NewOptionType: true,
						Value: "",
						Index: 2,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Show Units",
						NewOptionType: true,
						Value: "true",
						Index: 3,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Visibility",
						NewOptionType: true,
						Value: "Default",
						Index: 4,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Read Only",
						NewOptionType: true,
						Value: "Default",
						Index: 5,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
				],
			},
		]);

	findWidget("AicraftDataTable2")
		.getGridValues()
		.should.shallowDeepEqual([
			[
				"34.90 m",
				"37.57 m",
				"63.66 m",
				"39.50 m",
				"76.28 m",
				"46.97 m",
				"36.25 m",
				"38.66 m",
			],
		]);
});
