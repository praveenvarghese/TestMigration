/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a table with horizontal scroll and all 0 values. Data being shown because of Display-domain being true. Right click on the data cells, assert item actions are shown. Click on the item action and assert the action. ",
	() => {
		loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

		// Data setup
		findWidget("Reset Data").click();

		// Close Page Manager
		closeAppManager();

		// Right click on cell(0,0)
		const cell_0_0 = findWidget("IND Factories Output")
			.getCell(0, 0)
			.rightClick();

		// Assert item actions are displayed
		const cell_0_0_ItemActions = cell_0_0.getItemActions();
		cell_0_0_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_0_0_ItemActions.should.have.numberOfItems.equal(3);
		cell_0_0_ItemActions.should.beEqualTo([
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
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		// Get the item actions context-menu off
		// findWidget("IND Factories Output").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("IND Factories Output")
			.getCell(0, 0)
			.click();

		// Horizontally scroll to end
		findWidget("IND Factories Output").scrollToRight(2);

		// Right click on cell(0,4)
		const cell_0_4 = findWidget("IND Factories Output")
			.getCell(0, 4)
			.rightClick();

		// Assert item actions are displayed
		const cell_0_4_ItemActions = cell_0_4.getItemActions();
		cell_0_4_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_0_4_ItemActions.should.have.numberOfItems.equal(3);
		cell_0_4_ItemActions.should.beEqualTo([
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
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		// Get the item actions context-menu off
		// findWidget("IND Factories Output").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("IND Factories Output")
			.getCell(0, 4)
			.click();

		// Right click on cell(0,3)
		const cell_0_3 = findWidget("IND Factories Output")
			.getCell(0, 3)
			.rightClick();

		// Assert item actions are displayed
		const cell_0_3_ItemActions = cell_0_3.getItemActions();
		cell_0_3_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_0_3_ItemActions.should.have.numberOfItems.equal(3);
		cell_0_3_ItemActions.should.beEqualTo([
			{ title: "Read data from Server.", icon: "aimms-satellite-dish", state: "active" },
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		// Get the item actions context-menu off
		// findWidget("IND Factories Output").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("IND Factories Output")
			.getCell(0, 3)
			.click();

		// Right click on cell(0,2)
		const cell_0_2 = findWidget("IND Factories Output")
			.getCell(0, 2)
			.rightClick();

		// Assert item actions are displayed
		const cell_0_2_ItemActions = cell_0_2.getItemActions();
		cell_0_2_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_0_2_ItemActions.should.have.numberOfItems.equal(3);
		cell_0_2_ItemActions.should.beEqualTo([
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
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		// Get the item actions context-menu off
		// findWidget("IND Factories Output").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("IND Factories Output")
			.getCell(0, 2)
			.click();

		// Horizontally scroll to end
		findWidget("IND Factories Output").scrollToLeft(1);

		// Right click on cell(0,1)
		const cell_0_1 = findWidget("IND Factories Output")
			.getCell(0, 1)
			.rightClick();

		// Assert item actions are displayed
		const cell_0_1_ItemActions = cell_0_1.getItemActions();
		cell_0_1_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_0_1_ItemActions.should.have.numberOfItems.equal(3);
		cell_0_1_ItemActions.should.beEqualTo([
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
			{
				title: "Reset Data.",
				icon: "aimms-history",
				state: "inactive",
			},
		]);

		// Get the item actions context-menu off
		// findWidget("IND Factories Output").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("IND Factories Output")
			.getCell(0, 1)
			.click();

		// Assert data of Flags on the page
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.false;
		findWidget("Flags")
			.getCell(1, 0)
			.getValue().should.be.false;

		// Click on the 1st item action on cell(0,4)
		findWidget("IND Factories Output")
			.getCell(0, 2)
			.rightClick()
			.getItemActionDetails(0)
			.click();

		// Assert data of Flags on the page
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.true;
		findWidget("Flags")
			.getCell(1, 0)
			.getValue().should.be.false;

		// Click on the 2nd item action on cell(0,4)
		findWidget("IND Factories Output")
			.getCell(0, 3)
			.rightClick()
			.getItemActionDetails(1)
			.click();

		// Assert data of Flags on the page
		findWidget("Flags")
			.getCell(0, 0)
			.getValue().should.be.true;
		findWidget("Flags")
			.getCell(1, 0)
			.getValue().should.be.true;
	}
);
