/*!
 * @AIMMS_FILE=models/Bugs/GL3594-widgetActionIssue/putstatement.aimms
 */
scenario("GL3498-widget-action-not-showing-if-no-icon", () => {
	loadPage("Main Project/home");

	findWidget("osdnc")
		.getWidgetActionMenuButton()
		.click();

	findWidget("osdnc")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "", state: "active" },
			{ title: "View existing orders", icon: "", state: "active" },
			{ title: "Increase Supply", icon: "", state: "active" },
			{ title: "Delete Orders", icon: "", state: "inactive" },
		]);
});
