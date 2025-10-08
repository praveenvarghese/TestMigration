/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a multi-contents Bar-Line chart on a Dialog, assert Store-Focus behaviour on chart elements.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		// Close the Page Manager sidebar
		closeAppManager();

		// Clear off Store-Focus data
		findWidget("bar-line_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("bar-line_chart_data")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("bar-line_chart_data")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Click on the button to get the Dialog Page
		findWidget("Opens Dialog").click();

		// Click on a linechart element
		findWidget("DP_BLC1")
			.findPoint(["HS", "IA_JobDuration"])
			.click();

		// Assert store-focus entries are updated
		findWidget("BLC_StoreFocus")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("BLC_StoreFocus")
			.getValue("SelectedTeamMember1")
			.should.be.equal("HS");

		// Click on another linechart element
		findWidget("DP_BLC1")
			.findPoint(["HS", "IA_JobDuration"])
			.click();
		findWidget("DP_BLC1")
			.findPoint(["AM", "IA_JobDuration"])
			.click();

		// Assert store-focus entries are updated
		findWidget("BLC_StoreFocus")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("BLC_StoreFocus")
			.getValue("SelectedTeamMember1")
			.should.be.equal("AM");

		// Click on a barchart element
		findWidget("DP_BLC1")
			.findBar(["MKG", "IA_JobStart"])
			.click();

		// Assert store-focus entries are updated
		findWidget("BLC_StoreFocus")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobStart");
		findWidget("BLC_StoreFocus")
			.getValue("SelectedTeamMember1")
			.should.be.equal("MKG");

		// Click on another barchart element
		findWidget("DP_BLC1")
			.findBar(["LS", "IA_JobStart"])
			.click();

		// Assert store-focus entries are updated
		findWidget("BLC_StoreFocus")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobStart");
		findWidget("BLC_StoreFocus")
			.getValue("SelectedTeamMember1")
			.should.be.equal("LS");

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
