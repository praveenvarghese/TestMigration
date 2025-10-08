/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"Clearing the store focus setting of a node set shoud not clear off the coordinate fields.",
	() => {
		loadPage("Main Project/home");

		// Remove the store focus for the 'People' node set
		findWidget("MyDiagram")
			.openDiagramNodeSetOptionEditor()
			.getOptionEntry(1, "Index")
			.clickToGetIdentifierSelectionDialog()
			.setStoreFocus([{ index: "p", clear: true }])
			.clickOnFinish();

		// Verify that the coordinate fields are still there
		findWidget("MyDiagram")
			.openDiagramNodeSetOptionEditor()
			.getDetailsForNodeSetItem(1)
			.should.eql([
				{
					NodeSetItem: [
						"Index",
						"X Coordinate",
						"Y Coordinate",
						"Button Visibility",
						"Template",
					],
					NodeSetItemValue: ["p", ["Active", "", ""], "PeopleX(p)", "PeopleY(p)"],
				},
			]);
	}
);
