/*!
 * @AIMMS_FILE=models/ReverseLinkTest/ReverseLinkTest.aimms
 */

scenario(
	"Check that the reverse store focus not functioning when not all store focus identifiers have been configured",
	() => {
		loadPage("Main Project/home");

		// First check that the reverse store focus is still working
		findWidget("Selection").setValue("SelectedCountry1", "Austria");
		findWidget("Selection").setValue("SelectedCountry2", "Luxemburg");
		findWidget("Selection").setValue("SelectedIdentifier", "Export");

		findWidget("Export Data")
			.getCell(2, 5)
			.isFocused()
			.should.equal(true);

		// Remove one of the store focus identifiers for the Export table
		findWidget("Export Data")
			.openStoreFocusOptionEditor()
			.setStoreFocusSetting({
				name: "<IDENTIFIER-SET>",
				value: "",
				type: "identifier",
			});

		findWidget("Export Data").closeOptionDialog();

		findWidget("Selection").setValue("SelectedCountry1", "France");
		findWidget("Selection").setValue("SelectedCountry2", "Germany");
		findWidget("Selection").setValue("SelectedIdentifier", "Export");

		findWidget("Export Data")
			.getCell(2, 5)
			.isFocused()
			.should.equal(true); // The previous focus cell should still have focus now

		findWidget("Export Data")
			.getCell(3, 1)
			.isFocused()
			.should.equal(false); // The France-Germany cell should not have focus
	}
);
