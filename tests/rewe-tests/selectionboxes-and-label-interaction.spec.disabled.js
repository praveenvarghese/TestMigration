/*!
 * @AIMMS_FILE=models/REWE/NonFoodRegallayout.aimms
 */

scenario(
	"Check the interaction between various selectionboxes and labels in the REWE application.",
	() => {
		loadPage("Main Project/Optimierung");

		// First check whether the labels are in their expected start state
		findWidget("LabelLayout")
			.getLabelText()
			.should.eql("Empty Label");

		findWidget("LabelGroessenklasse")
			.getLabelText()
			.should.eql("Größenklasse: 0 m^2");

		// Then apply some selections in the selectionboxes and verify the impact these have on the labels above
		findWidget("SelectionBoxAnzahlSBH050").select("5");

		findWidget("LabelLayout")
			.getLabelText()
			.should.eql("5 SBH");

		findWidget("LabelGroessenklasse")
			.getLabelText()
			.should.eql("Größenklasse: 3.75 m^2");

		findWidget("SelectionBoxAnzahlBST100").select("6");

		findWidget("LabelLayout")
			.getLabelText()
			.should.eql("6 BST 100cm + 5 SBH");

		findWidget("LabelGroessenklasse")
			.getLabelText()
			.should.eql("Größenklasse: 14.25 m^2");

		findWidget("SelectionBoxAnzahlBST125").select("29");

		findWidget("LabelLayout")
			.getLabelText()
			.should.eql("29 BST 125cm + 6 BST 100cm + 5 SBH");

		findWidget("LabelGroessenklasse")
			.getLabelText()
			.should.eql("Größenklasse: 72.25 m^2");
	}
);
