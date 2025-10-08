/*!
 * @AIMMS_FILE=models/CaseComparisonModel/CaseComparisonModel.aimms
 */

scenario(
	"Table header identifier element text translations on row headers and column headers",
	() => {
		loadPage("Main Project/Identifier Element Translations?table-v2=true");

		//Translations on row headers
		findWidget("IdentifierElement Text Trans")
			.getRowHeaderCell(0, 0)
			.getText()
			.should.be.equal("Row ElemParam Identifier Elem Trans");
		//Translations on row headers
		findWidget("IdentifierElement Text Trans")
			.getRowHeaderCell(1, 0)
			.getText()
			.should.be.equal("Row Param Identifier Elem Trans");

		//Translations on column headers
		findWidget("IdentifierElement Text Trans Column")
			.getColHeaderCell(0, 0)
			.getText()
			.should.be.equal("Col Param Identifier Elem Trans");
		//Translations on column headers
		findWidget("IdentifierElement Text Trans Column")
			.getColHeaderCell(0, 1)
			.getText()
			.should.be.equal("Col ElemParam Identifier Elem Trans");

		// loadCase Identifier-Case_1 as active
		openDataManager().setActiveCase("Identifier-Case_1");

		closeDataManager();

		// loadCase Identifier-Case_2 as compare case
		openDataManager()
			.getCase("Identifier-case_2")
			.compare();

		// Sort the column header
		findWidget("IdentifierElement Text Trans").sortColumnHeader(0, 0, "increase");

		//After case compare verifying the row and column hearder identifier element text transalations
		//Translations on row headers

		findWidget("IdentifierElement Text Trans")
			.getColHeaderCell(0, 0)
			.getText()
			.should.be.equal("Identifier-Case_1");
		//Translations on column headers
		findWidget("IdentifierElement Text Trans")
			.getColHeaderCell(0, 1)
			.getText()
			.should.be.equal("Identifier-case_2");

		findWidget("IdentifierElement Text Trans")
			.getRowHeaderCell(0, 0)
			.getText()
			.should.be.equal("Row ElemParam Identifier Elem Trans");
		//Translations on row headers
		findWidget("IdentifierElement Text Trans")
			.getRowHeaderCell(1, 0)
			.getText()
			.should.be.equal("Row Param Identifier Elem Trans");

		// Sort the row header
		findWidget("IdentifierElement Text Trans Column").sortRowHeader(1, 0, "increase");

		//datacase id on row headers
		findWidget("IdentifierElement Text Trans Column")
			.getRowHeaderCell(0, 0)
			.getText()
			.should.be.equal("Identifier-Case_1");
		//datacase id on row headers
		findWidget("IdentifierElement Text Trans Column")
			.getRowHeaderCell(1, 0)
			.getText()
			.should.be.equal("Identifier-case_2");

		//Translations on column headers
		findWidget("IdentifierElement Text Trans Column")
			.getColHeaderCell(0, 0)
			.getText()
			.should.be.equal("Col Param Identifier Elem Trans");
		//Translations on column headers
		findWidget("IdentifierElement Text Trans Column")
			.getColHeaderCell(0, 1)
			.getText()
			.should.be.equal("Col ElemParam Identifier Elem Trans");
	}
);
