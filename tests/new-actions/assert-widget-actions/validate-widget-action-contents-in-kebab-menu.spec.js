/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Test to verify widget actions + rest of the kebab menu", () => {
	loadPage("Main Project/newFilterPage?table-v2=true");

	//Validate widget action details displayed.
	findWidget("DropdownFilter")
		.getWidgetActionMenuButton()
		.click();

	findWidget("DropdownFilter")
		.getAllKebabMenuItems()
		.should.beEqualTo([
			{ title: "Specify Heat", icon: "aimms-sun2", state: "active" },
			{ title: "Change order", icon: "aimms-transmission", state: "inactive" },
			{ title: "Share...", icon: "aimms-share", state: "active" },
			{ title: "Download .xlsx", icon: "aimms-file-spreadsheet", state: "active" },
			{ title: "Download .csv", icon: "aimms-file-spreadsheet", state: "active" },
			{ title: "Download Image", icon: "aimms-file-picture", state: "active" },
			{ title: "Upload .xlsx", icon: "aimms-file-spreadsheet", state: "active" },
			{ title: "Help me", icon: "aimms-question4", state: "active" },
		]);
});
