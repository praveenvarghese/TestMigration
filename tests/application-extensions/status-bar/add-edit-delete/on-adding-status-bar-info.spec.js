/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Add StatusBar info to Application Extensions, and assert StatusBar message are shown on WebUI.",
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
					value: "StatusBarInfo",
					sliceInfo: null,
				},
			]);

		// Close "Application Settings" option Editor
		findWidget("application").closeOptionDialog();

		// Assert Status Bar exists
		getStatusBar().should.exist;

		// Get all of the Status Bar Messages
		const statusbarMessages = getStatusBar().getStatusBarMessages();

		// Assert count of Status Bar Messages
		statusbarMessages.should.have.numberOfItems.equal(6);

		// Assert Status Bar Messages
		statusbarMessages.should.beEqualTo([
			{
				HeaderText: "Case File:",
				Icon: "aimms-briefcase",
				MessageText: "My initial data",
				State: "active",
			},
			{
				HeaderText: "Data connection:",
				Icon: "aimms-feed",
				MessageText: "Load",
				State: "active",
			},
			{
				HeaderText: "Open Tasks:",
				Icon: "aimms-archive",
				MessageText: "Load",
				State: "active",
			},
			{
				HeaderText: "Timezone:",
				Icon: "aimms-sphere2",
				MessageText: "IST",
				State: "inactive",
			},
			{
				HeaderText: "Task:",
				Icon: "aimms-thumbs-down2",
				MessageText: "Inactive",
				State: "inactive",
			},
			{
				HeaderText: "Server:",
				Icon: "aimms-location4",
				MessageText: "Amsterdam",
				State: "inactive",
			},
		]);

		//Navigate to "Third Page".
		findWidget("PageJumpTestButton").click();

		// Assert Status Bar exists on "Third Page".
		getStatusBar().should.exist;

		//Reload the page, and assert Status bar exists
		pageRefresh();
		getStatusBar().should.exist;

		// Assert count of Status bar messages

		getStatusBar()
			.getStatusBarMessagesCount()
			.should.be.equal(6);
	}
);
