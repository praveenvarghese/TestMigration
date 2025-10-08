/*!
 * @AIMMS_FILE=models/PageV2/IslandsModel_Pagev2/Islands.aimms
 */

scenario("modify sidepanel details and validate details have been displayed correctly", () => {
	loadPage("Main Project/Great Test Page");

	// Updating title of a SidePanel Tab
	findWidget("editSidepanelTabs")
		.getCell(1, 0)
		.setValue("Updated Title");

	// Asserting SidePanel Info
	findWidget("great_test_page")
		.getSidepanels()
		.getSidePanelTabInfo()
		.should.eql([
			{
				Name: "Upload & Download Widget",
				Slug: "glsidepanelpage_1",
				Tooltip: "Upload & Download Widget Inside",
				Icon: "aimms-info",
				IconColor: "blue",
			},
			{
				Name: "Updated Title",
				Slug: "hiddenwidgetsidepanelstandardpage_1",
				Tooltip: "",
				Icon: "aimms-cart",
				IconColor: "red",
			},
			{
				Name: "Hidden Widget Custom Page",
				Slug: "hiddenwidgetsidepanelcustompage_1",
				Tooltip: "Hidden Widget Inside",
				Icon: "aimms-eraser",
				IconColor: "",
			},
			{
				Name: "All Widgets Part1",
				Slug: "allwidgetsinsidepanelpart1_1",
				Tooltip: "All Widgets Part1",
				Icon: "",
				IconColor: "",
			},
			{
				Name: "All Widgets Part2",
				Slug: "allwidgetsinsidepanelpart2_1",
				Tooltip: "All Widgets Part2",
				Icon: "aimms-cart",
				IconColor: "pink",
			},
			{
				Name: "",
				Slug: "cleansidepanel_1",
				Tooltip: "All Widgets Part2",
				Icon: "",
				IconColor: "red",
			},
		]);

	// Opening a SidePanel Info
	findWidget("great_test_page")
		.getSidepanels()
		.openSidepanelTab("Upload & Download Widget");

	// Asserting SidePanel Info
	findWidget("great_test_page")
		.getSidepanels()
		.getSidePanelTabInfo()
		.should.eql([
			{
				Name: "Upload & Download Widget",
				Slug: "glsidepanelpage_1",
				Tooltip: "Upload & Download Widget Inside",
				Icon: "aimms-info",
				IconColor: "blue",
			},
			{
				Name: "Updated Title",
				Slug: "hiddenwidgetsidepanelstandardpage_1",
				Tooltip: "",
				Icon: "aimms-cart",
				IconColor: "red",
			},
			{
				Name: "Hidden Widget Custom Page",
				Slug: "hiddenwidgetsidepanelcustompage_1",
				Tooltip: "Hidden Widget Inside",
				Icon: "aimms-eraser",
				IconColor: "",
			},
			{
				Name: "All Widgets Part1",
				Slug: "allwidgetsinsidepanelpart1_1",
				Tooltip: "All Widgets Part1",
				Icon: "",
				IconColor: "",
			},
			{
				Name: "All Widgets Part2",
				Slug: "allwidgetsinsidepanelpart2_1",
				Tooltip: "All Widgets Part2",
				Icon: "aimms-cart",
				IconColor: "pink",
			},
			{
				Name: "",
				Slug: "cleansidepanel_1",
				Tooltip: "All Widgets Part2",
				Icon: "",
				IconColor: "red",
			},
		]);

	// Updating Icon of a SidePanel Tab
	findWidget("editSidepanelTabs")
		.getCell(3, 3)
		.setValue("aimms-eraser");

	// Asserting SidePanel Info
	findWidget("great_test_page")
		.getSidepanels()
		.getSidePanelTabInfo()
		.should.eql([
			{
				Name: "Upload & Download Widget",
				Slug: "glsidepanelpage_1",
				Tooltip: "Upload & Download Widget Inside",
				Icon: "aimms-info",
				IconColor: "blue",
			},
			{
				Name: "Updated Title",
				Slug: "hiddenwidgetsidepanelstandardpage_1",
				Tooltip: "",
				Icon: "aimms-cart",
				IconColor: "red",
			},
			{
				Name: "Hidden Widget Custom Page",
				Slug: "hiddenwidgetsidepanelcustompage_1",
				Tooltip: "Hidden Widget Inside",
				Icon: "aimms-eraser",
				IconColor: "",
			},
			{
				Name: "All Widgets Part1",
				Slug: "allwidgetsinsidepanelpart1_1",
				Tooltip: "All Widgets Part1",
				Icon: "aimms-eraser",
				IconColor: "",
			},
			{
				Name: "All Widgets Part2",
				Slug: "allwidgetsinsidepanelpart2_1",
				Tooltip: "All Widgets Part2",
				Icon: "aimms-cart",
				IconColor: "pink",
			},
			{
				Name: "",
				Slug: "cleansidepanel_1",
				Tooltip: "All Widgets Part2",
				Icon: "",
				IconColor: "red",
			},
		]);

	// Remove the Tooltip specification from the side panel. This should not lead to a missing icon anymore (ticket #4127).
	findWidget("RemoveTT").click();

	// Asserting SidePanel Info
	findWidget("great_test_page")
		.getSidepanels()
		.getSidePanelTabInfo()
		.should.eql([
			{
				Name: "Upload & Download Widget",
				Slug: "glsidepanelpage_1",
				Tooltip: "",
				Icon: "aimms-info",
				IconColor: "blue",
			},
			{
				Name: "Updated Title",
				Slug: "hiddenwidgetsidepanelstandardpage_1",
				Tooltip: "",
				Icon: "aimms-cart",
				IconColor: "red",
			},
			{
				Name: "Hidden Widget Custom Page",
				Slug: "hiddenwidgetsidepanelcustompage_1",
				Tooltip: "",
				Icon: "aimms-eraser",
				IconColor: "",
			},
			{
				Name: "All Widgets Part1",
				Slug: "allwidgetsinsidepanelpart1_1",
				Tooltip: "",
				Icon: "aimms-eraser",
				IconColor: "",
			},
			{
				Name: "All Widgets Part2",
				Slug: "allwidgetsinsidepanelpart2_1",
				Tooltip: "",
				Icon: "aimms-cart",
				IconColor: "pink",
			},
			{ Name: "", Slug: "cleansidepanel_1", Tooltip: "", Icon: "", IconColor: "red" },
		]);
});
