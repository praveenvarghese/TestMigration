/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check if changing display domain works", () => {
	loadPage("Main Project/DisplayDomain?table-v2=false");

	findWidget("displaydomain")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("300.00");

	findWidget("displaydomain").setDisplayDomain({
		TicketPrice: "1",
	});

	findWidget("displaydomain")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("84.00");
});
