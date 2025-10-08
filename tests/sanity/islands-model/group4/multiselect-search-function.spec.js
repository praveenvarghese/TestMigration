/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 */

scenario(
	"Verify the correct functioning of the search functionality in the multiselect widget",
	() => {
		loadPage("Main Project/Annotation Test Page");

		// Check the number of columns in the row header area
		findWidget("EilandenMultiselect").getSearchBox().should.exist;

		findWidget("EilandenMultiselect").selectAll();
		findWidget("EilandenMultiselect")
			.getSelectedItemsList()
			.should.eql([
				"Isla de La Palma",
				"Isla de Tenerife",
				"Isla de Gran Canaria",
				"Isla de Lanzarote",
				"Isla de Fuerteventura",
				"Isla de La Gomera",
				"Isla Del Hierro",
			]);

		findWidget("EilandenMultiselect")
			.getSearchBox()
			.click()
			.keys("en");

		findWidget("EilandenMultiselect").selectAll();

		findWidget("EilandenMultiselect")
			.getSelectedItemsList()
			.should.eql(["Isla de Tenerife", "Isla de Fuerteventura"]);

		findWidget("EilandenMultiselect")
			.getSearchBox()
			.click()
			.keys([SPECIAL_KEYS.backspace, SPECIAL_KEYS.backspace, "ne"]);

		findWidget("EilandenMultiselect").selectAll();

		findWidget("EilandenMultiselect")
			.getSelectedItemsList()
			.should.eql("Isla de Tenerife");
	}
);
