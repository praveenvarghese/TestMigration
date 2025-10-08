/*!
 * @AIMMS_FILE=models/REWE/NonFoodRegallayout.aimms
 */

scenario(
	"Make sure the selectionboxes in the REWE model do not show 'Empty Selectionbox', as was the case because of bug #3889.",
	() => {
		loadPage("Main Project/Layout anzeigen");

		// First check whether the boxes show what they are supposed to show instead of 'Empty Selectionbox'
		findWidget("SelectionboxLayouttyp_1")
			.getValue()
			.should.eql("Select Größenklasse");

		findWidget("SelectionboxLayout_1")
			.getValue()
			.should.eql("Select Bausteinkombination");

		findWidget("SelectionboxBezeichnung")
			.getValue()
			.should.eql("Select Bezeichnung");

		findWidget("SelectionboxInputID")
			.getValue()
			.should.eql("Select Output-ID");

		findWidget("SelectionboxAendNr")
			.getValue()
			.should.eql("Select Version");

		findWidget("SelectionboxAnzeigenart")
			.getValue()
			.should.eql("Fotos");

		// Then open a selectionbox to see whether the list of items is as expected after a search action
		findWidget("SelectionboxLayouttyp_1")
			.click()
			.pressKeys(["4"]);

		findWidget("SelectionboxLayouttyp_1")
			.getAllFullyVisibleOptions()
			.should.eql([
				"4 m^2",
				"4.25 m^2",
				"4.50 m^2",
				"4.75 m^2",
				"Use search box for more results.",
			]);
	}
);
