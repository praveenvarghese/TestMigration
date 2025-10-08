/*!
 * @AIMMS_FILE=models/Bugs/GL3767-SameTextNameIssueBarLineChart/typeChange.aimms
 */

scenario("Element text has repeating values in barline chart issue", () => {
	loadPage("Main Project/home");

	// Assert count of Barchart elements
	findWidget("newBarLine")
		.getNumberOfBars()
		.should.be.equal(7);

	findWidget("newBarLine")
		.getXAxisElements()
		.should.eql([
			"Element 1",
			"hidden",
			"Element 3",
			"hidden",
			"Element 5",
			"hidden",
			"Element 7",
		]);

	findWidget("newBar")
		.getNumberOfBars()
		.should.be.equal(7);

	findWidget("newBar")
		.getXAxisElements()
		.should.eql([
			"Element 1",
			"hidden",
			"Element 3",
			"hidden",
			"Element 5",
			"hidden",
			"Element 7",
		]);
});
