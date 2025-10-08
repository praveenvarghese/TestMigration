/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario("Add a new node from node set placeholder and check the effect on the model data", () => {
	loadPage("Main Project/home");

	findWidget("Coordinates_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["32.00", "-208.00"],
			["32.00", "-368.00"],
			["-176.00", "-368.00"],
			["32.00", "-288.00"],
			["-176.00", "-288.00"],
			["-176.00", "-208.00"],
		]);

	findWidget("Coordinates_1")
		.getRowHeaderCells(0, 0, 5)
		.should.beEqualTo(["Marietje", "People-1", "People-2", "People-3", "People-4", "Piet"]);

	findWidget("MyDiagram").addNode("People", 100, 100);

	findWidget("Coordinates_1")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["32.00", "-208.00"],
			["32.00", "-368.00"],
			["-176.00", "-368.00"],
			["32.00", "-288.00"],
			["-176.00", "-288.00"],
			["-224.00", "-416.00"],
			["-176.00", "-208.00"],
		]);

	findWidget("Coordinates_1")
		.getRowHeaderCells(0, 0, 6)
		.should.beEqualTo([
			"Marietje",
			"People-1",
			"People-2",
			"People-3",
			"People-4",
			"People-5",
			"Piet",
		]);
});
