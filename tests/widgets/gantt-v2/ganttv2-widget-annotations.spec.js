/*!
 * @AIMMS_FILE=models/GanttAnnotations/GanttAnnotations.aimms
 */

scenario(
	"Make sure the expected annotations are on a Gantt Chart V2 with various pivotings.",
	() => {
		loadPage("Main Project/GanttV2Page?_aimms_only_gantt_chart_v2=1");

		findWidget("V2")
			.getJobAnnotations("7", "(d2, 688)")
			.should.include.something.like([
				"annotation-Drivers",
				"annotation-Ord2",
				"annotation-Mod7Ord2",
				"annotation-Mod11Ord2",
				"annotation-Mod16Ord2",
				"annotation-Mod19Ord2",
				"annotation-d2",
				"annotation-Jobs",
				"annotation-688",
				"annotation-ineedcolour",
				"flag-displayDomain",
			]);

		findWidget("V2")
			.getJobAnnotations("14", "(d2, 716)")
			.should.include.something.like([
				"annotation-Drivers",
				"annotation-Ord2",
				"annotation-Mod7Ord2",
				"annotation-Mod11Ord2",
				"annotation-Mod16Ord2",
				"annotation-Mod19Ord2",
				"annotation-d2",
				"annotation-Jobs",
				"annotation-716",
				"annotation-ineedcolour",
				"annotation-blauw", // This one is different compared to the model annotations of the previous one.
				"flag-displayDomain",
			]);

		// Re-pivot the indexes and see if the expected effect is there on the annotations.
		findWidget("V2")
			.dragIndex("d")
			.dropIn("resources");

		findWidget("V2")
			.getJobAnnotations("(7, d2)", "688")
			.should.include.something.like([
				"annotation-Jobs",
				"annotation-Ord688",
				"annotation-Mod7Ord2",
				"annotation-Mod11Ord6",
				"annotation-Mod16Ord16",
				"annotation-Mod19Ord4",
				"annotation-688",
				"annotation-ineedcolour",
				"flag-displayDomain",
			]);

		findWidget("V2")
			.getJobAnnotations("(14, d2)", "716")
			.should.include.something.like([
				"annotation-Jobs",
				"annotation-Ord716",
				"annotation-Mod7Ord2",
				"annotation-Mod11Ord1",
				"annotation-Mod16Ord12",
				"annotation-Mod19Ord13",
				"annotation-716",
				"annotation-ineedcolour",
				"annotation-blauw", // Again, the difference
				"flag-displayDomain",
			]);

		findWidget("V2")
			.dragIndex("d")
			.dropIn("totals");

		findWidget("V2")
			.getJobAnnotations("7", "688")
			.should.include.something.like([
				"annotation-Jobs",
				"annotation-Ord688",
				"annotation-Mod7Ord2",
				"annotation-Mod11Ord6",
				"annotation-Mod16Ord16",
				"annotation-Mod19Ord4",
				"annotation-688",
				"flag-readOnly",
				"flag-displayDomain",
			]);

		findWidget("V2")
			.getJobAnnotations("14", "716")
			.should.include.something.like([
				"annotation-Jobs",
				"annotation-Ord716",
				"annotation-Mod7Ord2",
				"annotation-Mod11Ord1",
				"annotation-Mod16Ord12",
				"annotation-Mod19Ord13",
				"annotation-716",
				"flag-readOnly",
				"flag-displayDomain",
			]);
	}
);
