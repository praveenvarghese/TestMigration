/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a multi-contents Bar-Line chart, assert Store-Focus behaviour on chart elements.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		// Close the Page Manager sidebar
		closeAppManager();

		// Click on a linechart element
		findWidget("BarLineChart_1_1")
			.findPoint(["HS", "IA_Copy_JobStart"])
			.click();

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("HS");

		// Click on another linechart element
		findWidget("BarLineChart_1_1")
			.findPoint(["GLD", "IA_Copy_JobStart"])
			.click();

		// Assert store-focus entries are updated
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("GLD");

		// Click on a barchart element
		findWidget("BarLineChart_1_1")
			.findBar(["MKG", "IA_Copy_JobDuration"])
			.click();

		// Assert store-focus entries are updated
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("MKG");

		// Click on another barchart element
		findWidget("BarLineChart_1_1")
			.findBar(["PV", "IA_JobDuration"])
			.click();

		// Assert store-focus entries are updated
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("PV");

		// Click on another barchart element
		findWidget("BarLineChart_1_1")
			.findBar(["OL", "IA_JobStart"])
			.click();

		// Assert store-focus entries are updated
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("OL");
	}
);
