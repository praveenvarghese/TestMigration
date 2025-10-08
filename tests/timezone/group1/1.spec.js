/*!
 * @AIMMS_FILE=models/Bugs/GL843-FiltersNotApplied/SmallExample.aimms
 */

scenario(
	"Setting `Time Zone Setting` App-extension option to literal:true and asserting TimeZone button and its panel visibility.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		// Assert `Time Zone Setting` Application-extension option exists
		findWidget("application")
			.openApplicationExtensionsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Time Zone Setting",
					NewOptionType: true,
					Value: "false",
					Index: 1,
				},
			]);

		// Assert Timezone button is not available on the page footer section
		getFooter().getTimezoneButton().should.not.exist;

		// Assert Timezone panel is not visible on the page
		findTimezonePanel().should.not.exist;

		// Set 'Time Zone Setting' Application-extension option to true.
		findWidget("application")
			.openApplicationExtensionsOptionEditor()
			.setOptions([
				{
					name: "Time Zone Setting",
					value: "TRUE",
					valueType: "LITERAL",
					optionEditorType: "BOOLEAN",
					sliceInfo: null,
				},
			]);

		// Assert Timezone button is now available on the page footer section
		getFooter().getTimezoneButton().should.exist;

		// Assert Timezone panel is not visible on the page
		findTimezonePanel().should.not.exist;

		//Click on Timezone button in footer
		getFooter()
			.getTimezoneButton()
			.click();

		// Assert Timezone panel is now visible on the page
		findTimezonePanel().should.exist;

		//Reload the page, and assert Timezone button
		pageRefresh();

		// Assert Timezone button is now available on the page footer section
		getFooter().getTimezoneButton().should.exist;

		// Assert Timezone panel is not available on the page
		findTimezonePanel().should.not.exist;

		//Click on Timezone button in footer
		getFooter()
			.getTimezoneButton()
			.click();

		// Assert Timezone panel is now visible on the page
		findTimezonePanel().should.exist;
	}
);
