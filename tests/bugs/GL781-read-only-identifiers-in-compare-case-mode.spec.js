/*!
 * @AIMMS_FILE=models/Bugs/GL781-ReadOnlyIdentifiersInCompareCaseMode/ReadOnlyIdentifiersInCompareCaseMode.aimms
 */

scenario(
	"GL871 Strings with a definition were displayed in blue (aka 'editable') in the Table widget when in compare case mode.",
	() => {
		loadPage("Main Project/home");

		const dataManager = openDataManager();

		dataManager.setActiveCase("Case1");

		// When re-running the test, the compared case would still be there. There is no way known to me in AIMMS to programmatically uncompare a case. Therefore, I checked
		// first whether Case2 is already compared (from a previous run). Only if not, it will be compared (because comparing an already compared case will result in
		// uncomparing it).
		dataManager.getCase("Case2").compare();

		// Check the elements in the Table widget
		findWidget("Hoofdsteden")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("Amsterdam");

		findWidget("Hoofdsteden")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Amsterdam");

		// Check for both 'Amsterdam' cells that the readOnly flag is there and that the editable flag is not.
		findWidget("Hoofdsteden")
			.getCell(0, 0)
			.hasFlags(["readOnly"])
			.should.be.equal(true);

		findWidget("Hoofdsteden")
			.getCell(0, 0)
			.hasFlags(["editable"])
			.should.be.equal(false);

		findWidget("Hoofdsteden")
			.getCell(1, 0)
			.hasFlags(["readOnly"])
			.should.be.equal(true);

		findWidget("Hoofdsteden")
			.getCell(1, 0)
			.hasFlags(["editable"])
			.should.be.equal(false);
	}
);
