/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/PageWithArcs");

		// clear the center.x
		findWidget("Prefilled Diagram V2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("center.x")
			.clearValue();

		// Set the center.x
		findWidget("Prefilled Diagram V2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("center.x")
			.setValue({
				value: "center_X",
				valueType: "IDENTIFIER",
				optionEditorType: "IDENTIFIER",
				sliceInfo: null,
			});

		// clear the center.y
		findWidget("Prefilled Diagram V2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("center.y")
			.clearValue();

		// Set the center.x
		findWidget("Prefilled Diagram V2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("center.y")
			.setValue({
				value: "center_Y",
				valueType: "IDENTIFIER",
				optionEditorType: "IDENTIFIER",
				sliceInfo: null,
			});

		// clear the zoom
		findWidget("Prefilled Diagram V2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Zoom")
			.clearValue();

		// Set the zoom
		findWidget("Prefilled Diagram V2")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Zoom")
			.setValue({
				value: "diagram_zoom",
				valueType: "IDENTIFIER",
				optionEditorType: "IDENTIFIER",
				sliceInfo: null,
			});

		// validate the center.x saved value
		findWidget("Prefilled Diagram V2")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "center.x",
					Value: "center_X",
				},
				{
					Name: "center.y",
					Value: "center_Y",
				},
				{
					Name: "Zoom",
					Value: "diagram_zoom",
				},
			]);

		findWidget("Prefilled Diagram V2")
			.getNodeDetails()
			.should.be.shallowDeepEqual([
				{ nodeName: "Suppliers-1", nodeIcon: "icon aimms aimms-store" },
				{ nodeName: "Suppliers-4", nodeIcon: "icon aimms aimms-store" },
				{ nodeName: "Warehouses-3" },
				{ nodeName: "Warehouses-2" },
				{ nodeName: "Warehouses-5" },
				{ nodeName: "Warehouses-6" },
				{ nodeName: "Customers-1" },
				{ nodeName: "Customers-2" },
				{ nodeName: "Customers-3" },
				{ nodeName: "Customers-4" },
				{ nodeName: "Customers-5" },
			]);

		findWidget("Prefilled Diagram V2")
			.getAllArcsInfo()
			.should.beEqualInAnyOrderTo([
				{ source: "Suppliers-1", target: "Warehouses-3" },
				{ source: "Warehouses-2", target: "Customers-3" },
				{ source: "Warehouses-2", target: "Customers-5" },
				{ source: "Warehouses-5", target: "Customers-1" },
				{ source: "Suppliers-4", target: "Warehouses-2" },
				{ source: "Suppliers-1", target: "Warehouses-5" },
				{ source: "Suppliers-1", target: "Warehouses-6" },
				{ source: "Suppliers-1", target: "Customers-2" },
				{ source: "Suppliers-1", target: "Customers-4" },
				{ source: "Suppliers-1", target: "Customers-5" },
			]);
	}
);
