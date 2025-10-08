/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario("Simply verify that the options for a node set are the expected ones.", () => {
	loadPage("Main Project/Empty Diagram");

	findWidget("CleanSheet")
		.openDiagramNodeSetOptionEditor()
		.getDetailsForNodeSetItem(0)
		.should.eql([
			{
				NodeSetItem: [
					"Index",
					"X Coordinate",
					"Y Coordinate",
					"Button Visibility",
					"Template",
				],
				NodeSetItemValue: [null, ["Active", "", ""], null, null],
			},
		]);
});
