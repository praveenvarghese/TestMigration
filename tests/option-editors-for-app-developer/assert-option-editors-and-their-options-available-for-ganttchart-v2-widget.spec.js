/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */

scenario("As an app developer, Validate options displayed in Gantt Chart V2", () => {
	loadPage("Main Project/GanttV2Page");

	// Click on Gantt Chart Widget Settings, and assert the info on Option Editor.
	findWidget("FIrstGanttV2")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql(ganttchartV2WidgetOptions());

	// For the Ganttv2 Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("FIrstGanttV2")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "FIrstGanttV2",
			"OptionEditorTab Title": "Contents",
		});

	findWidget("FIrstGanttV2")
		.openGanttchartContentsOptionEditor()
		.getGanttchartContentsOptionsInfo()
		.should.include.something.like([
			{ Name: "Start", Value: "StartingMoment(t, m)", Index: 0 },
			{ Name: "Start Display Domain", Value: "", Index: 1 },
			{ Name: "Duration", Value: "DurationTime(t, m)", Index: 2 },
			{ Name: "Duration Display Domain", Value: "", Index: 3 },
		]);

	// Assert options available on "Widget Extension" option editor and their data
	findWidget("FIrstGanttV2")
		.openWidgetExtensionsOptionEditor()
		.getOptions()
		.should.include.something.like([
			{
				Name: "Widget Actions",
				NewOptionType: true,
				Value: "",
				Index: 0,
			},
		]);

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("FIrstGanttV2")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{
				Name: "Visible",
				NewOptionType: false,
				Value: "",
				Index: 0,
			},
			{
				Name: "Title",
				NewOptionType: true,
				Value: "",
				Index: 1,
			},
		]);

	//Assert options available on Gantt Chart Settings option editor and their data
	findWidget("FIrstGanttV2")
		.openGanttchartSettingsEditor()
		.getNewOptionsDetails()
		.should.include.something.like([
			{ Group: "", Name: "Reference time", Value: "2017-05-17", Index: 0 },
			{ Group: "", Name: "Time resolution in (decimal) hours", Value: "1", Index: 1 },
			{ Group: "Viewport Settings", Name: "Viewport start time", Value: "", Index: 2 },
			{ Group: "Viewport Settings", Name: "Viewport end time", Value: "", Index: 3 },
		]);
});
