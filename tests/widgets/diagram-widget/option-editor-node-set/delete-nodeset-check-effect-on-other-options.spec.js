/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"Delete the index field of a nodeset and make sure that the related options (XCoordinate/YCoordinate) are cleared automatically.",
	() => {
		loadPage("Main Project/home");

		findWidget("MyDiagram")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(1)
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
					NodeSetItemValue: [
						"p, p -> TheSelectedPerson",
						["Active", "", ""],
						"PeopleX(p)",
						"PeopleY(p)",
					],
				},
			]);

		findWidget("MyDiagram")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(1)
			.deleteNodeInformation(1, "Index");

		findWidget("MyDiagram")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(1)
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
					NodeSetItemValue: [null, ["Active", "", ""], null, null],
				},
			]);
	}
);
