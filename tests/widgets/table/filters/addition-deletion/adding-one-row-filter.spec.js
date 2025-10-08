/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Table with single row filter", () => {
	loadPage("Main Project/home?_aimms_only_data_filter=true");

	findWidget("DailyPassengers")
		.getTableFilterButton()
		.should.be.eql("None");

	let expected_values = [
		["", "84", "140", "135", "150", "42", "56"],
		["", "300", "260", "130", "90", "100", "50"],
		["84", "", "56", "105", "98", "46", "63"],
		["275", "", "740", "200", "150", "300", "63"],
		["140", "56", "", "105", "98", "119", "154"],
		["170", "820", "", "240", "190", "80", "45"],
		["135", "105", "105", "", "39", "147", "182"],
		["80", "240", "430", "", "350", "70", "30"],
		["150", "98", "98", "39", "", "126", "172"],
		["60", "170", "380", "310", "", "55", "15"],
		["42", "46", "119", "147", "126", "", "35"],
		["98", "160", "140", "80", "25", "", "40"],
		["56", "63", "154", "182", "172", "35", ""],
		["30", "50", "40", "20", "12", "75", ""],
	];

	findWidget("DailyPassengers")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("DailyPassengers")
		.getRowHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("DailyPassengers").getRowFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Isla de La Palma - TicketPrice",
				rule: "is equal to (=)",
				value: "",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("DailyPassengers")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("DailyPassengers")
		.getRowHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("DailyPassengers").getRowFilter(0);

	getFilter().addFilter({ rule: "is greater than (>)", value: "100" });

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Isla de La Palma - TicketPrice",
				rule: "is greater than (>)",
				value: "100",
				//status: "active",
			},
		]);

	findDialog()
		.findButton("Apply and Close")
		.click();

	findWidget("DailyPassengers")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("DailyPassengers")
		.getRowHeaderCell(1, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("DailyPassengers")
		.getRowHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	expected_values = [
		["140", "135", "150"],
		["260", "130", "90"],
		["56", "105", "98"],
		["740", "200", "150"],
		["", "105", "98"],
		["", "240", "190"],
		["105", "", "39"],
		["430", "", "350"],
		["98", "39", ""],
		["380", "310", ""],
		["119", "147", "126"],
		["140", "80", "25"],
		["154", "182", "172"],
		["40", "20", "12"],
	];

	findWidget("DailyPassengers")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	openAppManager().navigateToPage("Main Project/Second Page");

	getAppManager().navigateToPage("Main Project/home");

	closeAppManager();

	findWidget("DailyPassengers")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("DailyPassengers").mouseHover();

	findWidget("DailyPassengers")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("DailyPassengers")
		.getRowHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("DailyPassengers")
		.getRowHeaderCell(1, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("DailyPassengers").getRowFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Isla de La Palma - TicketPrice",
				rule: "is greater than (>)",
				value: "100",
				//status: "active",
			},
			{
				type: "row",
				field: "Isla de La Palma - TicketPrice",
				rule: "is equal to (=)",
				value: "",
			},
		]);
});
