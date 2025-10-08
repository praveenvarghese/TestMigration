/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario(
	"Check whether the header sorting sorts an index based on a subset of integers OK (as in: in numerical order)",
	() => {
		loadPage("Main Project/home/MischaTestPage");

		// Sort a column header increasing/decreasing/default and check the resulting sorting
		findWidget("FourDimTable").sortColumnHeader(0, 2, "increase"); // 1,1 origineel

		findWidget("FourDimTable")
			.getColHeaderCells(0, 0, 7)
			.should.beEqualTo(["1", "1", "1", "2", "2", "2", "3", "3"]);

		findWidget("FourDimTable").sortColumnHeader(0, 2, "decrease");

		findWidget("FourDimTable")
			.getColHeaderCells(0, 0, 7)
			.should.beEqualTo(["11", "11", "11", "10", "10", "10", "9", "9"]);

		findWidget("FourDimTable").sortColumnHeader(0, 2, "default");

		findWidget("FourDimTable")
			.getColHeaderCells(0, 0, 7)
			.should.beEqualTo(["1", "1", "1", "2", "2", "2", "3", "3"]);
	}
);
