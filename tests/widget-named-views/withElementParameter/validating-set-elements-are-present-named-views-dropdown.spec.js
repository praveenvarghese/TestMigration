/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Validate the named view dropdown list when already one named view is created", () => {
	loadPage("Main Project/Home");

	findWidget("TransportNetworkMap")
		.openNamedViewsOptionEditor()
		.setOptions([
			{
				name: "Default View",
				value: "ep_NamedViews2",
			},
		]);

	findWidget("TransportNetworkMap")
		.openNamedViewsOptionEditor()
		.getNamedViewDropdownList(0)
		.should.eql([["Named View 3", "Named View 2", "Named View 1"]]);

	findWidget("TransportNetworkMap")
		.openNamedViewsOptionEditor()
		.editView(0, {
			value: "Named View 1",
			type: "ENUM",
		});

	findWidget("TransportNetworkMap")
		.openNamedViewsOptionEditor()
		.addNewListEntrySet()
		.getNamedViewDropdownList(1)
		.should.eql([["Named View 3", "Named View 2"]]);
});
