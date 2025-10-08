/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario("Verify collapsing/expanding the various options in the Map V3 options editor.", () => {
	loadPage("Main Project/StepsV3/6 - Two node layers, three arc layers");

	const MapArcEditor = findWidget("step6_1").arcSetsOptionEditor();

	// Make sure the arc sets are collapsed when the page opens
	MapArcEditor.getNumberOfListEntries(0).should.eql(0);

	MapArcEditor.getNumberOfListEntries(1).should.eql(0);

	MapArcEditor.getNumberOfListEntries(2).should.eql(0);

	// Expand all three arc sets and verify that the expected number of options is displayed
	MapArcEditor.expandArcSet(0)
		.getNumberOfListEntries(0)
		.should.eql(6);

	MapArcEditor.expandArcSet(1)
		.getNumberOfListEntries(1)
		.should.eql(6);

	MapArcEditor.expandArcSet(2)
		.getNumberOfListEntries(2)
		.should.eql(6);

	// Open and close the arc sets again and make sure no options are displayed anymore after that
	MapArcEditor.expandArcSet(0)
		.collapseArcSet(0)
		.getNumberOfListEntries(0)
		.should.eql(0);

	MapArcEditor.expandArcSet(1)
		.collapseArcSet(1)
		.getNumberOfListEntries(1)
		.should.eql(0);

	MapArcEditor.expandArcSet(2)
		.collapseArcSet(2)
		.getNumberOfListEntries(2)
		.should.eql(0);
});
