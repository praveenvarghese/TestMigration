/*!
 * @AIMMS_FILE=models/Bugs/GL1611-NamespaceTranslation/NamespaceTranslation.aimms
 */

scenario(
	"GL1611 - Sliced subset index in a library did not display its namespace, which led to a failing translation from the translation file (because there the namespace is mentioned).",
	() => {
		loadPage("Main Project/home");

		findWidget("SitcomInfoTable")
			.getRowHeaderTitles()
			.should.be.equal("Series");
	}
);
