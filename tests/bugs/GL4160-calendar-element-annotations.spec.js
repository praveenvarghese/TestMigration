/*!
 * @AIMMS_FILE=models/Bugs/GL4160-CalendarElementAnnotations/CalendarElementText.aimms
 */
scenario(
	"GL4160 - Check for element annotations on element parameters in calendars and a check for conventions.",
	() => {
		loadPage("Main Project/home");

		// An element in a calendar, without any annotation in place. It should have the format of the calendar itself.
		findWidget("tb_test")
			.getCell(1, 1)
			.getValue()
			.should.eql("2021-07-08");

		// An element in a calenar, with an annotation that glues "ElementText-" at the front of the element value.
		findWidget("tb_go")
			.getCell(1, 0)
			.getValue()
			.should.eql("ElementText-2021-07-07");

		// Similar situation, but now with an element in a 'normal' set (i.e. a non-calendar set)
		findWidget("tb_set")
			.getCell(1, 0)
			.getValue()
			.should.eql("Sir Jack");

		// Now run the same tests, but first set a webui::ApplicationConvention by clicking a button. This should only affect the element parameter displayed in the first table.
		findWidget("SetButton").click();

		// An element in a calendar, without any annotation in place. It should have the format of the calendar itself.
		findWidget("tb_test")
			.getCell(1, 1)
			.getValue()
			.should.eql("08/07/2021"); // The format changes; it uses slashes now and the year is moved to the end.

		// An element in a calenar, with an annotation that glues "ElementText-" at the front of the element value.
		findWidget("tb_go")
			.getCell(1, 0)
			.getValue()
			.should.eql("ElementText-2021-07-07");

		// Similar situation, but now with an element in a 'normal' set (i.e. a non-calendar set)
		findWidget("tb_set")
			.getCell(1, 0)
			.getValue()
			.should.eql("Sir Jack");

		// Clear the convention again, and verify that the situation is back to where it was at the beginning.
		findWidget("ClearButton").click();

		// An element in a calendar, without any annotation in place. It should have the format of the calendar itself.
		findWidget("tb_test")
			.getCell(1, 1)
			.getValue()
			.should.eql("2021-07-08"); // The format changes; it uses slashes now.

		// An element in a calenar, with an annotation that glues "ElementText-" at the front of the element value.
		findWidget("tb_go")
			.getCell(1, 0)
			.getValue()
			.should.eql("ElementText-2021-07-07");

		// Similar situation, but now with an element in a 'normal' set (i.e. a non-calendar set)
		findWidget("tb_set")
			.getCell(1, 0)
			.getValue()
			.should.eql("Sir Jack");
	}
);
