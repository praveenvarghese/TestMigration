/*!
 * @AIMMS_FILE=models/Bugs/GL2079-FixedTextTranslations/GL2079-FixedTextTranslations.aimms
 */

scenario(
	"GL2079 - Some fixed widget texts did not respect the translation file (like those on the Upload widget, for example).",
	() => {
		loadPage("Main Project/home");

		findWidget("UL")
			.getInitialText()
			.should.be.equal("Datei hochladen");

		findWidget("DL")
			.getInitialText()
			.should.be.equal("Herunterladen vorbereiten");
	}
);
