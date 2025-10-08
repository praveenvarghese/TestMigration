/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario(
	"Gantt Chart should have resources and jobs and should show message if viewport is small",
	() => {
		loadPage("Main Project/resizing");

		findWidget("GanttWithoutSlicing")
			.getResources()
			.should.have.numberOfItems(30);

		findWidget("GanttWithoutSlicing")
			.findResource(["Lots-1", "Master-1", "1"])
			.getJobs()
			.should.have.numberOfItems(1);

		openWidgetManager().setWidgetSize("GanttWithoutSlicing", { width: 2, height: 2 });

		findWidget("GanttWithoutSlicing")
			.getEmptyMessage()
			.should.be.equal(
				"Empty ganttchartInsufficient resolution to depict your chart. Please pivot, increase your widget size, or reduce your data."
			);

		openWidgetManager().setWidgetSize("GanttWithoutSlicing", { width: 5, height: 2 });

		findWidget("GanttWithoutSlicing")
			.getEmptyMessage()
			.should.be.equal(
				"Empty ganttchartInsufficient resolution to depict your chart. Please pivot, increase your widget size, or reduce your data."
			);
	}
);
