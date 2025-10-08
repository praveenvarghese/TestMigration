/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 1. On Scalar Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/home/Application Settings");

		// Set Limited-Option-editor to True
		findWidget("Toggle Limited_Option_editor").click();
		findWidget("Application Settings_1")
			.getAllMultiContentScalarData()
			.should.be.eql([
				{ label: "UI_Editable", value: "1.00" },
				{ label: "Limited_Option_Editor", value: "1.00" },
			]);

		// Navigate to our page of interest
		getPageMenu().navigateToPage(
			"Main Project/Aircraft Maintenance Calendar/Planes Maintenance Renewal DateTime"
		);

		//#region Single Content Scalar Widget

		// Click on Single Content Scalar Widget Settings, and assert the info on Option Editor.
		findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(scalarWidgetOptions());

		// For the Single Content Scalar Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Scheduled Planes Maintenance Audit Date",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Widget Actions", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Item Actions", NewOptionType: true, Value: "", Index: 1 },
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("SS_ScheduledPlanesMaintenanceAuditDate")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Show Labels", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
				{ Name: "Enable Multi-Line (1/0)", NewOptionType: false, Value: "", Index: 2 },
				{ Name: "Enable Compact mode (1/0)", NewOptionType: false, Value: "", Index: 3 },
				{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 4 },
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 5 },
				{
					Name: "Title",
					NewOptionType: true,
					Value: "Scheduled Planes Maintenance Audit Date",
					Index: 6,
				},
			]);
		//#endregion

		//#region Multi-Contents Scalar Widget

		// Click on Multi-Contents Scalar Widget Settings, and assert the info on Option Editor.
		findWidget("StoreFocus")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(scalarWidgetOptions());

		// For the Multi-Contents Scalar Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("StoreFocus")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "Store Focus",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("StoreFocus")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Widget Actions", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Item Actions", NewOptionType: true, Value: "", Index: 1 },
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("StoreFocus")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Show Labels", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
				{ Name: "Enable Multi-Line (1/0)", NewOptionType: false, Value: "", Index: 2 },
				{ Name: "Enable Compact mode (1/0)", NewOptionType: false, Value: "", Index: 3 },
				{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 4 },
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 5 },
				{ Name: "Title", NewOptionType: true, Value: "Store Focus", Index: 6 },
			]);
		//#endregion

		//#region Compact Scalar Widget

		// Click on Compact Scalar Widget Settings, and assert the info on Option Editor.
		findWidget("CS_PlanesMaintenanceRenewalDate")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(scalarWidgetOptions());

		// For the Compact Scalar Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("CS_PlanesMaintenanceRenewalDate")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "CS_PlanesMaintenanceRenewalDate",
				"OptionEditorTab Title": "Contents",
			});

		// Assert options available on "Widget Extension" option editor and their data
		findWidget("CS_PlanesMaintenanceRenewalDate")
			.openWidgetExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Widget Actions", NewOptionType: true, Value: "", Index: 0 },
				{ Name: "Item Actions", NewOptionType: true, Value: "", Index: 1 },
			]);

		// Assert options available on "Miscellaneous" option editor and their data
		findWidget("CS_PlanesMaintenanceRenewalDate")
			.openMiscellaneousOptionEditor()
			.getOptions()
			.should.include.something.like([
				{ Name: "Show Labels", NewOptionType: false, Value: "", Index: 0 },
				{ Name: "Show Units", NewOptionType: false, Value: "", Index: 1 },
				{ Name: "Enable Multi-Line (1/0)", NewOptionType: false, Value: "", Index: 2 },
				{ Name: "Enable Compact mode (1/0)", NewOptionType: false, Value: "1", Index: 3 },
				{ Name: "Decimal Places", NewOptionType: false, Value: "", Index: 4 },
				{ Name: "Visible", NewOptionType: false, Value: "", Index: 5 },
				{ Name: "Title", NewOptionType: true, Value: "", Index: 6 },
			]);
		//#endregion
	}
);
