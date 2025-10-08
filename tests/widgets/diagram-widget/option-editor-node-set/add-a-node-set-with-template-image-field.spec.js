/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/new page");

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

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.setTemplateFromOptionEditor(3, "Image Field");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplate(3)
			.should.be.equal("Image Field");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.editTemplateImage(3, {
				value: "AirportImageUri",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.getTemplateImageValue(3)
			.should.eql("AirportImageUri(a)");

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.specifyXCoordinate(3, {
				value: "AirportsX",
				type: "identifier",
			});

		findWidget("s2")
			.openDiagramNodeSetOptionEditor()
			.specifyYCoordinate(3, {
				value: "AirportsY",
				type: "identifier",
			});

		findWidget("s2")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Suppliers", nodeIcon: "icon aimms aimms-store" },
				{ nodeTitle: "Warehouses", nodeIcon: undefined },
				{ nodeTitle: "Customers", nodeIcon: undefined },
				{ nodeTitle: "Airports", nodeIcon: undefined },
			]);
	}
);
