/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Resizing the list widget and asserting list items visible on viewport. ", () => {
	loadPage("Main Project/Planes Info/Tasks");

	closeAppManager();

	// Assert the number of list groups visible on viewport
	findWidget("Plane Info Tasks")
		.getVisibleListGroupsCount()
		.should.be.equal(3);

	openWidgetManager().setWidgetSize("Plane Info Tasks", { width: 3, height: 3 });

	// Assert the number of list groups visible on viewport
	findWidget("Plane Info Tasks")
		.getVisibleListGroupsCount()
		.should.be.equal(7);
});
