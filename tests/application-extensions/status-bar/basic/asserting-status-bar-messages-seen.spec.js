/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Assert StatusBar messages shown on WebUI. And on updating StatusBar data, assert the StatusBar messages shown.",
	() => {
		loadPage("Main Project/home");

		// Assert Status Bar does exists
		getStatusBar().should.exist;

		// Get all of the Status Bar Messages
		let statusbarMessages = getStatusBar().getStatusBarMessages();

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
				HeaderText: "Timezone:",
				Icon: "aimms-sphere2",
				MessageText: "IST",
				State: "inactive",
			},
			{
				HeaderText: "Reset Data:",
				Icon: "aimms-thumbs-down2",
				MessageText: "No permissions",
				State: "inactive",
			},
			{
				HeaderText: "Server:",
				Icon: "aimms-location4",
				MessageText: "Amsterdam",
				State: "inactive",
			},
			{
				HeaderText: "Data connection:",
				Icon: "aimms-feed",
				MessageText: "Connected to Amsterdam",
				State: "active",
			},
			{
				HeaderText: "ToDo:",
				Icon: "aimms-archive",
				MessageText: "Open Tasks",
				State: "active",
			},
		]);

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/Status Bar Messages");

		// Get all of the Status Bar Messages
		statusbarMessages = getStatusBar().getStatusBarMessages();

		// Assert Status Bar Messages
		statusbarMessages.should.beEqualTo([
			{
				HeaderText: "Case File:",
				Icon: "aimms-briefcase",
				MessageText: "My initial data",
				State: "active",
			},
			{
				HeaderText: "Timezone:",
				Icon: "aimms-sphere2",
				MessageText: "IST",
				State: "inactive",
			},
			{
				HeaderText: "Reset Data:",
				Icon: "aimms-thumbs-down2",
				MessageText: "No permissions",
				State: "inactive",
			},
			{
				HeaderText: "Server:",
				Icon: "aimms-location4",
				MessageText: "Amsterdam",
				State: "inactive",
			},
			{
				HeaderText: "Data connection:",
				Icon: "aimms-feed",
				MessageText: "Connected to Amsterdam",
				State: "active",
			},
			{
				HeaderText: "ToDo:",
				Icon: "aimms-archive",
				MessageText: "Open Tasks",
				State: "active",
			},
		]);

		// Update StatusBar Messages data
		findWidget("Update StatusBar Data").click();

		// Assert Status Bar does exists
		getStatusBar().should.exist;

		// Get all of the updated Status Bar Messages
		statusbarMessages = getStatusBar().getStatusBarMessages();

		// Assert count of Status Bar Messages
		statusbarMessages.should.have.numberOfItems.equal(7);

		// Assert Status Bar Messages
		statusbarMessages.should.beEqualTo([
			{
				HeaderText: "Case File:",
				Icon: "aimms-briefcase",
				MessageText: "2020.Q1 Updated data",
				State: "active",
			},
			{
				HeaderText: "Timezone:",
				Icon: "aimms-sphere2",
				MessageText: "Indian Standard Time",
				State: "inactive",
			},
			{
				HeaderText: "Reset Data:",
				Icon: "aimms-thumbs-up2",
				MessageText: "MKG Data.",
				State: "inactive",
			},
			{
				HeaderText: null,
				Icon: "aimms-location4",
				MessageText: "Amsterdam",
				State: "inactive",
			},
			{
				HeaderText: "Data connection:",
				Icon: null,
				MessageText: "Connected to Amsterdam",
				State: "active",
			},
			{
				HeaderText: "ToDo:",
				Icon: "aimms-archive-MKG",
				MessageText: "Open Tasks",
				State: "active",
			},
			{
				HeaderText: "E2E:",
				Icon: "optimize-btn-icon",
				MessageText: "90%",
				State: "active",
			},
		]);

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/home");

		// Assert Status Bar does exists
		getStatusBar().should.exist;

		// Get all of the updated Status Bar Messages
		statusbarMessages = getStatusBar().getStatusBarMessages();

		// Assert count of Status Bar Messages
		statusbarMessages.should.have.numberOfItems.equal(7);

		// Assert Status Bar Messages
		statusbarMessages.should.beEqualTo([
			{
				HeaderText: "Case File:",
				Icon: "aimms-briefcase",
				MessageText: "2020.Q1 Updated data",
				State: "active",
			},
			{
				HeaderText: "Timezone:",
				Icon: "aimms-sphere2",
				MessageText: "Indian Standard Time",
				State: "inactive",
			},
			{
				HeaderText: "Reset Data:",
				Icon: "aimms-thumbs-up2",
				MessageText: "MKG Data.",
				State: "inactive",
			},
			{
				HeaderText: null,
				Icon: "aimms-location4",
				MessageText: "Amsterdam",
				State: "inactive",
			},
			{
				HeaderText: "Data connection:",
				Icon: null,
				MessageText: "Connected to Amsterdam",
				State: "active",
			},
			{
				HeaderText: "ToDo:",
				Icon: "aimms-archive-MKG",
				MessageText: "Open Tasks",
				State: "active",
			},
			{
				HeaderText: "E2E:",
				Icon: "optimize-btn-icon",
				MessageText: "90%",
				State: "active",
			},
		]);
	}
);
