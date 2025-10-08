/*!
 * @AIMMS_FILE=models/CubeEngineTests/CubeEngineTests.aimms
 */

scenario("Check table while changing values for display-domain", () => {
	loadPage("Main Project/Display Domain");

	findWidget("P2Table").getEmptyWidgetMessage().should.not.exist;

	findWidget("P2Table")
		.getNumRowsInGridViewport()
		.should.be.equal(2);

	findWidget("P2Table")
		.getNumColsInGridViewport()
		.should.be.equal(2);

	findWidget("ShowAll").click();

	findWidget("P2TableWithDisplayDomain").getEmptyWidgetMessage().should.not.exist;

	findWidget("P2TableWithDisplayDomain")
		.getNumRowsInGridViewport()
		.should.be.equal(3);

	findWidget("P2TableWithDisplayDomain")
		.getNumColsInGridViewport()
		.should.be.equal(3);

	findWidget("ShowEvenRows").click();

	findWidget("P2TableWithDisplayDomain").getEmptyWidgetMessage().should.not.exist;

	findWidget("P2TableWithDisplayDomain")
		.getNumRowsInGridViewport()
		.should.be.equal(2);

	findWidget("P2TableWithDisplayDomain")
		.getNumColsInGridViewport()
		.should.be.equal(3);

	findWidget("ShowNothing").click();

	findWidget("P2TableWithDisplayDomain").getEmptyWidgetMessage().should.exist;
});
