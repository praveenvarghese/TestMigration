/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario("Assert Template options value of a node set list", () => {
	loadPage("Main Project/new page");

	/* The code is finding a widget with the identifier "s", opening the diagram option editor for
	that widget, expanding the node set at index 0, and then getting the templates from the
	dropdown list for that node set. It is asserting that the templates should be equal to an array
	containing the values "Image Field", "2 Data Fields", "3 Data Fields", and "Icon + 2 Data
	Fields". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(0)
		.getTemplatesFromDropdownList(0)
		.should.eql([["Image Field", "2 Data Fields", "3 Data Fields", "Icon + 2 Data Fields"]]);

	/* The code is finding a widget with the identifier "s", opening the diagram option editor for that
	widget, and then collapsing the node set at index 0. After collapsing the node set, it checks if
	the node set at index 0 is collapsed by using the `isNodeSetCollapsedORExpanded` function. It
	asserts that the result should be equal to the string "Collapsed". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.collapseNodeSet(0);

	/* The code is finding a widget with the identifier "s", opening the diagram option editor for that
		widget, and then adding a new node set to the diagram. The node set has a value of "a" and a type
		of "identifier". It also has a storeFocus property that specifies the index "a" and its
		corresponding value "SelectedAirport". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.addNodeSet({
			value: "a",
			type: "identifier",
			storeFocus: [
				{
					index: "a",
					value: "SelectedAirport",
				},
			],
		});

	/* The code is finding a widget with the identifier "s", opening the diagram option editor for that
	widget, expanding the node set at index 0, and then getting the templates from the dropdown list
	for that node set. It is asserting that the templates should be equal to an array containing the
	values "Image Field", "2 Data Fields", "3 Data Fields", and "Icon + 2 Data Fields". */
	findWidget("s2")
		.openDiagramNodeSetOptionEditor()
		.expandNodeSet(3)
		.getTemplatesFromDropdownList(3)
		.should.eql([["Image Field", "2 Data Fields", "3 Data Fields", "Icon + 2 Data Fields"]]);
});
