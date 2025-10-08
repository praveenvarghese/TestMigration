/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"After deleting a page containing a group widget that contains a widget called 'Image2' we should be allowed to create a new widget with name 'Image2'",
	() => {
		loadPage("Main Project/home");

		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/THird Page",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		getAppManager()
			.getAppManagerInfo()
			.should.not.include.something.like([
				{ Name: "THird Page", Slug: "third_page", NodeType: "Page" },
			]);

		createWidget("image", [], "Image2");

		findWidget("Image2").should.be.a.widgetOfType("image");
	}
);
