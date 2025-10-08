/*!
 * @AIMMS_FILE=models/Bugs/GL1208-SidepanelHidingUponFirstSelection/S_OP Suite Demo.aimms
 */

scenario(
	"GL1208 - Upon the first click in a multiselect on the opened side panel, the side panel would hide.",
	() => {
		loadPage("Main Project/home");

		// Open the demand planning page by using the navigation button for that on the home screen.
		findWidget("BU_StartDemandPlanning").click();

		// Please note that "overview_2" below is the name of the PAGE, not of a widget.
		findWidget("overview_2")
			.getSidepanels()
			.openSidepanelTab("Market focus");

		// Change a value in the multiselect on top of the side panel.
		findWidget("MS_SelectProductGroup").deselect(["Cheese"]);

		findWidget("NumSelected")
			.getValue("NumPGSelected")
			.should.be.equal("3.00");
	}
);
