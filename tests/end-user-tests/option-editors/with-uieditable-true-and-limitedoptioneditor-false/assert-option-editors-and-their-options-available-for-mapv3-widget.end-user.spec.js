/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"As an end user, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Map (MapV3) Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/MapV3 Test Page/MapV3");

		// Verify that the Kebab menu is present
		findWidget("MapV3")
			.isKebabMenuPresent()
			.should.eql(true);

		// Click on Map V3 Widget Settings, and assert the info on Option Editor.
		findWidget("MapV3")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(mapWidgetOptions());

		// For the Map V3 Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("MapV3")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "MapV3 with Nodes and Arcs",
				"OptionEditorTab Title": "Node Sets",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("MapV3")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Widget Actions",
					NewOptionType: true,
					Value:
						"WidgetActionsInfo(webui::indexPageExtension, webui::indexWidgetActionSpec)",
					Index: 0,
				},
				{
					Name: "Item Actions",
					NewOptionType: true,
					Value:
						"ItemActionsInfo(webui::indexWidgetItemActionSpec, webui::indexPageExtension, webui::indexWidgetActionSpec)",
					Index: 1,
				},
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("MapV3")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Zoom", NewOptionType: true, Value: "5", Index: 0 },
				{
					Name: "Step Size",
					NewOptionType: true,
					Value: "",
					Index: 1,
					"Option-Entry Action Tooltip": "undefined",
					"Option-Entry Action Icon": "",
				},
				{
					Name: "Center Latitude",
					NewOptionType: true,
					Value: "23.40276490540795",
					Index: 2,
				},
				{ Name: "Center Longitude", NewOptionType: true, Value: "83.9794921875", Index: 3 },
				{ Name: "Visible", NewOptionType: false, Value: "Visibility", Index: 4 },
				{
					Name: "Title",
					NewOptionType: true,
					Value: "MapV3 with Nodes and Arcs",
					Index: 5,
				},
			]);

		// Assert options available on "Node-Sets" option editor and their data
		findWidget("MapV3")
			.nodeSetsMapLeafletOptionEditor()
			.getOptionsInfo()
			.should.eql([
				{
					Name: "Nodes.0",
					nodeSetsInfo: [
						{
							Name: "Index",
							NewOptionType: true,
							Value: "IND, IND -> SelectedIndianCity",
							ListEntryOrder: 0,
						},
						{
							Name: "Latitude",
							NewOptionType: true,
							Value: "IND_Latitude(IND)",
							ListEntryOrder: 1,
						},
						{
							Name: "Longitude",
							NewOptionType: true,
							Value: "IND_Longitude(IND)",
							ListEntryOrder: 2,
						},
						{
							Name: "Size",
							NewOptionType: true,
							Value: "IND_Capacity(IND)",
							ListEntryOrder: 3,
						},
						{
							Name: "Maximum Reference Size",
							NewOptionType: true,
							Value: "IND_DCs_Capacity_Reference",
							ListEntryOrder: 4,
						},
						{
							Name: "Icon",
							NewOptionType: true,
							Value: "Annotations_IND(IND)",
							ListEntryOrder: 5,
						},
					],
				},
				{
					Name: "Nodes.1",
					nodeSetsInfo: [
						{
							Name: "Index",
							NewOptionType: true,
							Value: "IND_F, IND_F -> IND_F_SelectedFactory",
							ListEntryOrder: 0,
						},
						{
							Name: "Latitude",
							NewOptionType: true,
							Value: "IND_Latitude(IND_F)",
							ListEntryOrder: 1,
						},
						{
							Name: "Longitude",
							NewOptionType: true,
							Value: "IND_Longitude(IND_F)",
							ListEntryOrder: 2,
						},
						{ Name: "Size", NewOptionType: true, Value: "", ListEntryOrder: 3 },
						{
							Name: "Maximum Reference Size",
							NewOptionType: true,
							Value: "",
							ListEntryOrder: 4,
						},
						{
							Name: "Icon",
							NewOptionType: true,
							Value: "Annotations_IND_F(IND_F)",
							ListEntryOrder: 5,
						},
					],
				},
				{
					Name: "Nodes.2",
					nodeSetsInfo: [
						{
							Name: "Index",
							NewOptionType: true,
							Value: "IND_Q, IND_Q -> IND_Q_SelectedQualityCentre",
							ListEntryOrder: 0,
						},
						{
							Name: "Latitude",
							NewOptionType: true,
							Value: "IND_Latitude(IND_Q)",
							ListEntryOrder: 1,
						},
						{
							Name: "Longitude",
							NewOptionType: true,
							Value: "IND_Longitude(IND_Q)",
							ListEntryOrder: 2,
						},
						{
							Name: "Size",
							NewOptionType: true,
							Value: "IND_QC_CertificationCapacity(IND_Q)",
							ListEntryOrder: 3,
						},
						{
							Name: "Maximum Reference Size",
							NewOptionType: true,
							Value: "150",
							ListEntryOrder: 4,
						},
						{ Name: "Icon", NewOptionType: true, Value: "", ListEntryOrder: 5 },
					],
				},
				{
					Name: "Nodes.3",
					nodeSetsInfo: [
						{ Name: "Index", NewOptionType: true, Value: "a", ListEntryOrder: 0 },
						{ Name: "Latitude", NewOptionType: true, Value: "", ListEntryOrder: 1 },
						{ Name: "Longitude", NewOptionType: true, Value: "", ListEntryOrder: 2 },
						{ Name: "Size", NewOptionType: true, Value: "", ListEntryOrder: 3 },
						{
							Name: "Maximum Reference Size",
							NewOptionType: true,
							Value: "",
							ListEntryOrder: 4,
						},
						{ Name: "Icon", NewOptionType: true, Value: "", ListEntryOrder: 5 },
					],
				},
			]);

		// Assert options available on "Arc-Sets" option editor and their data
		findWidget("MapV3")
			.arcSetsOptionEditor()
			.getOptionsInfo()
			.should.eql([
				{
					Name: "Arcs.0",
					nodeSetsInfo: [
						{
							Name: "Value",
							NewOptionType: true,
							Value: "ArcsBetweenIND(IND_DC, IND_F)",
							ListEntryOrder: 0,
						},
						{ Name: "Label", NewOptionType: true, Value: "", ListEntryOrder: 1 },
						{
							Name: "Hide Labels",
							NewOptionType: true,
							Value: "true",
							ListEntryOrder: 2,
						},
						{
							Name: "Dynamic Width",
							NewOptionType: true,
							Value: "true",
							ListEntryOrder: 3,
						},
						{
							Name: "Show Straight Lines",
							NewOptionType: true,
							Value: "true",
							ListEntryOrder: 4,
						},
						{
							Name: "Decimal Places",
							NewOptionType: true,
							Value: "5",
							ListEntryOrder: 5,
						},
					],
				},
				{
					Name: "Arcs.1",
					nodeSetsInfo: [
						{
							Name: "Value",
							NewOptionType: true,
							Value:
								"ArcsBetweenIND_DC_F(IND_DC, IND_F), IND_DC -> IND_DC_SelectedDC, IND_F -> IND_F_SelectedFactory",
							ListEntryOrder: 0,
						},
						{ Name: "Label", NewOptionType: true, Value: "", ListEntryOrder: 1 },
						{
							Name: "Hide Labels",
							NewOptionType: true,
							Value: "HideLabels",
							ListEntryOrder: 2,
						},
						{
							Name: "Dynamic Width",
							NewOptionType: true,
							Value: "DynamicArcWidths",
							ListEntryOrder: 3,
						},
						{
							Name: "Show Straight Lines",
							NewOptionType: true,
							Value: "StraightLines",
							ListEntryOrder: 4,
						},
						{
							Name: "Decimal Places",
							NewOptionType: true,
							Value: "Decimal_Points",
							ListEntryOrder: 5,
						},
					],
				},
			]);

		// Assert options available on "HeatMap-Sets" option editor and their data
		findWidget("MapV3")
			.getHeatMapOptionEditor()
			.getOptionsInfo()
			.should.eql([
				{
					Name: "HeatMaps.0",
					nodeSetsInfo: [
						{ Name: "Index", NewOptionType: true, Value: "IND_F", ListEntryOrder: 0 },
						{
							Name: "Latitude",
							NewOptionType: true,
							Value: "IND_Latitude(IND_F)",
							ListEntryOrder: 1,
						},
						{
							Name: "Longitude",
							NewOptionType: true,
							Value: "IND_Longitude(IND_F)",
							ListEntryOrder: 2,
						},
						{
							Name: "Data",
							NewOptionType: true,
							Value: "IND_Factories_Output(IND_F)",
							ListEntryOrder: 3,
						},
						{
							Name: "Hide Heatmap",
							NewOptionType: true,
							Value: "false",
							ListEntryOrder: 4,
						},
					],
				},
			]);
	}
);
