/*!
 * @AIMMS_FILE=models/Infinity Model/Infinity Model.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Assert multi content scalar data by updating,removing and adding identifier", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedIdentifierSet", value: "UnitTransportCost" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
		]);

	findWidget("StoreFocus")
		.getContentsOptionEditor()
		.MoveDownTheIdentifier("Bar_SelectedCustomer");

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedIdentifierSet", value: "UnitTransportCost" },
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
		]);

	pageRefresh();

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedIdentifierSet", value: "UnitTransportCost" },
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
		]);

	findWidget("StoreFocus")
		.getContentsOptionEditor()
		.MoveUpTheIdentifier("Bar_SelectedCustomer");

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedIdentifierSet", value: "UnitTransportCost" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
		]);

	pageRefresh();

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedIdentifierSet", value: "UnitTransportCost" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
		]);

	findWidget("StoreFocus")
		.getContentsOptionEditor()
		.removeSpecificItemFromCurrentContents("Bar_SelectedIdentifierSet");

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
		]);

	pageRefresh();

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
		]);

	findWidget("StoreFocus")
		.getContentsOptionEditor()
		.addItemFromAvailableContents("Bar_SelectedIdentifierSet");

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
			{ label: "Bar_SelectedIdentifierSet", value: "UnitTransportCost" },
		]);

	pageRefresh();

	findWidget("StoreFocus")
		.getAllMultiContentScalarData()
		.should.be.shallowDeepEqual([
			{ label: "Bar_SelectedCustomer", value: "Amsterdam" },
			{ label: "Bar_SelectedPlant", value: "Haarlem" },
			{ label: "Bar_SelectedIdentifierSet", value: "UnitTransportCost" },
		]);
});
