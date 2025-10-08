/*!
 * @AIMMS_FILE=models/StoreFocusMigration/StoreFocusMigration.aimms
 */

scenario("Explore some TableV2->V1 scenarios", () => {
	// Switch the Table V2 option off
	loadPage("Main Project/home?table-v2=false&_aimms_only_persistence.write=true");

	// Initialize the Store Focus settings
	findWidget("IslandTable")
		.openStoreFocusOptionEditor()
		.setStoreFocusSetting({
			name: "<IDENTIFIER-SET>",
			value: "DeIdentifier",
			type: "identifier",
		})
		.setStoreFocusSetting({
			name: "Ei",
			value: "HetEiland",
			type: "identifier",
		})
		.setStoreFocusSetting({
			name: "La",
			value: "HetLand",
			type: "identifier",
		});

	// Switch to V2
	loadPage("Main Project/home?table-v2=true&_aimms_only_persistence.write=true");

	// Delete two of the indices
	findWidget("IslandTable")
		.openIndexOptionEditor()
		.deleteIndex(2);

	findWidget("IslandTable")
		.openIndexOptionEditor()
		.deleteIndex(1);

	// Verify that the settings have been migrated as expected
	loadPage("Main Project/home?table-v2=false&_aimms_only_persistence.write=true");
	findWidget("IslandTable")
		.openStoreFocusOptionEditor()
		.getStoreFocusOptionsInfo()
		.should.eql([
			{ Name: "<IDENTIFIER-SET>", Value: "DeIdentifier", Index: 0 },
			{ Name: "EI", Value: "", Index: 1 },
			{ Name: "LA", Value: "", Index: 2 },
		]);
});
