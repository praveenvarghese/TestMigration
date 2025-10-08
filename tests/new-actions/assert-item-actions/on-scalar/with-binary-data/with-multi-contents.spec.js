/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario(
	"On a Multi-contents Scalar widget with binary data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy messagage bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		/* On a Multi-contents Scalar with binary data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Right click and assert respective item actions are shown. */

		// Right click on BinaryFlag data in "Binary Data" Scalar widget
		let cell_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		let cell_BinaryFlag_ItemActions = cell_BinaryFlag.getItemActions();
		cell_BinaryFlag_ItemActions.should.exist;

		// Assert there are 4 item actions. Assert the details.
		cell_BinaryFlag_ItemActions.should.have.numberOfItems.equal(4);
		cell_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from BinaryFlag",
				icon: "aimms-chart",
				state: "active",
			},
			{
				title: "Recent closed task of BinaryFlag",
				icon: "aimms-clipboard2",
				state: "active",
			},
			{
				title: "Top 1 Open task of BinaryFlag",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "inactive" },
		]);

		// Get the item actions context-menu off
		findWidget("Binary Data")
			.getScalarCell("BinaryFlag")
			.click(0, 0);

		// Right click on RO_BinaryFlag data in "Binary Data" Scalar widget
		let cell_RO_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("RO_BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		let cell_RO_BinaryFlag_ItemActions = cell_RO_BinaryFlag.getItemActions();
		cell_RO_BinaryFlag_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_RO_BinaryFlag_ItemActions.should.have.numberOfItems.equal(3);
		cell_RO_BinaryFlag_ItemActions.should.beEqualTo([
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
		findWidget("Binary Data")
			.getScalarCell("RO_BinaryFlag")
			.click(0, 0);

		// Right click on nD_BinaryFlag data in "Binary Data" Scalar widget
		let cell_nD_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("nD_BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_nD_BinaryFlag_ItemActions = cell_nD_BinaryFlag.getItemActions();
		cell_nD_BinaryFlag_ItemActions.should.exist;

		// Assert there are 5 item actions. Assert the details.
		cell_nD_BinaryFlag_ItemActions.should.have.numberOfItems.equal(5);
		cell_nD_BinaryFlag_ItemActions.should.beEqualTo([
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
		findWidget("Binary Data")
			.getScalarCell("nD_BinaryFlag")
			.click(0, 0);

		// Right click on cell_RO_nD_BinaryFlag data in "Binary Data" Scalar widget
		let cell_RO_nD_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("RO_nD_BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		let cell_RO_nD_BinaryFlag_ItemActions = cell_RO_nD_BinaryFlag.getItemActions();
		cell_RO_nD_BinaryFlag_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_RO_nD_BinaryFlag_ItemActions.should.have.numberOfItems.equal(3);
		cell_RO_nD_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from RO_nD_BinaryFlag",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{
				title: "Recent closed task of RO_nD_BinaryFlag",
				icon: "aimms-clipboard2",
				state: "inactive",
			},
			{
				title: "Top 1 Open task of RO_nD_BinaryFlag",
				icon: "aimms-list-numbered",
				state: "active",
			},
		]);

		// Get the item actions context-menu off
		findWidget("Binary Data")
			.getScalarCell("RO_nD_BinaryFlag")
			.click(0, 0);

		// Update value of BinaryFlag in "Binary Data" Scalar widget
		findWidget("Binary Data").setValue("BinaryFlag", false);

		// Right click on updated BinaryFlag in "Binary Data" Scalar widget
		cell_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_BinaryFlag_ItemActions = cell_BinaryFlag.getItemActions();
		cell_BinaryFlag_ItemActions.should.exist;

		// Assert there are 4 item actions. Assert the details.
		cell_BinaryFlag_ItemActions.should.have.numberOfItems.equal(4);
		cell_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from BinaryFlag",
				icon: "aimms-chart",
				state: "active",
			},
			{
				title: "Recent closed task of BinaryFlag",
				icon: "aimms-clipboard2",
				state: "active",
			},
			{
				title: "Top 1 Open task of BinaryFlag",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "inactive" },
		]);

		// Get the item actions context-menu off
		findWidget("Binary Data")
			.getScalarCell("BinaryFlag")
			.click(0, 0);
		/*
		Clear off Item Actions Data
		On right-click of binary data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Assert no item actions are shown.
		*/

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Right click on cell_RO_nD_BinaryFlag data in "Binary Data" Scalar widget
		cell_RO_nD_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("RO_nD_BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_RO_nD_BinaryFlag.getItemActions().should.not.exist;

		// Right click on BinaryFlag data in "Binary Data" Scalar widget
		cell_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_BinaryFlag.getItemActions().should.not.exist;

		// Right click on MyHeight data in "Binary Data" Scalar widget
		cell_RO_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("RO_BinaryFlag")
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_RO_BinaryFlag.getItemActions().should.not.exist;

		// Right click on MyWeight data in "Binary Data" Scalar widget
		cell_nD_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("nD_BinaryFlag")
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_nD_BinaryFlag.getItemActions().should.not.exist;

		/*
		Update the Item Actions Data
		On right-click of binary data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Assert respective item actions are shown.
		*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Right click on BinaryFlag data in "Binary Data" Scalar widget
		cell_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_BinaryFlag_ItemActions = cell_BinaryFlag.getItemActions();
		cell_BinaryFlag_ItemActions.should.exist;

		// Assert there are 4 item actions. Assert the details.
		cell_BinaryFlag_ItemActions.should.have.numberOfItems.equal(4);
		cell_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from BinaryFlag",
				icon: "aimms-chart",
				state: "inactive",
			},
			{
				title: "Recent closed task of BinaryFlag",
				icon: "aimms-folder-download2",
				state: "active",
			},
			{
				title: "Top 1 Open task of BinaryFlag",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "active" },
		]);

		// Get the item actions context-menu off
		findWidget("Binary Data")
			.getScalarCell("BinaryFlag")
			.click(0, 0);

		// Right click on MyHeight data in "Binary Data" Scalar widget
		cell_RO_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("RO_BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_RO_BinaryFlag_ItemActions = cell_RO_BinaryFlag.getItemActions();
		cell_RO_BinaryFlag_ItemActions.should.exist;

		// Assert there are 2 item actions. Assert the details.
		cell_RO_BinaryFlag_ItemActions.should.have.numberOfItems.equal(2);
		cell_RO_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{ title: "Reset Data.", icon: "aimms-history", state: "inactive" },
		]);

		// Get the item actions context-menu off
		findWidget("Binary Data")
			.getScalarCell("RO_BinaryFlag")
			.click(0, 0);

		// Right click on MyWeight data in "Binary Data" Scalar widget
		cell_nD_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("nD_BinaryFlag")
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_nD_BinaryFlag.getItemActions().should.not.exist;

		// Right click on cell_RO_nD_BinaryFlag data in "Binary Data" Scalar widget
		cell_RO_nD_BinaryFlag = findWidget("Binary Data")
			.getScalarCell("RO_nD_BinaryFlag")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_RO_nD_BinaryFlag_ItemActions = cell_RO_nD_BinaryFlag.getItemActions();
		cell_RO_nD_BinaryFlag_ItemActions.should.exist;

		// Assert there is 1 item action. Assert the details.
		cell_RO_nD_BinaryFlag_ItemActions.should.have.numberOfItems.equal(1);
		cell_RO_nD_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from RO_nD_BinaryFlag",
				icon: "aimms-stats-bars",
				state: "active",
			},
		]);

		// Get the item actions context-menu off
		findWidget("Binary Data")
			.getScalarCell("RO_nD_BinaryFlag")
			.click(0, 0);
	}
);
