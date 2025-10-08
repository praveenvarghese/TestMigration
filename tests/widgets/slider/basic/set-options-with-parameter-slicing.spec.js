/*!
 * @AIMMS_FILE=models/Slider/Slider.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Set slider options from AIMMS", () => {
	loadPage("Main Project/empty-slider");

	findWidget("slider-pram-slicing").should.be.a.widgetOfType("slider");

	findWidget("slider-pram-slicing")
		.getMessage()
		.should.be.equal("Empty Slider");

	findWidget("slider-pram-slicing")
		.getContentsOptionEditor()
		.setOptions([
			{
				name: "contents",
				value: "SliderPram",
				sliceInfo: [
					{
						index: "s",
						type: "Fixed-Element",
						value: "Item-1",
					},
				],
			},
		]);

	findWidget("slider-pram-slicing")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Title")
		.setValue({
			value: "SliderTitle",
			valueType: "identifier",
		});

	findWidget("slider-pram-slicing")
		.openMiscellaneousOptionEditor()
		.getMiscOption("min")
		.setValue({
			value: "SliderMin",
			valueType: "identifier",
		});

	findWidget("slider-pram-slicing")
		.openMiscellaneousOptionEditor()
		.getMiscOption("max")
		.setValue({
			value: "SliderMax",
			valueType: "identifier",
		});

	findWidget("slider-pram-slicing")
		.openMiscellaneousOptionEditor()
		.getMiscOption("step")
		.setValue({
			value: "SliderStep",
			valueType: "identifier",
		});

	findWidget("slider-pram-slicing").isSliderDisabled().should.be.false;

	findWidget("slider-pram-slicing").moveSlider(SPECIAL_KEYS.arrow_right);

	findWidget("slider-pram-slicing")
		.getValue()
		.should.be.equal("51.00");
});
