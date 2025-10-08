/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */
scenario(
	"Validate custom position of widget doesn't change when classic page is loaded without the flag ",
	() => {
		loadPage("Main Project/home/Wizard NewUI Page 4");

		findWidget("wizard_newui_page_4")
			.getVisibleWidgetsInViewPort()
			.should.eql(["map1"]);

		findWidget("wizard_newui_page_4")
			.getWidgets()
			.should.eql(["map1", "map2_1", "CustomPositionWidget"]);
	}
);
