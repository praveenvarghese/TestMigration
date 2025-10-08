/*!
 * @AIMMS_FILE=models/simpleMapTests/simpleMapTests.aimms
 */

scenario("Verifying Arc Label new option fetaure", () => {
	loadPage("Main Project/home");

	findWidget("TestLabels")
		.getArcSet(0)
		.getArc("Karnataka", "Tamil Nadu")
		.getArcLabel()
		.getArcLabelContent()
		.should.equal("Hundred");

	findWidget("TestLabels")
		.getArcSet(0)
		.getArc("Tripura", "Telangana")
		.getArcLabel()
		.getArcLabelContent()
		.should.equal("Fifty");

	findWidget("TestLabels")
		.getArcSet(1)
		.getArc("Karnataka", "Telangana")
		.getArcLabel()
		.getArcLabelContent()
		.should.equal("50.00");

	//Hide label behaviour
	findWidget("enableHideLabels").setValue(true);

	findWidget("TestLabels").isHideLabelOptionApplied("0").should.be.true;

	findWidget("enableHideLabels").setValue(false);

	findWidget("TestLabels")
		.getArcSet(0)
		.getArc("Karnataka", "Tamil Nadu")
		.getArcLabel()
		.getArcLabelContent()
		.should.equal("Hundred");

	//Remove the arc label identifier and chec for the default label
	findWidget("TestLabels")
		.arcSetsOptionEditor()
		.editArcSet(
			0,
			null,
			{
				value: "",
				type: "Clear",
			},
			null,
			null,
			null
		);

	findWidget("TestLabels")
		.getArcSet(0)
		.getArc("Karnataka", "Tamil Nadu")
		.getArcLabel()
		.getArcLabelContent()
		.should.equal("100.00");
});
