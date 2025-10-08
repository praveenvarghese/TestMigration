/*!
 * @AIMMS_FILE=models/Bugs/GL722/GL722.aimms
 */

scenario(
	"GL722 - The WebUI should delete all slice info when removing an identifier from the contents for a Table V1.",
	() => {
		loadPage("Main Project/home");

		// Upon opening the page, there should be 2 messages because of the incorrect index
		// in the identifier still in the Table.
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"TestIJ : i is not an index (in widget 'Tab1'). (widget: [object Object], status code: 400)"
			);

		getLogMessage()
			.getCount()
			.should.be.equal(2);

		// Remove the faulty identifier...
		findWidget("Tab1")
			.getContentsOptionEditor()
			.removeSpecificItemFromCurrentContents("TestIJ");

		// ... and re-add it (now with only the remaining index)
		findWidget("Tab1")
			.getContentsOptionEditor()
			.setContents("TestIJ");

		// No new messages should come up because of this.
		getLogMessage()
			.getCount()
			.should.be.equal(2);
	}
);
