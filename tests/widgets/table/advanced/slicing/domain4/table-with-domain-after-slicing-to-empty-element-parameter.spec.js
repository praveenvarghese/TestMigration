/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

// FIXED, November 23, 2017

scenario(
	"Table with domain, after slicing to empty element parameter, should have correct data in cells.",
	() => {
		loadPage("Main Project/home?table-v2=false");
		loadPage("Main Project/Domain?table-v2=false");

		findWidget("OrderTableWithDomain")
			.getNumRowsInGridViewport()
			.should.be.equal(5); // all vowels in {a,e,i,o,u}

		findWidget("SelectionFromAlphabetWithDomain").select(["a", "b", "c"]);

		findWidget("OrderTableWithDomain")
			.getNumRowsInGridViewport()
			.should.be.equal(8); // all vowels in {a,e,i,o,u} plus letters in {a,b,c}

		findWidget("OrderTableWithDomain")
			.getSlicingOptionEditor()
			.setSlices({
				identifier: "OrderInAlphabet",
				slice: [
					{
						index: "a",
						type: "element-parameter",
						value: "EmptyEPFromAlphabet",
					},
				],
			});

		findWidget("OrderTableWithDomain")
			.getNumRowsInGridViewport()
			.should.be.equal(5); // all vowels in {a,e,i,o,u} again

		// restore state
		findWidget("SelectionFromAlphabetWithDomain").deselect(["a", "b", "c"]);
	}
);
