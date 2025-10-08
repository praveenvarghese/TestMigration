/*!
 * @AIMMS_FILE=models/Slider/Slider.aimms
 * @HARDWARE_SHARE=large
 */

//

scenario("Create a slider", () => {
	loadPage("Main Project/create-slider");

	createWidget("slider", ["SliderValue"], "new-slider");

	findWidget("new-slider").should.be.a.widgetOfType("slider");

	findWidget("new-slider")
		.getMessage()
		.should.be.equal("Please add a minimum in the widget options");

	findWidget("new-slider")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql([
			{
				Name: "Templates",
				Tooltip: "Templates",
				IsHighlighted: false,
				Icon: "0xe533",
				Color: colors.colorPrimitiveGrey80.rgbWithWhitespace,
			},
			{
				Name: "Named Views",
				Tooltip: "Named Views",
				IsHighlighted: false,
				Icon: "0xe2e5",
				Color: colors.colorPrimitiveGrey80.rgbWithWhitespace,
			},
			{
				Name: "Contents",
				Tooltip: "Contents",
				IsHighlighted: true,
				Icon: "0xe097",
				Color: colors.colorPrimitiveAccentBlue100.rgbWithWhitespace,
			},
			{
				Name: "Change Type",
				Tooltip: "Change Type",
				IsHighlighted: false,
				Icon: "0xe3a8",
				Color: colors.colorPrimitiveGrey80.rgbWithWhitespace,
			},
			{
				Name: "Totals",
				Tooltip: "Totals",
				IsHighlighted: false,
				Icon: "0xe459",
				Color: colors.colorPrimitiveGrey80.rgbWithWhitespace,
			},
			{
				Name: "Widget Extensions",
				Tooltip: "Widget Extensions",
				IsHighlighted: false,
				Icon: "0xe30e",
				Color: colors.colorPrimitiveGrey80.rgbWithWhitespace,
			},
			{
				Name: "Miscellaneous",
				Tooltip: "Miscellaneous",
				IsHighlighted: false,
				Icon: "0xe900",
				Color: colors.colorPrimitiveGrey80.rgbWithWhitespace,
			},
			{
				Name: "Advanced",
				Tooltip: "Advanced",
				IsHighlighted: false,
				Icon: "0xe1d9",
				Color: colors.colorPrimitiveGrey80.rgbWithWhitespace,
			},
		]);
});
