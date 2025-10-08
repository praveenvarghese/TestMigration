/*!
 * @AIMMS_FILE=models/LibraryWithWorkflowModel/LibraryWithWorkflowModel.aimms
 */

scenario(
	"Verify that multiple .properties files coming from both main model and library result in the expected translations.",
	() => {
		// A page in the main model
		loadPage("Main Project/home");
		findWidget("At Home")
			.getSingleIdentifierLabel()
			.should.eql("De Globale Parameter"); // Comes from main.properties

		// A page in lib1
		loadPage("Lib1/Page1");
		findWidget("l1::At Lib 1 Page 1")
			.getSingleIdentifierLabel()
			.should.eql("De Globale Parameter"); // Comes from main.properties

		// A page in lib2
		loadPage("Lib2/Page1");
		findWidget("l2::At Lib 2 Page 1")
			.getSingleIdentifierLabel()
			.should.eql("De Globale Parameter"); // Comes from main.properties

		// A page in the main model
		loadPage("Main Project/home");
		findWidget("Inwoners")
			.getColHeaderCells(0, 0, 1)
			.should.eql(["Die Niederlaende", "Deutschland"]); // Comes from a combination of properties files from main and lib2

		findWidget("Inwoners")
			.getRowHeaderCells(0, 0, 0)
			.should.eql(["Habitantes"]); // Comes from lib1.properties from lib1

		findWidget("Inwoners")
			.getTitleHeaderValues()
			.should.eql([["Länder"], ["Identifier"]]); // Comesfrom lib1_nog_een.properties from lib1
	}
);
