/*!
 * @AIMMS_FILE=models/Slider/Slider.aimms
 */

scenario("Set slider options from literal", () => {
	loadPage("Main Project/empty-slider");

	findWidget("my-empty-slider").should.be.a.widgetOfType("slider");

	findWidget("my-empty-slider")
		.getMessage()
		.should.be.equal("Empty Slider");

	findWidget("my-empty-slider")
		.getContentsOptionEditor()
		.setOptions([
			{
				name: "contents",
				value: "SliderValue",
			},
		]);

	findWidget("my-empty-slider")
		.getMessage()
		.should.be.equal("Please add a minimum in the widget options");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Title")
		.setValue({
			value: "Title from literal",
			valueType: "LITERAL",
			optionEditorType: "VALUE",
		});

	findWidget("my-empty-slider")
		.getTitle()
		.should.be.equal("Title from literal");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("min")
		.setValue({ value: "1", valueType: "LITERAL", optionEditorType: "VALUE" });

	findWidget("my-empty-slider")
		.getMessage()
		.should.be.equal("Please add a maximum in the widget options");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("max")
		.setValue({
			value: "100",
			valueType: "LITERAL",
			optionEditorType: "VALUE",
		});

	findWidget("my-empty-slider")
		.getMessage()
		.should.be.equal("Please add a step size in the widget options");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("step")
		.setValue({
			value: "1",
			valueType: "LITERAL",
			optionEditorType: "VALUE",
		});

	findWidget("my-empty-slider")
		.getValue()
		.should.be.equal("2.00");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "3",
		});

	findWidget("my-empty-slider")
		.getValue()
		.should.be.equal("2.000");
});
