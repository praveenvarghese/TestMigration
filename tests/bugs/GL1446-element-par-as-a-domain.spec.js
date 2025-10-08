/*!
 * @AIMMS_FILE=models/Bugs/GL1446-ElementDomainTest/ElementDomainTest.aimms
 */

scenario(
	"GL1446 - Using only an element parameter as the domain of a parameter in AIMMS, the parameter was not displayed in WebUI widgets",
	() => {
		loadPage("Main Project/home");

		// Check the number of columns in the row header area
		findWidget("IsPossible")
			.getNumColsInGridViewport()
			.should.be.equal(1);

		findWidget("IsPossible")
			.getNumRowsInGridViewport()
			.should.be.equal(4);

		findWidget("Staafjes")
			.getNumberOfBars()
			.should.be.equal(4);

		findWidget("TheLine")
			.getXAxisElements()
			.should.have.numberOfItems.equal(4);
	}
);
