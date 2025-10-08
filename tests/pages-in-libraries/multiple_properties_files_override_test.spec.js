/*!
 * @AIMMS_FILE=models/PILPropertiesOrderTestModel/PILPropertiesOrderTestModel.aimms
 */

scenario(
	"Verify that multiple .properties files coming from both main model and library, specifying *the same* identifiers result in the expected translations.",
	() => {
		// A page in the main model
		loadPage("Main Project/home");

		/* The order in which translations are applied is as follows:

			The *paths* to the .properties files are sorted alphabetically. In this case: 

			Lib1_resources/Lib1.properties
			Lib2_resources/Lib2.properties
			MainProject_resources/Main.properties

			This means that all entries in the MainProject should override any duplicate entry from either Lib1 and Lib2.
			It also means that in case of duplicate entries in the Lib-properties files, the entries from Lib2 should override those of Lib1.
		*/

		findWidget("AircraftModels")
			.getColHeaderCells(0, 0, 1)
			.should.eql(["From Lib2", "From Main"]);

		findWidget("AircraftModels")
			.getRowHeaderCells(0, 0, 0)
			.should.eql(["From Main"]);
	}
);
