/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test asserting actions on Identifier selector dialog.", () => {
	loadPage("Main Project/MapV3 Test Page/MapV3");

	// Open identifier selector dialog for "ArcSet.1 Value" Option. And click on Finish button without any modifications.
	findWidget("MapV3")
		.arcSetsOptionEditor()
		.expandArcSet(1)
		.getOptionEntry(1, "Value")
		.clickToGetIdentifierSelectionDialog()
		.clickOnFinish();

	// Open identifier selector dialog for "ArcSet.1 Value" Option. And click on Cancel button without any modifications.
	findWidget("MapV3")
		.arcSetsOptionEditor()
		.expandArcSet(0)
		.getOptionEntry(0, "Value")
		.clickToGetIdentifierSelectionDialog()
		.clickOnCancel();

	// Open identifier selector dialog for "ArcSet.1 Hide Labels" Option. And click on Finish button without any modifications.
	findWidget("MapV3")
		.arcSetsOptionEditor()
		.expandArcSet(1)
		.getOptionEntry(1, "Hide Labels")
		.clickToGetIdentifierSelectionDialog()
		.clickOnFinish();

	// Open identifier selector dialog for "ArcSet.1 Hide Labels" Option. And click on Cancel button without any modifications.
	findWidget("MapV3")
		.arcSetsOptionEditor()
		.expandArcSet(1)
		.getOptionEntry(1, "Dynamic Width")
		.clickToGetIdentifierSelectionDialog()
		.clickOnCancel();

	// Previously optiondialogs were closed superfluously in e2e,
	// we fixed this and made tests faster, but somehow, getOptionsInfo()
	// does not work properly if we reuse the already opened optiondialog.
	// So for this test we manually close the optiondialog to mimic old behaviour.
	// @TODO FIXME
	findWidget("MapV3").closeOptionDialog();

	// Assert options available on "Arc-Sets" option editor and their data
	findWidget("MapV3")
		.arcSetsOptionEditor()
		.expandArcSet(0)
		.expandArcSet(1)
		.getListEntryDetails()
		.should.eql([
			{
				ListEntryTitle: "ArcsBetweenIND(IND_DC, IND_F)",
				ListEntryState: "Expanded",
				ListEntryOrder: 0,
				Options: [
					{
						Name: "Value",
						NewOptionType: true,
						Value: "ArcsBetweenIND(IND_DC, IND_F)",
						Index: 0,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Label",
						NewOptionType: true,
						Value: "",
						Index: 1,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Hide Labels",
						NewOptionType: true,
						Value: "true",
						Index: 2,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Dynamic Width",
						NewOptionType: true,
						Value: "true",
						Index: 3,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Show Straight Lines",
						NewOptionType: true,
						Value: "true",
						Index: 4,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Decimal Places",
						NewOptionType: true,
						Value: "5",
						Index: 5,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
			},
			{
				ListEntryTitle:
					"ArcsBetweenIND_DC_F(IND_DC, IND_F), IND_DC -> IND_DC_SelectedDC, IND_F -> IND_F_SelectedFactory",
				ListEntryState: "Expanded",
				ListEntryOrder: 1,
				Options: [
					{
						Name: "Value",
						NewOptionType: true,
						Value:
							"ArcsBetweenIND_DC_F(IND_DC, IND_F), IND_DC -> IND_DC_SelectedDC, IND_F -> IND_F_SelectedFactory",
						Index: 0,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Label",
						NewOptionType: true,
						Value: "",
						Index: 1,
						"Option-Entry Action Tooltip": "undefined",
						"Option-Entry Action Icon": "",
					},
					{
						Name: "Hide Labels",
						NewOptionType: true,
						Value: "HideLabels",
						Index: 2,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Dynamic Width",
						NewOptionType: true,
						Value: "DynamicArcWidths",
						Index: 3,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Show Straight Lines",
						NewOptionType: true,
						Value: "StraightLines",
						Index: 4,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Decimal Places",
						NewOptionType: true,
						Value: "Decimal_Points",
						Index: 5,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
			},
		]);
});
