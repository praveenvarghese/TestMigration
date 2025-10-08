/*!
 * @AIMMS_FILE=models/Bugs/GL1750-WidgetServerBufferProblems/EmptyIETableWP4.aimms
 */

scenario(
	"GL1750 - The C++ Widget Server had a (ring) buffer problem, causing the associated test model to lose its data connection every few seconds.",
	() => {
		loadPage("Main Project/home");

		// Check that the table header displays the foreign characters as expected
		findWidget("Export")
			.getColHeaderCell(0, 4)
			.getText()
			.should.be.equal("汉语");

		findWidget("Export")
			.getRowHeaderCell(5, 1)
			.getText()
			.should.be.equal("בתבונה");

		// Check some random data values to also verify the responsiveness of the model.
		findWidget("Export")
			.getCell(4, 2)
			.getValue()
			.should.be.equal("67.20");

		findWidget("Export")
			.getCell(7, 1)
			.getValue()
			.should.be.equal("22.30");

		getCollectedVeilMessages().should.not.include.something.like({
			type: "warning",
			description: "Data session unavailable.",
		});
	}
);
