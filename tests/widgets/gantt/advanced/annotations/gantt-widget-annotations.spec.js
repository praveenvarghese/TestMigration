/*!
 * @AIMMS_FILE=models/HoursRegistration/HoursRegistration.aimms
 */

scenario(
	"Make sure the expected annotations are on a Gantt Chart with 2 indices pivoted to the resource area.",
	() => {
		loadPage("Main Project/Absentee Overview");

		//waitUntilDataLoadedOnWidget("Absentee Overview", 20000);

		findWidget("Absentee Overview")
			.findResource(["Linlin Ma"])
			.findJob("18-07-2025")
			.getAnnotations()
			.should.include.something.like([
				"job-Vacation-Fri-18-07-2025-task-Linlin-Ma",
				"resource-Linlin-Ma",
				"annotation-AllSubProjects",
				"annotation-Ord212",
				"annotation-Mod7Ord2",
				"annotation-Mod11Ord3",
				"annotation-Mod16Ord4",
				"annotation-Mod19Ord3",
				"annotation-DaySpan",
				"annotation-18-07-2025",
				"flag-readOnly",
			]);
	}
);
