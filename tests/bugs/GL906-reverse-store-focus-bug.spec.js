/*!
 * @AIMMS_FILE=models/Bugs/GL906-RevertStoreFocusBug/RevertSFBug.aimms
 */

scenario(
	"table V1: Switching identifiers with store focus set to indices of the old identifier triggered an error when the new identifier did not share its indices with the old one.",
	() => {
		// Persistence true, because the scenario requires a refresh page action.
		//loadPage("Main Project/home?table-v2=false&_aimms_only_persistence.write=true");
		loadPage("Main Project/home?table-v2=false");

		findWidget("Export Data")
			.getContentsOptionEditor()
			.removeSpecificItemFromCurrentContents("Export");

		findWidget("Export Data")
			.getContentsOptionEditor()
			.setContents("AmountPerYear");

		findWidget("Export Data")
			.getContentsOptionEditor()
			.removeSpecificItemFromCurrentContents("AmountPerYear");

		findWidget("Export Data")
			.getContentsOptionEditor()
			.setContents("Export");

		pageRefresh();

		getLogMessage()
			.getErrorCount()
			.should.be.equal(0);
	}
);
