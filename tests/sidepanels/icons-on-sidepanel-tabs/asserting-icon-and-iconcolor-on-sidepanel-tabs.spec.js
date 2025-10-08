/*!
 * @AIMMS_FILE=models/PageV2/IslandsModel_Pagev2/Islands.aimms
 */

scenario(
	"Validate icons and color displayed in the sidepanel tabs when its closed and opened",
	() => {
		loadPage("Main Project/Great Test Page");

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
					Name: "",
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

		findWidget("great_test_page")
			.getSidepanels()
			.openSidepanelTab("Upload & Download Widget");

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
					Name: "",
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
	}
);
