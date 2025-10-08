/*!
 * @AIMMS_FILE=models/Diagram/Diagram.aimms
 */

scenario("Check that the diagram header title is displayed", () => {
	loadPage("Main Project/home");

	findWidget("NetworkDiagram").mouseHover();
	findWidget("NetworkDiagram").isWidgetActionMenuButtonDisplayed().should.be.true;

	findWidget("NetworkDiagram")
		.getWidgetActionMenuButton()
		.click();

	findWidget("NetworkDiagram")
		.getWidgetActions()
		.should.beEqualTo([{ title: "Show network info", icon: "aimms-tree7", state: "active" }]);
});
