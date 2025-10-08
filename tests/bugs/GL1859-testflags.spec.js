/*!
 * @AIMMS_FILE=models/Bugs/GL1859-testflags/testflags.aimms
 */

scenario(
	"GL1859 - Flags were not put correctly on a binary parameter when using an UponChange procedure.",
	() => {
		loadPage("Main Project/home");

		findWidget("BInaire")
			.hasFlags(["readOnly"])
			.should.be.equal(false);

		// Switch to read-only
		findWidget("enable").select("readonly");

		findWidget("BInaire")
			.hasFlags(["readOnly"])
			.should.be.equal(true);

		// Switch back to non read-only
		findWidget("enable").select("no readonly");

		findWidget("BInaire")
			.hasFlags(["readOnly"])
			.should.be.equal(false);
	}
);
