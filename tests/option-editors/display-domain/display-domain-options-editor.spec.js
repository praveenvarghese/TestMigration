/*!
 * @AIMMS_FILE=models/DisplayDomainSlicingExperiment/DisplayDomainSlicingExperiment.aimms
 */

scenario("Test asserting the correct working of the new display domain options editor.", () => {
	loadPage("Main Project/home");

	// Select a value for the c-index
	findWidget("SelC").setValue("c3");

	// Set the c3/d3-combo of the display domain identifier to 1
	findWidget("DDTable")
		.getCell(2, 2)
		.setValue("1.00");

	findWidget("Tree2")
		.HighChartContentsOptionEditor()
		//.UncollapseListEntrySet(1)
		.editSet(
			0,
			{
				value: "FiveDimPar",
				type: "identifier",
				slice: [
					{ index: "a", type: "FIXED-ELEMENT", value: "a1" },
					{ index: "b", type: "FIXED-ELEMENT", value: "b1" },
					{ index: "c", type: "ELEMENT-PARAMETER", value: "SelectedC" },
					{ index: "e", type: "FIXED-ELEMENT", value: "e1" },
				],
			},
			{
				value: "FiveDimDD",
				type: "identifier",
				slice: [
					{ index: "c", type: "ELEMENT-PARAMETER", value: "SelectedC" },
					{ index: "d", type: "FIXED-ELEMENT", value: "d3" },
				],
			}
		);

	// Verify that the option editors look as expected, including the one for the display domain
	findWidget("Tree2")
		.HighChartContentsOptionEditor()
		.UncollapseListEntrySet(0)
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
						Value: "FiveDimPar('a1', 'b1', SelectedC, d, 'e1')",
						Index: 0,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
					{
						Name: "Display Domain",
						NewOptionType: true,
						Value: "FiveDimDD(SelectedC, 'd3')",
						Index: 1,
						"Option-Entry Action Tooltip": "Set to initial",
						"Option-Entry Action Icon": "icon-close",
					},
				],
			},
		]);
});
