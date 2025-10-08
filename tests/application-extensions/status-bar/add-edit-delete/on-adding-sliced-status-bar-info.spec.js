/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Add Sliced-StatusBar info to Application Extensions, and assert StatusBar message are shown on WebUI.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		// Close PageManager
		closeAppManager();

		// Assert Status Bar does not exists
		getStatusBar().should.not.exist;

		// Add Status Bar info to Application Extensions
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

		// Assert Status Bar exists
		getStatusBar().should.exist;

		getStatusBar()
			.getStatusBarMessages()
			.should.have.numberOfItems.equal(12);

		// Assert Status Bar Messages
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

		//Navigate to "Third Page".
		findWidget("PageJumpTestButton").click();

		// Assert Status Bar exists on "Third Page".
		getStatusBar().should.exist;

		//Reload the page, and assert Status bar exists
		pageRefresh();

		getStatusBar().should.exist;
	}
);
