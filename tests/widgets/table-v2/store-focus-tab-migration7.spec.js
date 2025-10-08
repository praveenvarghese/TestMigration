/*!
 * @AIMMS_FILE=models/StoreFocusMigration/StoreFocusMigration.aimms
 */

scenario("Explore some TableV1->V2 and vv scenarios", () => {
	// Switch the Table V2 option off (to get back to Table V1, in order to simulate the migration later by switching it back on)
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

	// Switch back to V2
	loadPage("Main Project/home?table-v2=true&_aimms_only_persistence.write=true");

	findWidget("IslandTable")
		.openIndexOptionEditor()
		.modifyIndices([
			{
				entry: 1,
				index: "ei",
				value: "HetTweedeEiland",
			},
			{
				entry: 2,
				index: "la",
				value: "HetTweedeLand",
			},
		]);

	// And check the effect on the Table V1
	loadPage("Main Project/home?table-v2=false&_aimms_only_persistence.write=true");

	findWidget("IslandTable")
		.openStoreFocusOptionEditor()
		.getStoreFocusOptionsInfo()
		.should.eql([
			{ Name: "<IDENTIFIER-SET>", Value: "DeIdentifier", Index: 0 },
			{ Name: "EI", Value: "HetTweedeEiland", Index: 1 },
			{ Name: "LA", Value: "HetTweedeLand", Index: 2 },
		]);
});
