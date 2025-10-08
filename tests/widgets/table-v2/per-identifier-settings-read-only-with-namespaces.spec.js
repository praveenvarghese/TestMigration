/*!
 * @AIMMS_FILE=models/Bugs/GL842-ReadOnlyBug/Simpler842.aimms
 */

scenario(
	"Bug 842: the read-only option had no effect on identifiers with a namespace (so, from a module or a library).",
	() => {
		loadPage("Main Project/home?table-v2=true");

		for (const col of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
			findWidget("RadOnly")
				.getCell(0, col)
				.hasFlags(["readOnly"])
				.should.be.equal(true);
		}
	}
);
