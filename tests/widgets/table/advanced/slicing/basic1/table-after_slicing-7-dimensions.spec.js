/*!
 * @AIMMS_FILE=models/School/School.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Table after slicing 7(!) identifiers to various choices (index/elt/fixed) should have correct data in cells. ",
	() => {
		loadPage("Main Project/home?table-v2=false");

		findWidget("Planning Table")
			.getSlicingOptionEditor()
			.setSlices({
				identifier: "Lesson",
				slice: [
					{
						index: "s",
						type: "index",
						value: "lan",
					},
					{
						index: "h",
						type: "fixed-element",
						value: "5",
					},
				],
			});

		findWidget("Planning Table")
			.getCell(5, 2)
			.getValue()
			.should.be.equal(false);

		findWidget("Planning Table")
			.getCell(13, 5)
			.getValue()
			.should.be.equal(true);

		findWidget("Planning Table")
			.getCell(1, 11)
			.getValue()
			.should.be.equal(true);

		findWidget("Planning Table")
			.getCell(2, 2)
			.getValue()
			.should.be.equal(true);

		findWidget("Planning Table")
			.getCell(1, 3)
			.getValue()
			.should.be.equal(false);

		/* After this initial slicing, slice further, such that all 7 identifiers are sliced. */
		findWidget("Planning Table")
			.getSlicingOptionEditor()
			.clearSlices(["Lesson"])
			.setSlices({
				identifier: "Lesson",
				slice: [
					{
						index: "s",
						type: "index",
						value: "lan",
					},
					{
						index: "h",
						type: "fixed-element",
						value: "5",
					},
					{
						index: "r",
						type: "fixed-element",
						value: "Classroom-5",
					},
					{
						index: "b",
						type: "fixed-element",
						value: "Building-2",
					},
					{
						index: "d",
						type: "fixed-element",
						value: "Thursday",
					},
					{
						index: "c",
						type: "fixed-element",
						value: "Class-3",
					},
					{
						index: "t",
						type: "index",
						value: "ft",
					},
				],
			});

		findWidget("Planning Table")
			.getNumRowsInGridViewport()
			.should.be.equal(5);

		findWidget("Planning Table")
			.getNumColsInGridViewport()
			.should.be.equal(1);

		findWidget("Planning Table")
			.getCell(3, 0)
			.getValue()
			.should.be.equal(true);

		findWidget("Planning Table")
			.getColHeaderCell(0, 0)
			.getText()
			.should.be.equal("Lesson");

		findWidget("Planning Table")
			.getRowHeaderCell(0, 0)
			.getText()
			.should.be.equal("English");

		findWidget("Planning Table")
			.getRowHeaderCell(1, 0)
			.getText()
			.should.be.equal("English");

		findWidget("Planning Table")
			.getRowHeaderCell(1, 1)
			.getText()
			.should.be.equal("Johnson");

		findWidget("Planning Table")
			.getRowHeaderCell(3, 0)
			.getText()
			.should.be.equal("Latin");

		findWidget("Planning Table")
			.getRowHeaderCell(3, 1)
			.getText()
			.should.be.equal("Michaels");
	}
);
