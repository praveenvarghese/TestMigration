/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario(
	"Check whether the latest sorting always gets priority, be it header sorting or data sorting.",
	() => {
		loadPage("Main Project/home/MischaTestPage");

		// Sort the first row header column on this filtered table
		findWidget("SecondTable").sortRowHeader(2, 1, "increase");
		findWidget("SecondTable")
			.getRowHeaderCells(1, 0, 3)
			.should.beEqualTo(["Finland", "France", "Greece", "Romania"]);

		// Next to this, also check the 'order' of the row data of the first row. This should be unsorted, since the sorting is not on the data itself,
		// but on the row header.
		findWidget("SecondTable")
			.getSelectionValues(0, 0, 3, 0)
			.should.be.shallowDeepEqual([["15.00"], ["10.00"], ["25.00"], ["19.00"]]);

		// Now do a regular sort on the DATA and check the resulting data.
		findWidget("SecondTable").sortColumn(0, "decrease");

		findWidget("SecondTable")
			.getSelectionValues(0, 0, 3, 0)
			.should.be.shallowDeepEqual([["25.00"], ["19.00"], ["15.00"], ["10.00"]]);

		// Next to this, also check the 'order' of the first row header, which should now not be sorted anymore because of the data sorting in the
		// previous action.
		findWidget("SecondTable")
			.getRowHeaderCells(1, 0, 3)
			.should.beEqualTo(["Greece", "Romania", "Finland", "France"]);
	}
);
