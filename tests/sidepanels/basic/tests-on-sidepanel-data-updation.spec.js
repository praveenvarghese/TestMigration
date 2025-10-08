/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"On updating the sidepanel configured data, Test to verify appropriate sidepanel tabs are shown.",
	() => {
		loadPage("Main Project/Custom Reports?_aimms_only_sidepanel=true");

		//Change the "SelectedPage" element parameter data
		findWidget("Selected Page").setValue("S&OP Review");

		//verify the updated list of sidepanel tabs displayed
		findWidget("custom_reports")
			.getSidepanels()
			.getTabDisplayName()
			.should.eql([
				"Sprint Reliability",
				"Impact Score",
				"Team Energy Score",
				"WoW Score",
				"Demo Score",
				"CSAT",
			]);
	}
);
