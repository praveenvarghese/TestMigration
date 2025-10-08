/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"For a Gantt Chart widget, click on 'Download Image - PNG' button and assert the file name being downloaded.",
	() => {
		loadPage("Main Project/resizing");

		// Set the value of identifier configured as title in Gantt Chart widget
		findWidget("GanttChartWidgetTitle").setValue("Title as 2021Q1$*");

		// Hover the title of the Gantt Chart widget.
		findWidget("GanttWithSlicedData").movePointerToWidget(500, 150);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("GanttWithSlicedData")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename: "Title as 2021Q1$_.png",
			});

		// Reset the value of identifier configured as title in Gantt Chart widget
		findWidget("GanttChartWidgetTitle").setValue(
			"MKG 050684 āāæśṣḍēṭṅṇḥñūṁīōl̥ _- =+ ,< .> ?/ ;: '\" [{}] \\| `~@#$%^&*()"
		);

		// Hover the title of the Gantt Chart widget.
		findWidget("GanttWithSlicedData").movePointerToWidget(500, 150);

		// Click on the "Download Image - PNG" button and assert a file being downloaded
		findWidget("GanttWithSlicedData")
			.mouseHover()
			.getExportToImageButton()
			.click()
			.getDownloadedFile()
			.should.include.something.like({
				filename:
					"MKG 050684 āāæśṣḍēṭṅṇḥñūṁīōl̥ _- =+ ,_ ._ __ ;_ '_ [{}] __ `_@#$%^&_().png",
			});
	}
);
