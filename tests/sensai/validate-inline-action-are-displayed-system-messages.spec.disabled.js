/*!
 * @AIMMS_FILE=models/scn-new/SC Navigator/SC Navigator.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Validate inline ieams are displayed for system generated messages only", () => {
	loadPage("Main Project/Control Panel");

	waitForBackgroundActionToComplete();

	getPageHeader()
		.getButtons()
		.getChatUIButton()
		.click();

	findWidget("chat-history")
		.getListData()
		.should.beEqualTo([
			{
				title:
					"SENSAI BetaWelcome to SENSAI, your personal AI assistant dedicated to helping you use SC Navigator. What can I assist you with today?Disclaimer: SENSAI can make mistakes, if in doubt, check our documentation. Read our best-practice recommendations here. This version of SENSAI is a Beta release, any feedback is welcome via support@aimms.com.",
			},
		]);
});
