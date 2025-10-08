/*!
 * @AIMMS_FILE=models/SelectionBox/SelectionBoxExperiment.aimms
 */

scenario(
	"Verify whether clicking to the right of the actual element in the selectionbox dropdown indeed selects the element",
	() => {
		loadPage("Main Project/home");

		// Open the dropdown with the items to select
		findWidget("CountrySelector").click();

		// Select the element "NED" by clicking 75 px from the left (meaning: to the right of the element)
		findWidget("CountrySelector").clickElement("NED", 75);

		// Verify that the expected element got selected indeed
		findWidget("TheSelectedCountry")
			.getValue()
			.should.equal("NED");
	}
);
