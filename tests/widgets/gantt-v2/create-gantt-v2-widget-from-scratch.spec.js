/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */

scenario("Create a gantt v2 widget from scratch", () => {
	loadPage("Main Project/CreateNewPage");

	openPageConfigurator()
		.getAddWidgetDialogForArea("Area B")
		.selectType("ganttchart-v2")
		.enterName("newganttchartv2widget")
		.clickAddWidgetButton();

	closePageConfigurator();

	findWidget("newganttchartv2widget")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal(
			"Empty ganttchartPlease specify your contents, a reference time, and a time resolution."
		);

	findWidget("newganttchartv2widget")
		.openGanttchartContentsOptionEditor()
		.setOptions([
			{
				name: "Start",
				value: "StartingMoment",
				valueType: "IDENTIFIER",
				optionEditorType: "IDENTIFIER",
				sliceInfo: null,
			},
		]);

	findWidget("newganttchartv2widget")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal(
			"Empty ganttchartPlease specify your contents, a reference time, and a time resolution."
		);

	findWidget("newganttchartv2widget")
		.openGanttchartContentsOptionEditor()
		.setOptions([
			{
				name: "Duration",
				value: "DurationTime",
				valueType: "IDENTIFIER",
				optionEditorType: "IDENTIFIER",
				sliceInfo: null,
			},
		]);

	findWidget("newganttchartv2widget")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal(
			"Empty ganttchartPlease specify both your reference time and a time resolution."
		);

	findWidget("newganttchartv2widget")
		.openGanttchartSettingsEditor()
		.setOptions([
			{
				name: "Reference time",
				value: "2017-05-17",
				valueType: "LITERAL",
				optionEditorType: "LITERAL",
				sliceInfo: null,
			},
		]);

	findWidget("newganttchartv2widget")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty ganttchartPlease specify a time resolution.");

	findWidget("newganttchartv2widget")
		.openGanttchartSettingsEditor()
		.setOptions([
			{
				name: "Time resolution in (decimal) hours",
				value: "1",
				valueType: "LITERAL",
				optionEditorType: "LITERAL",
				sliceInfo: null,
			},
		]);

	findWidget("newganttchartv2widget")
		.getNoOfJobs()
		.should.be.equal(35);
});
