/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */
scenario("Assert that when having 2 diagrams on 1 page, both diagrams show their contents.", () => {
	loadPage("Main Project/XYZoomParam");

	findWidget("Zoom Diagram")
		.getNumberOfNodes()
		.should.eql(4);

	findWidget("SecondDiagram")
		.getNumberOfNodes()
		.should.eql(2);

	// After opening the page manager, there should still be 4 nodes present on the Zoom Diagram.
	getPageHeader()
		.getButtons()
		.getPageManager()
		.click();

	findWidget("Zoom Diagram")
		.getNumberOfNodes()
		.should.eql(4);
});
