/*!
 * @AIMMS_FILE=models/PageManagement/PageManagement.aimms
 */

scenario("Assert action of click on a button widget with Procedure.", () => {
	loadPage("Main Project/Page Links");

	findWidget("Boolean Flag_1").getValue().should.be.false;

	findWidget("Set BooleanFlag True").click();

	findWidget("Boolean Flag_1").getValue().should.be.true;
});

scenario("Assert action of click on a button widget with Page-Links.", () => {
	loadPage("Main Project/Page Links");

	findWidget("HomePage").click();

	getCurrentPage().should.be.equal("Main Project/home");
});

scenario("Assert action of click on a button widget with Page-Links.", () => {
	loadPage("Main Project/Page Links");

	findWidget("ResultPage").click();

	getCurrentPage().should.be.equal("Main Project/Result");
});

scenario(
	"For a button set with old-fashioned page navigation, click on it navigates to respective page",
	() => {
		loadPage("Main Project/Page Links");

		findWidget("Step 1").click();

		getCurrentPage().should.be.equal("Main Project/Step1");
	}
);

scenario(
	"Click on the button associated with external link, verify new tab opens on click of it",
	() => {
		loadPage("Main Project/Page Links");

		getTabsCount().should.be.equal(1);

		findWidget("AIMMS").click();

		getTabsCount().should.be.equal(2);
	}
);
