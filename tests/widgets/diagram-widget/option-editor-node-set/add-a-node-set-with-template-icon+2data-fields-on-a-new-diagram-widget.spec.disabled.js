/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 * @HARDWARE_SHARE=large
 */

const templateName = `Icon`;

scenario(
	"Add a node-set without template and it should not be displayed in node-set placeholder",
	() => {
		loadPage("Main Project/Diagram_On_Grid");

		// openAppManager()
		// 	.getFlyoutMenu({
		// 		pagePath: "Main Project",
		// 	})
		// 	.clickOnAddPage()
		// 	.enterName("Diagram_On_Grid")
		// 	.pressKeys([SPECIAL_KEYS.enter]);

		// getPageMenu().navigateToPage("Main Project/Diagram_On_Grid");

		// getPageConfigurator().selectLayout("Layout 9");

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area A")
			.selectType("Diagram")
			.enterName("Diagram On Grid")
			.clickAddWidgetButton();

		closePageConfigurator();

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.editNodeSet(0, {
				value: "c",
				type: "identifier",
			});

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.setTemplateFromOptionEditor(0, templateName, false);

		findWidget("Diagram On Grid")
			.getNodeSetTypeDetails()
			.should.eql(null);

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.editTemplateIcon(0, "office", false);

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField1(0, {
				value: "CustomerName",
				type: "identifier",
			});

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField2(0, {
				value: "CustomerCount",
				type: "identifier",
			});

		findWidget("Diagram On Grid")
			.getNodeSetTypeDetails()
			.should.eql([{ nodeTitle: "Customers", nodeIcon: "icon aimms aimms-office" }]);

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.collapseNodeSet(0);

		/* The code is finding a widget with the identifier "s", opening the diagram option editor for that
		widget, and then adding a new node set to the diagram. The node set has a value of "a" and a type
		of "identifier". It also has a storeFocus property that specifies the index "a" and its
		corresponding value "SelectedAirport". */
		findWidget("Diagram On Grid")
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

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.setTemplateFromOptionEditor(1, templateName, false);

		findWidget("Diagram On Grid")
			.getNodeSetTypeDetails()
			.should.eql([{ nodeTitle: "Customers", nodeIcon: "icon aimms aimms-office" }]);

		//Assert The Node set of index 1 is retaining it's value.
		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.expandNodeSet(0);

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplate(0)
			.should.be.equal("Icon + 2 Data Fields");

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplateIconValue(0)
			.should.be.equal("office");

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField1Value(0)
			.should.be.equal("CustomerName(c)");

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField2Value(0)
			.should.be.equal("CustomerCount(c)");

		//Continue to add Node Set index 2 Teplate values
		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.editTemplateIcon(1, "store", false);

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField1(1, {
				value: "AirportAbbreviation",
				type: "identifier",
			});

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.editTemplateField2(1, {
				value: "AirportName",
				type: "identifier",
			});

		//Assert The Node set of index 2 is retaining it's value.
		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplate(1)
			.should.be.equal("Icon + 2 Data Fields");

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.getCurrentTemplateIconValue(1)
			.should.be.equal("store");

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField1Value(1)
			.should.be.equal("AirportAbbreviation(a)");

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.getTemplateField2Value(1)
			.should.be.equal("AirportName(a)");

		findWidget("Diagram On Grid")
			.openDiagramNodeSetOptionEditor()
			.collapseNodeSet(1);

		findWidget("Diagram On Grid")
			.getNodeSetTypeDetails()
			.should.eql([
				{ nodeTitle: "Customers", nodeIcon: "icon aimms aimms-office" },
				{ nodeTitle: "Airports", nodeIcon: "icon aimms aimms-store" },
			]);
	}
);
