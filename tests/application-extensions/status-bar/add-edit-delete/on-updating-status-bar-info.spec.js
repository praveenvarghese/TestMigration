/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Updating StatusBar info from Application Extensions, and assert updated StatusBar messages are shown on WebUI.",
	() => {
		loadPage("Main Project/Status Bar Messages?_aimms_only_persistence.write=true");

		// Assert Status Bar does exists
		getStatusBar().should.exist;

		findWidget("status_bar_messages")
			.getVisibleWidgets()
			.should.eql([
				"StatusBarInfo Data",
				"Reset StatusBar Data",
				"Flag_1",
				"Update StatusBar Data",
			]);

		// Assert count of Status bar messages

		getStatusBar()
			.getStatusBarMessagesCount()
			.should.be.equal(6);

		// Remove Status Bar info from Application Extensions
		findWidget("application")
			.openApplicationExtensionsOptionEditor()
			.setOptions([
				{
					name: "Status Bar",
					value: "IndexedStatusBarInfo",
					sliceInfo: [
						{
							index: "indexStatusBarTestData",
							type: "Fixed-Element",
							value: "Missing Data",
						},
					],
				},
			]);

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();

		findWidget("status_bar_messages")
			.getVisibleWidgets()
			.should.eql([
				"StatusBarInfo Data",
				"Reset StatusBar Data",
				"Flag_1",
				"Update StatusBar Data",
			]);

		// Assert Status Bar exists
		getStatusBar().should.exist;

		// Assert count of Status bar messages

		getStatusBar()
			.getStatusBarMessages()
			.should.beEqualTo([
				{
					HeaderText: "Active",
					Icon: "aimms-archive",
					MessageText: "Short Text",
					State: "active",
				},
				{
					HeaderText: "Inactive",
					Icon: "aimms-sphere2",
					MessageText: "Short Text",
					State: "inactive",
				},
				{
					HeaderText: null,
					Icon: "aimms-thumbs-down2",
					MessageText: "Missing Header",
					State: "active",
				},
				{
					HeaderText: "Icon",
					Icon: null,
					MessageText: "Missing",
					State: "active",
				},
				{
					HeaderText: "Icon Color",
					Icon: "aimms-cross",
					MessageText: "Missing",
					State: "active",
				},
				{
					HeaderText: "Icon",
					Icon: "aimms-MKG",
					MessageText: "Invalid",
					State: "active",
				},
				{
					HeaderText: "Icon Color",
					Icon: "aimms-sphere2",
					MessageText: "Invalid",
					State: "active",
				},
				{
					HeaderText: "Procedure",
					Icon: "aimms-bubbles2",
					MessageText: "Missing",
					State: "inactive",
				},
				{
					HeaderText: "Procedure",
					Icon: "aimms-sphere2",
					MessageText: "Invalid",
					State: "active",
				},
				{
					HeaderText: "Tooltip",
					Icon: "aimms-archive",
					MessageText: "Missing",
					State: "active",
				},
				{
					HeaderText: "Tooltip",
					Icon: "aimms-sphere2",
					MessageText: "Missing",
					State: "inactive",
				},
				{
					HeaderText: "Special characters",
					Icon: "aimms-location4",
					MessageText:
						"~!@ #$% ^&* ()_ =+ _)(* &^%$ #@!~ D`souza <>? ,./ ;: '\" [] {} '\" characters",
					State: "active",
				},
			]);

		//Reload the page
		pageRefresh();

		// Assert Status Bar exists
		getStatusBar().should.exist;
	}
);
