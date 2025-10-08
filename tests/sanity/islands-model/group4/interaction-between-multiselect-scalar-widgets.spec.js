/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Tests for validating scalar and multi select widgets", () => {
	loadPage("Main Project/Great Test Page");

	//Validate compact scalar widget is displayed
	findWidget("CompactScalar").isCompactScalarDisplayed().should.exist;

	//Validate value displayed in scalar widget
	findWidget("CompactScalar")
		.getValue()
		.should.be.equal("2016-03-27 00:00");

	//Interactions between multi select widgets
	openAppManager().navigateToPage("Main Project/Annotation Test Page");

	//Validate All elements are selected when Select All check box is checked
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

	//Validate All elements are selected when Select None check box is checked
	findWidget("EilandenMultiselect").selectNone();

	findWidget("EilandenMultiselect")
		.getSelectedItemsList()
		.should.eql([]);

	//Validate search functionality in multiselect
	findWidget("EilandenMultiselect").searchItem("Isla Del Hierro");

	findWidget("EilandenMultiselect").select(["Isla Del Hierro"]);

	findWidget("EilandenMultiselect")
		.getSelectedItemsList()
		.should.eql("Isla Del Hierro");

	//Validate individual element is  selected when that element is checked
	findWidget("Vliegtuigjes").select(["Airbus A320"]);

	findWidget("Vliegtuigjes")
		.getSelectedItemsList()
		.should.eql("Airbus A320");

	//Validate individual element is  un selected when that element is un checked
	findWidget("Vliegtuigjes").deselect(["Airbus A320"]);

	findWidget("Vliegtuigjes")
		.getSelectedItemsList()
		.should.eql([]);
});
