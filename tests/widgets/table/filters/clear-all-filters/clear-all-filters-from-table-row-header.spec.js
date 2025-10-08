/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Validating clear all filters functionality from row header", () => {
	loadPage("Main Project/TablePage?_aimms_only_data_filter=true");

	findWidget("Yield Table")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("Yield Table")
		.getRowHeaderCell(0, 3)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("Yield Table")
		.getRowHeaderCell(1, 3)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("Yield Table")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("Yield Table")
		.getColHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("Yield Table")
		.getColHeaderCell(0, 2)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("Yield Table")
		.getColHeaderCell(0, 3)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	let expected_values = [
		["832.0 ton", "690.0 ton", "768.0 ton", "962.0 ton", "895.0 ton", "139.0 ton"],
		["394.0 ton", "98.0 ton", "768.0 ton", "374.0 ton", "778.0 ton", "943.0 ton"],
		["612.0 ton", "284.0 ton", "691.0 ton", "655.0 ton", "144.0 ton", "684.0 ton"],
		["681.0 ton", "380.0 ton", "678.0 ton", "804.0 ton", "947.0 ton", "156.0 ton"],
		["336.0 ton", "87.0 ton", "993.0 ton", "884.0 ton", "733.0 ton", "993.0 ton"],
		["817.0 ton", "293.0 ton", "279.0 ton", "820.0 ton", "560.0 ton", "329.0 ton"],
		["855.0 ton", "303.0 ton", "816.0 ton", "345.0 ton", "760.0 ton", "958.0 ton"],
		["419.0 ton", "242.0 ton", "89.0 ton", "304.0 ton", "342.0 ton", "77.0 ton"],
		["339.0 ton", "846.0 ton", "630.0 ton", "582.0 ton", "673.0 ton", "84.0 ton"],
		["753.0 ton", "747.0 ton", "962.0 ton", "759.0 ton", "259.0 ton", "239.0 ton"],
		["839.0 ton", "126.0 ton", "321.0 ton", "791.0 ton", "288.0 ton", "54.0 ton"],
		["541.0 ton", "366.0 ton", "777.0 ton", "559.0 ton", "140.0 ton", "538.0 ton"],
		["378.0 ton", "544.0 ton", "477.0 ton", "902.0 ton", "120.0 ton", "18.0 ton"],
		["715.0 ton", "732.0 ton", "732.0 ton", "284.0 ton", "215.0 ton", "366.0 ton"],
		["639.0 ton", "656.0 ton", "528.0 ton", "672.0 ton", "623.0 ton", "894.0 ton"],
	];

	findWidget("Yield Table")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	findWidget("Yield Table").getRowFilter(0);

	getFilter()
		.getFiltersData()
		.should.beEqualTo([
			{
				type: "row",
				field: "Winter - green - Cayenne - North",
				rule: "is less than (<)",
				value: "1000",
				//status: "active",
			},
			{
				type: "row",
				field: "Winter - green - Cayenne - South",
				rule: "is less than (<)",
				value: "1000",
				//status: "active",
			},
			{
				type: "column",
				field: "2010",
				rule: "is greater than (>)",
				value: "300",
				//status: "active",
			},
			{
				type: "column",
				field: "2010",
				rule: "is not equal to (!=)",
				value: "100",
				//status: "active",
			},
			{
				type: "column",
				field: "2011",
				rule: "is greater than (>)",
				value: "84",
				//status: "active",
			},
			{
				type: "column",
				field: "2011",
				rule: "is greater than (>)",
				value: "30",
				//status: "active",
			},
			{
				type: "column",
				field: "2012",
				rule: "is greater than (>)",
				value: "30",
				//status: "active",
			},
		]);

	getFilter().clearAllFilters();

	findWidget("Yield Table")
		.getTableFilterButton()
		.should.be.eql("None");

	findWidget("Yield Table")
		.getRowHeaderCell(0, 3)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("Yield Table")
		.getRowHeaderCell(1, 3)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("Yield Table")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("Yield Table")
		.getColHeaderCell(0, 1)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("Yield Table")
		.getColHeaderCell(0, 2)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	findWidget("Yield Table")
		.getColHeaderCell(0, 3)
		.hasFlags(["filtered"])
		.should.be.equal(false);

	expected_values = [
		["832.0 ton", "690.0 ton", "768.0 ton", "962.0 ton", "895.0 ton", "139.0 ton"],
		["70.0 ton", "817.0 ton", "87.0 ton", "960.0 ton", "609.0 ton", "624.0 ton"],
		["253.0 ton", "499.0 ton", "269.0 ton", "232.0 ton", "832.0 ton", "514.0 ton"],
		["394.0 ton", "98.0 ton", "768.0 ton", "374.0 ton", "778.0 ton", "943.0 ton"],
		["612.0 ton", "284.0 ton", "691.0 ton", "655.0 ton", "144.0 ton", "684.0 ton"],
		["268.0 ton", "709.0 ton", "969.0 ton", "487.0 ton", "69.0 ton", "114.0 ton"],
		["681.0 ton", "380.0 ton", "678.0 ton", "804.0 ton", "947.0 ton", "156.0 ton"],
		["336.0 ton", "87.0 ton", "993.0 ton", "884.0 ton", "733.0 ton", "993.0 ton"],
		["817.0 ton", "293.0 ton", "279.0 ton", "820.0 ton", "560.0 ton", "329.0 ton"],
		["855.0 ton", "303.0 ton", "816.0 ton", "345.0 ton", "760.0 ton", "958.0 ton"],
		["419.0 ton", "242.0 ton", "89.0 ton", "304.0 ton", "342.0 ton", "77.0 ton"],
		["339.0 ton", "846.0 ton", "630.0 ton", "582.0 ton", "673.0 ton", "84.0 ton"],
		["37.0 ton", "953.0 ton", "633.0 ton", "164.0 ton", "373.0 ton", "284.0 ton"],
		["753.0 ton", "747.0 ton", "962.0 ton", "759.0 ton", "259.0 ton", "239.0 ton"],
		["839.0 ton", "126.0 ton", "321.0 ton", "791.0 ton", "288.0 ton", "54.0 ton"],
	];

	findWidget("Yield Table")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
