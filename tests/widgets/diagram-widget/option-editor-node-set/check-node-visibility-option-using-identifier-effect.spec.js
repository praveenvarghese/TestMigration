/*!
 * @AIMMS_FILE=models/DiagramV2Model/DiagramV2Model.aimms
 */

scenario(
	"Check the effect of all three settings for the Button Visibility option, specified through a string parameter.",
	() => {
		loadPage("Main Project/home");

		// Upon startup, no setting has been specified, which means that the default of "Active" should be set.
		findWidget("MyDiagram")
			.openDiagramNodeSetOptionEditor()
			.setButtonVisibilityToIdentifier(0, {
				value: "NodeSetVisibility",
				type: "identifier",
			});

		findWidget("SetActive").click();

		// Verify also that a new node can be created for this node set.
		findWidget("MyDiagram")
			.getNumberOfNodes()
			.should.eql(15);

		// Verify that both Cities and People buttons are present at the bottom of the diagram.
		findWidget("MyDiagram")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Cities", nodeIcon: undefined },
				{ nodeTitle: "People", nodeIcon: undefined },
			]);

		findWidget("MyDiagram").addNode("Cities", 100, 100);

		findWidget("MyDiagram")
			.getNumberOfNodes()
			.should.eql(16);

		// Now set the button visibility to "Hidden"
		findWidget("SetHidden").click();

		// Verify that the node set button is not present anymore on the bottom row of buttons on the diagram.
		findWidget("MyDiagram")
			.getNodeSetTypeDetails()
			.should.eql([{ nodeTitle: "People", nodeIcon: undefined }]);

		// Now make the node set inactive.
		findWidget("SetInactive").click();

		// Verify that the node set button is present again on the bottom row of buttons on the diagram.
		findWidget("MyDiagram")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Cities", nodeIcon: undefined },
				{ nodeTitle: "People", nodeIcon: undefined },
			]);

		// Verify that the Cities node set is indeed rendered as inactive.
		findWidget("MyDiagram")
			.getInactiveNodeSetTypeButtons()
			.should.eql(["Cities"]);
	}
);
