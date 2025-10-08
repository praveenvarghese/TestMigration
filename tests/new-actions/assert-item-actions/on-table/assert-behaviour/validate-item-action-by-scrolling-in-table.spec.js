/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Right click on a table cell. Assert action on click of item action.", () => {
	loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

	const cell_0_0 = findWidget("Scrollable Table")
		.getCell(0, 0)
		.rightClick();

	cell_0_0.getItemActions().should.have.numberOfItems.equal(2);
	cell_0_0.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);

	// Horizontally scroll to end
	findWidget("Scrollable Table").scrollToRight(18);
	//Downwards scroll
	findWidget("Scrollable Table").scrollDown(18);

	const cell_25_25 = findWidget("Scrollable Table")
		.getCell(25, 25)
		.rightClick();

	cell_25_25.getItemActions().should.have.numberOfItems.equal(2);
	cell_25_25.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);

	// Horizontally scroll to end
	findWidget("Scrollable Table").scrollToRight(23);
	//Downwards scroll
	findWidget("Scrollable Table").scrollDown(23);

	const cell_50_50 = findWidget("Scrollable Table")
		.getCell(50, 50)
		.rightClick();

	cell_50_50.getItemActions().should.have.numberOfItems.equal(2);
	cell_50_50.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);

	// Horizontally scroll to end
	findWidget("Scrollable Table").scrollToRight(25);
	//Downwards scroll
	findWidget("Scrollable Table").scrollDown(25);

	const cell_75_75 = findWidget("Scrollable Table")
		.getCell(75, 75)
		.rightClick();

	cell_75_75.getItemActions().should.have.numberOfItems.equal(2);
	cell_75_75.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);

	// Horizontally scroll to end
	findWidget("Scrollable Table").scrollToRight(25);
	//Downwards scroll
	findWidget("Scrollable Table").scrollDown(25);

	const cell_100_100 = findWidget("Scrollable Table")
		.getCell(99, 99)
		.rightClick();

	cell_100_100.getItemActions().should.have.numberOfItems.equal(2);
	cell_100_100.getItemActions().should.beEqualTo([
		{ title: "Choice 1", icon: "aimms-quill", state: "active" },
		{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
	]);
});
