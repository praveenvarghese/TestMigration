/*!
 * @AIMMS_FILE=models/HumanAnatomy/HumanAnatomy.aimms
 */

scenario("Demo", () => {
	loadPage("Main Project/home");

	findWidget("Output")
		.getUrls()
		.should.have.lengthOf(3);

	findWidget("Output")
		.getSlicingOptionEditor()
		.clearSlices(["ImageUris"])
		.setSlices({
			identifier: "ImageUris",
			slice: [
				{
					index: "as",
					type: "fixed-element",
					value: "Skeletal System",
				},
				{
					index: "bp",
					type: "subset",
					value: "sbp",
				},
			],
		});

	findWidget("Output")
		.getUrls()
		.should.have.lengthOf(3);

	findWidget("Output")
		.getSlicingOptionEditor()
		.clearSlices(["ImageUris"])
		.setSlices({
			identifier: "ImageUris",
			slice: [
				{
					index: "bp",
					type: "subset",
					value: "sbp",
				},
				{
					index: "as",
					type: "element-parameter",
					value: "AnAnatomySystem",
				},
			],
		});

	findWidget("Output")
		.getUrls()
		.should.have.lengthOf(3);
});
