/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"Asserting appropriate error messages are shown on WebUI with a custom widget having cross-option-types inheritance and inheritance on unsupported option types.",
	() => {
		// Load page with CW1 custom widget having cross-option-types inheritance and inheritance on unsupported option types
		loadPage("Main Project/Erroneous Custom Widget");

		// Dummy assertion, this so that the 2 error logs are reported on the page.
		findWidget("CW1")
			.getTitle()
			.should.eql("CW1");

		// Assert 2 error messages are logged
		getLogMessage()
			.openList()
			.getMessages()
			.should.eql([
				{
					Header: "ValueInheritanceAddon:",
					Message:
						"Widget 'CW1', option 'booleanB': boolean: Option type cannot inherit from numberA, option types are not compatible: boolean !== number.",
					Icon: "icon-spam",
					Status: "Unread",
				},
				{
					Header: "ValueInheritanceAddon:",
					Message:
						"Widget 'CW1', option 'optiontypenumber': Option type is not inheritable: IdentifierSpecification.",
					Icon: "icon-spam",
					Status: "Unread",
				},
			]);

		getLogMessage().closeList();
	}
);
