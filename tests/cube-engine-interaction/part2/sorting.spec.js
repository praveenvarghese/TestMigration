/*!
 * @AIMMS_FILE=models/CubeEngineTests/CubeEngineTests.aimms
 */

scenario("Check table with sorting (and totals)", () => {
	loadPage("Main Project/Sorting");

	findWidget("R1Sorted")
		.getNumRowsInGridViewport()
		.should.be.equal(4);

	findWidget("R1Sorted")
		.getNumColsInGridViewport()
		.should.be.equal(1);

	findWidget("R1Sorted")
		.getColHeaderCell(0, 0)
		.hasFlags(["sortable", "sortedIncreasing"])
		.should.be.equal(true);

	// total value should not be taken into acccount while sorting

	findWidget("R1Sorted")
		.getRowHeaderCell(0, 0)
		.getText()
		.should.be.equal("i2");

	findWidget("R1Sorted")
		.getRowHeaderCell(1, 0)
		.getText()
		.should.be.equal("i3");

	findWidget("R1Sorted")
		.getRowHeaderCell(2, 0)
		.getText()
		.should.be.equal("i1");

	findWidget("R1Sorted")
		.getRowHeaderCell(3, 0)
		.getText()
		.should.be.equal("total mean");
});
