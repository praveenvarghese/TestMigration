/*!
 * @AIMMS_FILE=models/StoreFocusMigration/StoreFocusMigration.aimms
 */

scenario("Explore some TableV1->V2 and vv scenarios", () => {
	// Switch the Table V2 option off (to get back to Table V1, in order to simulate the migration later by switching it back on)
	loadPage("Main Project/home?table-v2=false&_aimms_only_persistence.write=true");

	// Initialize the Store Focus settings, but leave out one of the three
	findWidget("IslandTable")
		.openStoreFocusOptionEditor()
		.setStoreFocusSetting({
			name: "<IDENTIFIER-SET>",
			value: "DeIdentifier",
			type: "identifier",
		})
		.setStoreFocusSetting({
			name: "La",
			value: "HetLand",
			type: "identifier",
		});

	// Switch back to V2
	loadPage("Main Project/home?table-v2=true&_aimms_only_persistence.write=true");

	// Verify that the settings have been migrated as expected
	findWidget("IslandTable")
		.openIndexOptionEditor()
		.getIndexOption(0, "Store Focus")
		.should.eql("DeIdentifier");

	findWidget("IslandTable")
		.openIndexOptionEditor()
		.getIndexOption(1, "Store Focus")
		.should.eql("HetLand");

	findWidget("IslandTable")
		.openIndexOptionEditor()
		.getNumberOfListEntrySets()
		.should.eql(2);
});
