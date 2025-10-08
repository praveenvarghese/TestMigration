/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Right click on a table cell. Assert action on click of item action.", () => {
	loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

	findWidget("Dynamic Item Action")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.have.numberOfItems.equal(4);
	findWidget("Dynamic Item Action")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Choice 1", icon: "aimms-quill", state: "active" },
			{ title: "Choice 2", icon: "aimms-quill2", state: "inactive" },
			{ title: "Choice 3", icon: "aimms-quill3", state: "active" },
			{ title: "Choice 4", icon: "aimms-quill4", state: "active" },
		]);

	findWidget("Schedule ItemAction").click();

	findWidget("Dynamic Item Action")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.have.numberOfItems.equal(4);

	findWidget("Dynamic Item Action")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.have.numberOfItems.equal(3);
	findWidget("Dynamic Item Action")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Choice 1", icon: "aimms-quill", state: "inactive" },
			{ title: "Choice 3", icon: "aimms-quill3", state: "inactive" },
			{ title: "Choice 4", icon: "aimms-quill4", state: "active" },
		]);
});
