/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verify collapsing/expanding the various options in the Map V3 options editor.", () => {
	loadPage("Main Project/StepsV3/Two node layers");

	const MapNodeEditor = findWidget("twoNodeSetMap").nodeSetsMapLeafletOptionEditor();

	// Make sure the node sets are collapsed when the page opens
	MapNodeEditor.getNumberOfListEntries(0).should.eql(0);

	MapNodeEditor.getNumberOfListEntries(1).should.eql(0);

	// Expand both node sets and verify that the expected number of options is displayed
	MapNodeEditor.expandNodeSet(0)
		.getNumberOfListEntries(0)
		.should.eql(6);

	MapNodeEditor.expandNodeSet(1)
		.getNumberOfListEntries(1)
		.should.eql(6);

	// Open and close the node sets again and make sure no options are displayed anymore after that
	MapNodeEditor.expandNodeSet(0)
		.collapseNodeSet(0)
		.getNumberOfListEntries(0)
		.should.eql(0);

	MapNodeEditor.expandNodeSet(1)
		.collapseNodeSet(1)
		.getNumberOfListEntries(1)
		.should.eql(0);
});
