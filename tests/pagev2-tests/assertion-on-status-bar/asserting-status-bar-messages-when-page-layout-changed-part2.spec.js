/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Assert StatusBar messages when page layout is changed", () => {
	loadPage("Main Project/home");

	let statusbarMessages = getStatusBar().getStatusBarMessages();
	// Assert Status Bar does exists
	getStatusBar().should.exist;

	// Get all of the updated Status Bar Messages
	statusbarMessages = getStatusBar().getStatusBarMessages();

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
		{ HeaderText: "Timezone:", Icon: "aimms-sphere2", MessageText: "IST", State: "inactive" },
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
		{ HeaderText: "ToDo:", Icon: "aimms-archive", MessageText: "Open Tasks", State: "active" },
	]);
});
