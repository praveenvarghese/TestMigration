/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Open dialog page v2 and assert custom 5 1 and custom 2 15 size", () => {
	loadPage("Main Project/cust51 dp v2");

	findWidget("cust15_dp_v2")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "maxrows", NewOptionType: false, Value: "5", Index: 0 },
			{ Name: "maxcolumns", NewOptionType: false, Value: "1", Index: 1 },
		]);

	findWidget("cust15_dp_v2").hasPageRows(4).should.be.true;
	findWidget("cust15_dp_v2").hasPageColumns(1).should.be.true;

	loadPage("Main Project/cust215 dp v2");

	findWidget("cust215_dp_v2")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{ Name: "maxrows", NewOptionType: false, Value: "2", Index: 0 },
			{ Name: "maxcolumns", NewOptionType: false, Value: "15", Index: 1 },
		]);

	findWidget("cust215_dp_v2").hasPageRows(2).should.be.true;
	findWidget("cust215_dp_v2").hasPageColumns(15).should.be.false;

	loadPage("Main Project/home");

	getCurrentPage().should.be.equal("Main Project/home");
});
