/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Right click on a table cell. Assert action on click of item action.", () => {
	loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

	findWidget("ScrollableTableDialog").click();

	const cell_0_0 = findWidget("ScrollableTableData")
		.getCell(0, 0)
		.rightClick();

	cell_0_0.getItemActions().should.have.numberOfItems.equal(2);
	cell_0_0.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);

	// Horizontally scroll to end
	findWidget("ScrollableTableData").scrollToRight(20);
	//Downwards scroll
	findWidget("ScrollableTableData").scrollDown(20);

	const cell_25_25 = findWidget("ScrollableTableData")
		.getCell(25, 25)
		.rightClick();

	cell_25_25.getItemActions().should.have.numberOfItems.equal(2);
	cell_25_25.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);

	// Horizontally scroll to end
	findWidget("ScrollableTableData").scrollToRight(23);
	//Downwards scroll
	findWidget("ScrollableTableData").scrollDown(23);

	const cell_50_50 = findWidget("ScrollableTableData")
		.getCell(50, 50)
		.rightClick();

	cell_50_50.getItemActions().should.have.numberOfItems.equal(2);
	cell_50_50.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);

	// Horizontally scroll to end
	findWidget("ScrollableTableData").scrollToRight(26);
	//Downwards scroll
	findWidget("ScrollableTableData").scrollDown(26);

	const cell_75_75 = findWidget("ScrollableTableData")
		.getCell(75, 75)
		.rightClick();

	cell_75_75.getItemActions().should.have.numberOfItems.equal(2);
	cell_75_75.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);

	// Horizontally scroll to end
	findWidget("ScrollableTableData").scrollToRight(25);
	//Downwards scroll
	findWidget("ScrollableTableData").scrollDown(25);

	const cell_100_100 = findWidget("ScrollableTableData")
		.getCell(99, 99)
		.rightClick();

	cell_100_100.getItemActions().should.have.numberOfItems.equal(2);
	cell_100_100.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);
});
