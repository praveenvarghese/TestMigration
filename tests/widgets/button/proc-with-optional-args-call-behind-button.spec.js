/*!
 * @AIMMS_FILE=models/ProcOptArg/ProcOptArg.aimms
 */

scenario("Procedure with optional arguments call behind button widget.", () => {
	loadPage("Main Project/home");

	findWidget("ShutUp").click();

	findWidget("What")
		.getScalarCell("HowMuch", { mode: "multiple" })
		.getValue()
		.should.eql("0.00 s");

	findWidget("SayHoi").click();

	findWidget("What")
		.getScalarCell("What", { mode: "multiple" })
		.getValue()
		.should.eql("Hoi");

	findWidget("What")
		.getScalarCell("Who", { mode: "multiple" })
		.getValue()
		.should.eql("Eva");

	findWidget("What")
		.getScalarCell("HowMuch", { mode: "multiple" })
		.getValue()
		.should.eql("3.00 s");

	findWidget("What")
		.getScalarCell("sp_UOM", { mode: "multiple" })
		.getValue()
		.should.eql("s");

	findWidget("ShutUp").click();

	findWidget("What")
		.getScalarCell("HowMuch", { mode: "multiple" })
		.getValue()
		.should.eql("0.00 s");

	findWidget("SaySomething").click();

	findWidget("What")
		.getScalarCell("What", { mode: "multiple" })
		.getValue()
		.should.eql("Something");

	findWidget("What")
		.getScalarCell("Who", { mode: "multiple" })
		.getValue()
		.should.eql("Adam");

	findWidget("What")
		.getScalarCell("HowMuch", { mode: "multiple" })
		.getValue()
		.should.eql("0.10 s");

	findWidget("What")
		.getScalarCell("sp_UOM", { mode: "multiple" })
		.getValue()
		.should.eql("s");
});
