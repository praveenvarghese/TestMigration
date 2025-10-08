/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Asserting widget actions are accessible on list item widget.", () => {
	loadPage("Main Project/Planes Info/Tasks");

	//In the List Widget, verify there is a widget action menu with the 2 items in it
	findWidget("Plane Info Tasks")
		.getWidgetActionMenuButton()
		.click();
	findWidget("Plane Info Tasks")
		.getActiveWidgetActionsCount()
		.should.eql(2);

	// Also check whether the widget actions are still accessible when the widget is in full screen mode (ticket https://gitlab.aimms.com/aimms/customer-tickets/-/issues/3740)
	findWidget("Plane Info Tasks").goInFullScreenMode();

	findWidget("Plane Info Tasks")
		.getWidgetActionMenuButton()
		.click();

	findWidget("Plane Info Tasks")
		.getWidgetActionDetails(0)
		.click(); // This runs a procedure which should lead to the value true in the FlagScalar widget below.

	findWidget("Plane Info Tasks").exitFullScreenMode();

	findWidget("FlagScalar")
		.getValue("Flag")
		.should.be.equal(true);
});
