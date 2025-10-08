/*!
 * @AIMMS_FILE=models/ScalarBugModel/ChartsExample.aimms
 */

scenario(
	"Validate remove button functionality of compact scalar scalar and in sidepanel page as well",
	() => {
		loadPage("Main Project/Widgets/Scalar");

		// Remove item from multiple scalar without default

		findWidget("MultiSelect_1")
			.getValue("Copy_SelectedAirport")
			.should.be.equal("Bangalore");

		findWidget("MultiSelect_1").removeValue("Copy_SelectedAirport");

		findWidget("MultiSelect_1")
			.getValue("Copy_SelectedAirport")
			.should.be.equal("");

		// Remove item from sidepanel Page

		findWidget("scalar")
			.getSidepanels()
			.openSidepanelTab("Table Data");

		findWidget("Test_1")
			.getValue()
			.should.be.equal("Yellow Banana");

		findWidget("Test_1").removeValue();

		findWidget("Test_1")
			.getValue()
			.should.be.equal("Red Apple");
	}
);
