/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @DURATION=medium
 */

scenario(
	"Hover on arcs label and assert store-focus value is not updated. Click on arc labels and assert only respective store-focus value is updated.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		// Hover on Zwolle-Teuge arc of Arc-Set-1
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcLabel()
			.hover(5, 5);

		// With hovering on arcs of Arc-Set-1 action, assert store focus is not updated.
		let storeFocusScalar = findWidget("StoreFocus");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport1").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport1").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedFromCity").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedToCity").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedFromCity1").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedToCity1").should.be.equal("");

		// Click on Zwolle-Teuge arc
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcLabel()
			.click(5, 5);

		// Assert store focus is updated for above action.
		storeFocusScalar = findWidget("StoreFocus");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport1").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport1").should.be.equal("Teuge");
		storeFocusScalar.getValue("SP_C_SelectedFromCity").should.be.equal("Zwolle");
		storeFocusScalar.getValue("SP_C_SelectedToCity").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedFromCity1").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedToCity1").should.be.equal("");

		// Click on Den_Haag-Rotterdam arc
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Den_Haag", "Rotterdam")
			.getArcLabel()
			.click(5, 5);

		// Assert store focus is updated for above action.
		storeFocusScalar = findWidget("StoreFocus");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport1").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport1").should.be.equal("Rotterdam");
		storeFocusScalar.getValue("SP_C_SelectedFromCity").should.be.equal("Den Haag");
		storeFocusScalar.getValue("SP_C_SelectedToCity").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedFromCity1").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedToCity1").should.be.equal("");

		// Hover on Schiphol-Eindhoven arc of Arc-Set-0
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcLabel()
			.hover(5, 5);

		// With hovering on arcs of Arc-Set-0 action, assert store focus is not updated.
		storeFocusScalar = findWidget("StoreFocus");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport1").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport1").should.be.equal("Rotterdam");
		storeFocusScalar.getValue("SP_C_SelectedFromCity").should.be.equal("Den Haag");
		storeFocusScalar.getValue("SP_C_SelectedToCity").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedFromCity1").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedToCity1").should.be.equal("");

		// Click on Schiphol-Eindhoven arc of Arc-Set-0
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcLabel()
			.click(5, 5);

		// Assert store focus is updated for above action.
		storeFocusScalar = findWidget("StoreFocus");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport").should.be.equal("Schiphol");
		storeFocusScalar.getValue("SP_A_SelectedToAirport").should.be.equal("Eindhoven");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport1").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport1").should.be.equal("Rotterdam");
		storeFocusScalar.getValue("SP_C_SelectedFromCity").should.be.equal("Den Haag");
		storeFocusScalar.getValue("SP_C_SelectedToCity").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedFromCity1").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedToCity1").should.be.equal("");

		// Click on Rotterdam-Eindhoven arc of Arc-Set-0
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcLabel()
			.click(5, 5);

		// Assert store focus is updated for above action.
		storeFocusScalar = findWidget("StoreFocus");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport").should.be.equal("Rotterdam");
		storeFocusScalar.getValue("SP_A_SelectedToAirport").should.be.equal("Eindhoven");
		storeFocusScalar.getValue("SP_A_SelectedFromAirport1").should.be.equal("");
		storeFocusScalar.getValue("SP_A_SelectedToAirport1").should.be.equal("Rotterdam");
		storeFocusScalar.getValue("SP_C_SelectedFromCity").should.be.equal("Den Haag");
		storeFocusScalar.getValue("SP_C_SelectedToCity").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedFromCity1").should.be.equal("");
		storeFocusScalar.getValue("SP_C_SelectedToCity1").should.be.equal("");
	}
);
