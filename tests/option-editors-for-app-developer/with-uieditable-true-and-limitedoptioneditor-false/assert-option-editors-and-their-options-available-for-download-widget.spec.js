/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"As an app developer, with Application-Settings UI-Editable set to 1 and Limited-Option-Editor set to 0. On Download Widget Settings Option Editor, asserting different category tabs available and options available on each of these categories.",
	() => {
		loadPage("Main Project/THird Page");

		// Click on Download Button Widget Settings, and assert the info on Option Editor.
		findWidget("DownloadTheFile")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.eql(downloadWidgetOptions());

		// For the Download Button Widget Settings Option Editor, assert the header and default opened tab title.
		findWidget("DownloadTheFile")
			.openOptionDialog()
			.getOptionEditorHeaderDetails()
			.should.eql({
				"OptionDialog Header": "DownloadTheFile",
				"OptionEditorTab Title": "Action",
			});
	}
);
