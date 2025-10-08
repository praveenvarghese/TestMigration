/*!
 * @AIMMS_FILE=models/Slider/Slider.aimms
 */

scenario("Set slider options from AIMMS", () => {
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
			value: "SliderTitle",
			valueType: "identifier",
		});

	findWidget("my-empty-slider")
		.getTitle()
		.should.be.equal("Title from AIMMS");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("min")
		.setValue({
			value: "SliderMin",
			valueType: "identifier",
		});

	findWidget("my-empty-slider")
		.getMessage()
		.should.be.equal("Please add a maximum in the widget options");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("max")
		.setValue({
			value: "SliderMax",
			valueType: "identifier",
		});

	findWidget("my-empty-slider")
		.getMessage()
		.should.be.equal("Please add a step size in the widget options");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("step")
		.setValue({
			value: "SliderStep",
			valueType: "identifier",
		});

	findWidget("my-empty-slider")
		.getValue()
		.should.be.equal("2.00");

	findWidget("my-empty-slider")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Decimal Places")
		.setValue({
			value: "SliderDecimalPoints",
			valueType: "identifier",
		});

	findWidget("my-empty-slider")
		.getValue()
		.should.be.equal("2.00000");
});
