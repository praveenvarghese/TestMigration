/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Adding a new Arc-Set along with its Store-Focus information. Click on the arcs and assert respective store-focus value is updated.",
	() => {
		loadPage("Main Project/Multiple Maps/Map Data?_aimms_only_persistence.write=true");

		// Resetting data on the page.
		findWidget("Reset Data_1").click();

		// Add a new Arc-Set data along with its StoreFocus data
		findWidget("Map_with_Data")
			.arcSetsOptionEditor()
			.addArcSet(
				{
					value: "ArcsBetween_C_A_WithAnnotations",
					type: "identifier",
					storeFocus: [
						{
							index: "c_from",
							value: "C_SelectedFromCity",
						},
						{
							index: "a_to",
							value: "A_SelectedToAirport",
						},
					],
				},
				{
					value: "A_C_Arc_HideLabels",
					type: "identifier",
				},
				{
					value: "A_Arc_DynamicWidth",
					type: "identifier",
				},
				{
					value: "A_C_Arc_HideLabels",
					type: "identifier",
				},
				null
			);

		// Click on Schiphol-Eindhoven arc of Arc-Set-0
		findWidget("Map_with_Data")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.click(87, 0);

		// With no store focus set for Arc-Set-0, no data should be updated
		findWidget("Store Focus Data")
			.getValue("SP_A_SelectedFromAirport")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_A_SelectedToAirport")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_A_SelectedFromAirport1")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_A_SelectedToAirport1")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_C_SelectedFromCity")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_C_SelectedToCity")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_C_SelectedFromCity1")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_C_SelectedToCity1")
			.should.be.equal("");

		// Click on Den Haag-Rotterdam arc of Arc-Set-1
		findWidget("Map_with_Data")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.click(9, 0);

		// Assert store focus is updated for above action.
		findWidget("Store Focus Data")
			.getValue("SP_A_SelectedFromAirport")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_A_SelectedToAirport")
			.should.be.equal("Teuge");
		findWidget("Store Focus Data")
			.getValue("SP_A_SelectedFromAirport1")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_A_SelectedToAirport1")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_C_SelectedFromCity")
			.should.be.equal("Zwolle");
		findWidget("Store Focus Data")
			.getValue("SP_C_SelectedToCity")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_C_SelectedFromCity1")
			.should.be.equal("");
		findWidget("Store Focus Data")
			.getValue("SP_C_SelectedToCity1")
			.should.be.equal("");
	}
);
