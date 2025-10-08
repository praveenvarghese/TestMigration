/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Assert all available EPs in the dropdown list for store focus.", () => {
	loadPage("Main Project/Grid_Page_Custom_Layout");

	findWidget("Network_map")
		.nodeSetsMapLeafletOptionEditor()
		.getOptionEntry(0, "Index")
		.clickToGetIdentifierSelectionDialog()
		.getStoreFocusDropdownList([{ index: "f" }])
		.should.eql(["ep_Factory", "SelectedFactory", "SelectedLocation"]);
});
