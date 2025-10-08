/*!
 * @AIMMS_FILE=models/Bugs/GL1436-BusyMessage/BusyMessage.aimms
 */

scenario(
	"GL1436 - The busy message can be set to contain a different message than just 'Busy'.",
	() => {
		loadPage("Main Project/home");

		findWidget("Show Busy Message 1").should.exist;

		findWidget("Show Busy Message 1").click();

		getVeil().should.exist;
		getVeil()
			.getMessage()
			.should.equal("Testje");

		getVeil().should.not.exist;

		findWidget("Show Busy Message 2").should.exist;

		findWidget("Show Busy Message 2").click();

		getVeil().should.exist;
		getVeil()
			.getMessage()
			.should.equal("两次");

		getVeil().should.not.exist;

		findWidget("Show Default Busy Message").should.exist;

		findWidget("Show Default Busy Message").click();

		getVeil().should.exist;
		getVeil()
			.getMessage()
			.should.equal("busy");
	}
);
