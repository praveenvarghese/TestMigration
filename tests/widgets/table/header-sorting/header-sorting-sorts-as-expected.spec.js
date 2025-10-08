/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario("Check whether the header sorting indeed displays the headers sorted as expected", () => {
	loadPage("Main Project/home/MischaTestPage");

	// Sort a column header increasing/decreasing/default and check the resulting sorting
	findWidget("FourDimTable").sortColumnHeader(1, 2, "increase");

	findWidget("FourDimTable")
		.getColHeaderCells(1, 0, 32)
		.should.beEqualTo([
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
		]);

	findWidget("FourDimTable").sortColumnHeader(1, 2, "decrease");

	findWidget("FourDimTable")
		.getColHeaderCells(1, 0, 32)
		.should.beEqualTo([
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Mar",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Jan",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
			"Feb",
		]);

	findWidget("FourDimTable").sortColumnHeader(1, 2, "default");

	findWidget("FourDimTable")
		.getColHeaderCells(1, 0, 9)
		.should.beEqualTo(["Jan", "Feb", "Mar", "Jan", "Feb", "Mar", "Jan", "Feb", "Mar", "Jan"]);

	// Sort a row header increasing/decreasing/default and check the resulting sorting
	findWidget("FourDimTable").sortRowHeader(2, 2, "increase");

	findWidget("FourDimTable")
		.getRowHeaderCells(2, 0, 14)
		.should.beEqualTo([
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
			"Austria",
		]);

	findWidget("FourDimTable").sortRowHeader(2, 2, "decrease");
	findWidget("FourDimTable")
		.getRowHeaderCells(2, 0, 14)
		.should.beEqualTo([
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
			"United Kingdom",
		]);

	findWidget("FourDimTable").sortRowHeader(2, 2, "default");

	findWidget("FourDimTable")
		.getRowHeaderCells(2, 0, 14)
		.should.beEqualTo([
			"Norway",
			"Denmark",
			"Belgium",
			"Sweden",
			"France",
			"Netherlands",
			"Finland",
			"Germany",
			"Austria",
			"Ireland",
			"Italy",
			"United Kingdom",
			"Spain",
			"Greece",
			"Portugal",
		]);
});
