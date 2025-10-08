/*!
 * @AIMMS_FILE=models/Bugs/GL2028-DateSortingInWebUI/DateSortingInWebUI.aimms
 */

scenario(
	"GL2028 - Sorting on elements in a calendar in the WebUI Table should be based on date order, not on alphabetic order.",
	() => {
		loadPage("Main Project/home");

		// Perform the increasing sortings
		findWidget("MaartTable").sortColumn(0, "increase");
		findWidget("WinterTable").sortColumn(0, "increase");
		findWidget("SortTable").sortColumn(0, "increase");

		// Check the result
		findWidget("SortTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1, Jul., 20");

		findWidget("SortTable")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("2, Jul., 20");

		findWidget("SortTable")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("3, Jul., 20");

		findWidget("WinterTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1, Jan., 20");

		findWidget("WinterTable")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("2, Jan., 20");

		findWidget("WinterTable")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("3, Jan., 20");

		findWidget("MaartTable")
			.getCell(3, 0)
			.getValue()
			.should.be.equal("22, Feb., 20");

		findWidget("MaartTable")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("1, Mar., 20");

		findWidget("MaartTable")
			.getCell(5, 0)
			.getValue()
			.should.be.equal("2, Mar., 20");

		// Perform the decreasing sortings
		findWidget("MaartTable").sortColumn(0, "decrease");
		findWidget("WinterTable").sortColumn(0, "decrease");
		findWidget("SortTable").sortColumn(0, "decrease");

		// Check the result
		findWidget("SortTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("31, Aug., 20");

		findWidget("SortTable")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("30, Aug., 20");

		findWidget("SortTable")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("29, Aug., 20");

		findWidget("WinterTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("28, Apr., 20");

		findWidget("WinterTable")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("27, Apr., 20");

		findWidget("WinterTable")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("26, Apr., 20");

		findWidget("MaartTable")
			.getCell(3, 0)
			.getValue()
			.should.be.equal("28, Mar., 20");

		findWidget("MaartTable")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("27, Mar., 20");

		findWidget("MaartTable")
			.getCell(32, 0)
			.getValue()
			.should.be.equal("17, Feb., 20");
	}
);
