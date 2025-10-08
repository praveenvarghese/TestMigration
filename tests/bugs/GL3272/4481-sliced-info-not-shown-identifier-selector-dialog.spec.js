/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario("Test asserting sliced in displayed in the identifier selector", () => {
	loadPage("Main Project/Home");

	findWidget("TransportNetworkMap")
		.openWidgetExtensionsOptionEditor()
		.clickToGetIdentifierSelectionDialog("widgetactions")
		.getSelectedDetailsFromIdentifierDialogFooter()
		.should.eql("sidePanelWidgetViews(webui::IndexWebUICases, webui::indexSidePanelSpec)");
});
