/*!
 * @AIMMS_FILE=models/timezone/timezone.aimms
 */

scenario(
	"Validate that no error pops up simply showing a string using %TZ in its format (as was the case in ticket 1001)",
	() => {
		loadPage("Main Project/home");

		getLogMessage()
			.getErrorCount()
			.should.be.equal(0);
	}
);
