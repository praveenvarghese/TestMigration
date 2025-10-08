/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test asserting actions on Identifier selector dialog.", () => {
	loadPage("Main Project/MapV3 Test Page/MapV3");

	// Close the Page Manager
	closeAppManager();

	// Open identifier selector dialog for "NodeSet.0 Index" Option. Update the store focus entry and click on Finish button.
	findWidget("MapV3")
		.nodeSetsMapLeafletOptionEditor()
		.getOptionEntry(0, "Index")
		.clickToGetIdentifierSelectionDialog()
		.setStoreFocus([
			{ index: "IND", clear: true },
			{ index: "IND", value: "SelectedIndianCity" },
		])
		.clickOnFinish();

	// Open identifier selector dialog for "NodeSet.0 Latitude" Option. Update the slicing information and click on Finish button.
	findWidget("MapV3")
		.nodeSetsMapLeafletOptionEditor()
		.getOptionEntry(0, "Latitude")
		.clickToGetIdentifierSelectionDialog()
		.setSlices({
			sliceInfo: [{ value: "IND_F" }, { value: "IND" }],
		})
		.clickOnFinish();

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
});
