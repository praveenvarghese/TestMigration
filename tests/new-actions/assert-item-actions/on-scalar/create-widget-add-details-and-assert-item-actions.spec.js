/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Create a Scalar widget with multi-contents data. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions");

		// Wait for background operations to complete and Busy messagage bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		// Disable default browser context menu on the page
		findWidget("item_actions").unBindBrowserContextmenu();

		// Create a multi-contents Scalar widget
		createWidget(
			"scalar",
			["MyHeight", "MyWeight", "P_nD_Data", "P_RO_nD_Data"],
			"TestScalarWidget"
		);

		/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

		// Vertically scroll to end
		findWidget("TestScalarWidget").dragScrollDown();

		// Right click on P_RO_nD_Data data in "Numeric Data" Scalar widget
		let cell_P_RO_nD_Data = findWidget("TestScalarWidget")
			.getScalarCell("P_RO_nD_Data")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_P_RO_nD_Data.getItemActions().should.not.exist;

		// Right click on P_nD_Data data in "Numeric Data" Scalar widget
		let cell_P_nD_Data = findWidget("TestScalarWidget")
			.getScalarCell("P_nD_Data")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_P_nD_Data.getItemActions().should.not.exist;

		// Right click on MyWeight data in "Numeric Data" Scalar widget
		let cell_MyWeight = findWidget("TestScalarWidget")
			.getScalarCell("MyWeight")
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_MyWeight.getItemActions().should.not.exist;

		// Vertically scroll to end
		findWidget("TestScalarWidget").dragScrollUp();

		// Right click on MyHeight data in "Numeric Data" Scalar widget
		let cell_MyHeight = findWidget("TestScalarWidget")
			.getScalarCell("MyHeight")
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_MyHeight.getItemActions().should.not.exist;

		/*
		Configure Item actions data to the Scalar Widget
		*/

		//Configure item action and validate its displayed
		findWidget("TestScalarWidget")
			.openWidgetExtensionsOptionEditor()
			.setWidgetExtensions([
				{
					name: "Item Actions",
					value: "ItemActionsInfo",
				},
			]);

		findWidget("TestScalarWidget").closeOptionDialog();

		/*
		On a Multi-contents Scalar with numeric data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Right click and assert respective item actions are shown.
		*/

		// Right click on MyHeight data in "Numeric Data" Scalar widget
		cell_MyHeight = findWidget("TestScalarWidget")
			.getScalarCell("MyHeight")
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_MyHeight_ItemActions = cell_MyHeight.getItemActions();
		cell_MyHeight_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_MyHeight_ItemActions.should.have.numberOfItems.equal(3);
		cell_MyHeight_ItemActions.should.beEqualTo([
			{
				title: "Read data from Server.",
				icon: "aimms-satellite-dish",
				state: "active",
			},
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{ title: "Reset Data.", icon: "aimms-history", state: "inactive" },
		]);

		// Get the item actions context-menu off
		findWidget("TestScalarWidget").pressKeys([SPECIAL_KEYS.tab]);
		// findWidget("TestScalarWidget")
		// 	.getScalarCell("MyHeight")
		// 	.click(0, -1);

		// Right click on MyWeight data in "Numeric Data" Scalar widget
		cell_MyWeight = findWidget("TestScalarWidget")
			.getScalarCell("MyWeight")
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_MyWeight_ItemActions = cell_MyWeight.getItemActions();
		cell_MyWeight_ItemActions.should.exist;

		// Assert there are 5 item actions. Assert the details.
		cell_MyWeight_ItemActions.should.have.numberOfItems.equal(5);
		cell_MyWeight_ItemActions.should.beEqualTo([
			{
				title: "Select next available slot as per Calendar.",
				icon: "aimms-calendar5",
				state: "active",
			},
			{
				title: "Other tasks on this Date",
				icon: "aimms-question",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "active" },
			{ title: "Reset Date", icon: "aimms-history", state: "inactive" },
			{ title: "Clear Date", icon: "aimms-eraser2", state: "active" },
		]);

		// Get the item actions context-menu off
		findWidget("TestScalarWidget").pressKeys([SPECIAL_KEYS.tab]);
		// findWidget("TestScalarWidget")
		// 	.getScalarCell("MyWeight")
		// 	.click(0, -1);

		// Right click on P_nD_Data data in "Numeric Data" Scalar widget
		cell_P_nD_Data = findWidget("TestScalarWidget")
			.getScalarCell("P_nD_Data")
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_P_nD_Data_ItemActions = cell_P_nD_Data.getItemActions();
		cell_P_nD_Data_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_P_nD_Data_ItemActions.should.have.numberOfItems.equal(3);
		cell_P_nD_Data_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from P_nD_Data",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{
				title: "Recent closed task of P_nD_Data",
				icon: "aimms-clipboard2",
				state: "inactive",
			},
			{
				title: "Top 1 Open task of P_nD_Data",
				icon: "aimms-list-numbered",
				state: "active",
			},
		]);

		// Get the item actions context-menu off
		findWidget("TestScalarWidget").pressKeys([SPECIAL_KEYS.tab]);
		// findWidget("TestScalarWidget")
		// 	.getScalarCell("P_nD_Data")
		// 	.click(0, -1);

		// Vertically scroll to end
		findWidget("TestScalarWidget").dragScrollDown();

		// Right click on P_RO_nD_Data data in "Numeric Data" Scalar widget
		cell_P_RO_nD_Data = findWidget("TestScalarWidget")
			.getScalarCell("P_RO_nD_Data")
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_P_RO_nD_Data_ItemActions = cell_P_RO_nD_Data.getItemActions();
		cell_P_RO_nD_Data_ItemActions.should.exist;

		// Assert there are 4 item actions. Assert the details.
		cell_P_RO_nD_Data_ItemActions.should.have.numberOfItems.equal(4);
		cell_P_RO_nD_Data_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from P_RO_nD_Data",
				icon: "aimms-chart",
				state: "active",
			},
			{
				title: "Recent closed task of P_RO_nD_Data",
				icon: "aimms-clipboard2",
				state: "active",
			},
			{
				title: "Top 1 Open task of P_RO_nD_Data",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "inactive" },
		]);
	}
);
