// Base option-editor plumbing and scaffolding
const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());
const $$$ = require("../selenium/3xdollar");
const { Select2 } = require("../misc/select2");
const jQuery = require("jquery-node");

const { FrameworkObject } = require("../framework-object");
const { AbstractWidget } = require("../widgets/abstractWidget");
const { mixin, mixable } = require("../mixin");
const identifierSelector = require("../application/identifierSelector");

jQuery.fn.any = function() {
	return this.length > 0;
};

// Option-Editor action details
const getActionDetails = ({ isNewOptionType, optionWebElement }) => {
	let optionEditorAction_icon = "";
	let optionEditorAction_tooltip = "";

	if (isNewOptionType) {
		const optionEditorActionWebElement = optionWebElement.find(`.option-editor-action`);

		optionEditorAction_tooltip = optionEditorActionWebElement.attr("title");
		if (optionEditorAction_tooltip !== undefined) {
			optionEditorAction_icon = optionEditorActionWebElement
				.attr("class")
				.split(" ")
				.filter((e) => /icon-/.test(e))
				.slice(0)
				.toString();
		} else {
			optionEditorAction_tooltip = "undefined";
		}
	}

	return {
		optionEditorAction_icon,
		optionEditorAction_tooltip,
	};
};
//
// Create scaffolding constructs (classes, objects, mixables, etc.) for a particular option editor.
//
// For a name 'Foo', returns: {
//   FooOptionEditorMixable, // bare option editor mixable
//   FooOptionEditor,        // option editor class
//   WithFooOptionEditor,    // mixable with widget, exposes main method from option editor to widget class
// }
//
// Currently only the generic contents option editor exposes returned mixable,
// because it appears in both the widget-wizard-form and as a standalone option-editor,
// but in the future, as the wizard gets improved, it is likely to reuse other editors
// in the wizard phase as well.
const generateOptionEditorConstructs = ({
	name,
	editorButtonSelector,
	editorSelector,
	mainMethodName,
	mixinClass,
}) => {
	const theOptionEditorMixable = mixable(FrameworkObject, mixinClass);
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const theOptionEditorClass = class extends mixin(FrameworkObject, theOptionEditorMixable) {};
	theOptionEditorClass.open = (widget) => {
		const optionDialog = widget.openOptionDialog({ OptionEditorCategory_Title: name });
		// Open the option editor.
		const optionDialogTabButton = optionDialog.webElement.find(
			`.optiondialog-nav ${editorButtonSelector}.toolbar-button`
		);

		if (!optionDialogTabButton.hasClass("open")) {
			optionDialogTabButton.click();
		}

		const optionEditor = new theOptionEditorClass(optionDialog.webElement.find(editorSelector));
		optionEditor.widget = widget;
		optionEditor.OptionName;
		optionEditor.OptionEntry;
		optionEditor.IsOldOptionEntryType;

		// Sets the value in an Option Entry
		optionEditor.setValue = (optionInfo) => {
			log.debug(`${JSON.stringify(optionInfo)}`);
			const { value, valueType, optionEditorType, sliceInfo } = optionInfo;

			if (value === null || value === undefined) {
				throw new Error("'value' is a required input to set Misc option.");
			}

			if (optionEditor.OptionEntry) {
				if (optionEditor.IsOldOptionEntryType) {
					// Set value in the old style Option Entry
					optionEditor._setValueInOldStyleOptionEntry(value, valueType);
				} else {
					// Set value in the new style Option Entry
					const dataOptionName = optionEditor.OptionEntry.getAttribute(
						"data-option-name"
					);
					optionEditor._setValue(
						dataOptionName,
						optionEditorType,
						valueType,
						value,
						sliceInfo,
						null
					);
				}
			} else {
				throw new Error(
					`Could not find option entry with "${optionEditor.OptionName}" name.`
				);
			}

			return optionEditor;
		};

		// Clears the value set in Option Entry
		optionEditor.clearValue = () => {
			if (optionEditor.OptionEntry) {
				if (optionEditor.IsOldOptionEntryType) {
					// Clear value in the old style Option Entry
					optionEditor._clearValueInOldStyleOptionEntry();
				} else {
					// Clear value in the new style Option Entry
					optionEditor.clearSetValue(
						optionEditor.OptionEntry.getAttribute("data-option-name")
					);
				}
			} else {
				throw new Error(
					`Could not find option entry with "${optionEditor.OptionName}" name.`
				);
			}

			return optionEditor;
		};

		optionEditor.getPossibleValues = () => {
			const indexSelector = new Select2(
				optionEditor.OptionEntry.find(`.dropdown-literal-or-identifier-selector`),
				null
			);
			indexSelector.open();
			return indexSelector.getAllOptions();
		};

		optionEditor._setValueInOldStyleOptionEntry = (value, optionValueType) => {
			// Is it Literal type or Identifier type
			const valueTypeSelector =
				optionValueType && optionValueType.toUpperCase() === "IDENTIFIER"
					? '[class*="identifier-"]'
					: ".literal";

			const indexSelector = new Select2(
				optionEditor.OptionEntry.find(`.dropdown-literal-or-identifier-selector`),
				(itemName) =>
					$$$(
						`.select2-drop .select2-result-label ${valueTypeSelector}:textMatches(/^${itemName}(: .*)?$/)`
					)
			);
			indexSelector.search(value).select(value);

			return optionEditor;
		};
		// Clears the value set in Old style Option Entry
		optionEditor._clearValueInOldStyleOptionEntry = () => {
			const indexSelector = new Select2(
				optionEditor.OptionEntry.find(`.dropdown-literal-or-identifier-selector`),
				null
			);
			indexSelector.clear();
		};

		optionEditor.clickToGetIdentifierSelectionDialogWithIndex = (
			index,
			optionName = optionEditor.OptionName
		) => {
			const selector = `[data-option-name="indices.${index}.${optionName}"] .icon-menu2`;
			optionEditor.webElement.find(selector).click();
			return new identifierSelector($$$(".identifier-dialog"));
		};
		optionEditor.clickToGetIdentifierSelectionDialog = (
			optionName = optionEditor.OptionName
		) => {
			// In case of the Arc Set options editor, the optionName somehow contains two option names, separated by a comma.
			//
			// Specifically: "arcs.#.template.type,arcs.0.template.type"
			//
			// In reality, only the name without the "#"" in it is present in the DOM. So, in the code below, we split the option name(s)
			// into the 2 separate ones and only perform the actual clicking when "#" is not part of the option name.

			const optionNames = optionName.toString().split(",");
			if (optionNames.length > 1) {
				optionNames.forEach((optname) => {
					if (optname.indexOf("#") === -1) {
						const selector = `[data-option-name="${optname.trim()}"] .icon-menu2`;

						optionEditor.webElement.find(selector).click();
					}
				});
			} else {
				const selector = `[data-option-name="${optionName}"] .icon-menu2`;
				optionEditor.webElement.find(selector).click();
			}
			return new identifierSelector($$$(".identifier-dialog"));
		};

		optionEditor._setIdentifier = (optionName, identifierName, sliceValue, storeFocusValue) => {
			// optionEditor.clearSetValue(optionName);
			optionEditor
				.clickToGetIdentifierSelectionDialog(optionName)
				.selectIdentifier(identifierName);

			const identifierSelectorDialog = new identifierSelector($$$(".identifier-dialog"));
			sliceValue &&
				identifierSelectorDialog.setSlices({
					clearSlicing: false,
					sliceInfo: sliceValue,
				});
			storeFocusValue && identifierSelectorDialog.setStoreFocus(storeFocusValue);
			identifierSelectorDialog.clickOnFinish();

			return optionEditor;
		};

		optionEditor._setValueLiteralEntry = (optionName, optionValue) => {
			optionEditor.clearSetValue(optionName);
			optionEditor.webElement
				.find(`[data-option-name="${optionName}"] .literal-input`)
				.click()
				.keys(optionValue)
				.keys(SPECIAL_KEYS.enter); //Enter key
		};

		optionEditor._setEnum = (optionName, optionValue) => {
			optionEditor.clearSetValue(optionName);

			// In case of the Arc Set options editor, the optionName somehow contains two option names, separated by a comma.
			//
			// Specifically: "arcs.#.template.type,arcs.0.template.type"
			//
			// In reality, only the name without the "#"" in it is present in the DOM. So, in the code below, we split the option name(s)
			// into the 2 separate ones and only perform the actual value selection when "#" is not part of the option name.
			const optionNames = optionName.toString().split(",");
			if (optionNames.length > 1) {
				optionNames.forEach((optname) => {
					if (optname.indexOf("#") === -1) {
						const indexSelector = new Select2(
							optionEditor.webElement.find(
								`[data-option-name="${optname}"]  .literal-input-wrap.enum-option-editor`
							),
							(itemName) =>
								$$$(
									`.select2-drop-active .select2-result-label:textMatches(/^${itemName}$/)`
								)
						);
						indexSelector.search(optionValue).select(optionValue);
					}
				});
			} else {
				// There was just a single option, so nothing to split above. Just execute the original code here.
				const indexSelector = new Select2(
					optionEditor.webElement.find(
						`[data-option-name="${optionName}"]  .literal-input-wrap.enum-option-editor`
					),
					(itemName) =>
						$$$(
							`.select2-drop-active .select2-result-label:textMatches(/^${itemName}$/)`
						)
				);
				indexSelector.search(optionValue).select(optionValue);
			}

			return optionEditor;
		};

		optionEditor._setIcon = (optionName, optionValue) => {
			optionEditor.clearSetValue(optionName);
			optionEditor.webElement
				.find(`[data-option-name="${optionName}"] .literal-input`)
				.click();
			optionEditor.webElement
				.find(
					`[data-option-name="${optionName}"] .icon-selector-list [title="${optionValue}"]`
				)
				.click();

			return optionEditor;
		};

		optionEditor._setToInitial = (elementLocator) => {
			// eslint-disable-next-line no-shadow
			browser.execute((elementLocator) => {
				const $ = window.jQuery;
				if ($) {
					$(elementLocator).click();
				}
			}, elementLocator);
		};
		optionEditor.clearSetValue = (optionName) => {
			const elementLocator = `[data-option-name="${optionName}"] .icon-close`;
			optionEditor._setToInitial(elementLocator);
		};

		optionEditor.revertToDefault = (optionName) => {
			const defaultCross = optionEditor.webElement.find(
				`[data-option-name="${optionName}"] .select2-search-choice-close`
			);
			defaultCross.click();
		};

		optionEditor._setValue = (
			optionName,
			listEntryType,
			optionValueType,
			optionValue,
			sliceValue,
			storeFocusValue
		) => {
			switch (optionValueType.toUpperCase()) {
				case "LITERAL":
					optionValue && optionEditor._setLiteral(listEntryType, optionName, optionValue);
					break;
				case "IDENTIFIER":
					optionValue &&
						optionEditor._setIdentifier(
							optionName,
							optionValue,
							sliceValue,
							storeFocusValue
						);
					break;
				case "ENUM":
					optionValue && optionEditor._setEnum(optionName, optionValue);
					break;
				case "ICON":
					optionValue && optionEditor._setIcon(optionName, optionValue);
					break;
				default:
					optionEditor.clearSetValue(optionName);
					break;
			}
		};

		optionEditor.addNewListEntrySet = () => {
			optionEditor.webElement.find(`.option-template .add-list-entry-button button`).click();

			return optionEditor;
		};

		optionEditor._isListEntrySetOpen = (listEntrySetWebElement) => {
			const isListEntrySetOpen = listEntrySetWebElement.hasClass("expanded");
			return isListEntrySetOpen;
		};

		optionEditor._getListEntrySetWebElement = ({ listEntryName, listEntryIndex }) => {
			let listEntrySetWebElement;

			if (listEntryName === undefined) {
				listEntrySetWebElement = optionEditor.webElement.find(
					`.add-or-delete-list-entry-option-editor:not(.option-template):eq(${listEntryIndex})`
				);
			} else {
				const listEntrySetName = listEntryName.replace(/\./gm, "-");
				listEntrySetWebElement = optionEditor.webElement.find(
					`.add-or-delete-list-entry-option-editor.${listEntrySetName}`
				);
			}

			return listEntrySetWebElement;
		};

		optionEditor.openListEntrySet = ({ listEntryName, listEntryIndex }) => {
			const listEntrySetWebElement = optionEditor._getListEntrySetWebElement({
				listEntryName,
				listEntryIndex,
			});
			if (!optionEditor._isListEntrySetOpen(listEntrySetWebElement)) {
				listEntrySetWebElement.click();
			}
			return optionEditor;
		};

		optionEditor.closeListEntrySet = ({ listEntryName, listEntryIndex }) => {
			const listEntrySetWebElement = optionEditor._getListEntrySetWebElement({
				listEntryName,
				listEntryIndex,
			});
			if (optionEditor._isListEntrySetOpen(listEntrySetWebElement)) {
				listEntrySetWebElement.click();
			}
			return optionEditor;
		};

		optionEditor._hasListEntrySet = (listEntrySetName) => {
			const listEntrySet = optionEditor.webElement.findIfAny(
				`.add-or-delete-list-entry-option-editor.${listEntrySetName}`
			);

			return listEntrySet.any();
		};

		optionEditor._getCountOfListEntrySets = () => {
			const listEntrySets = optionEditor.webElement.findIfAny(
				".add-or-delete-list-entry-option-editor"
			);
			return listEntrySets.any() ? listEntrySets.length - 1 : 0;
		};

		optionEditor._setLiteral = (listEntryType, optionName, optionValue) => {
			switch (listEntryType.toUpperCase()) {
				case "BOOLEAN":
					optionValue && optionEditor._setBooleanLiteralEntry(optionName, optionValue);
					break;
				// For other list entry types like "VALUE"
				default:
					optionValue && optionEditor._setValueLiteralEntry(optionName, optionValue);
					break;
			}
		};

		optionEditor._isBooleanLiteralEntrySelected = (optionName) => {
			const booleanSwitchSelector = `[data-option-name="${optionName}"] .literal-type-checkbox`;
			return optionEditor.webElement.find(booleanSwitchSelector).isSelected();
		};

		optionEditor._setBooleanLiteralEntry = (optionName, booleanState) => {
			const expectedValue = booleanState.toUpperCase() === "TRUE";
			if (optionEditor._isBooleanLiteralEntrySelected(optionName) !== expectedValue) {
				const booleanSwitchSelector = `[data-option-name="${optionName}"] [for="${optionName.replace(
					/\./g,
					"-"
				)}"]`;
				optionEditor.webElement.find(booleanSwitchSelector).click();
			}
		};

		optionEditor._setFocusOnListEntryDeleteButton = (listEntry) => {
			const deleteButtonSelector = `.${listEntry} .remove-list-entry-button.icon-remove`;
			const listEntryDeleteButton = optionEditor.webElement.findIfAny(deleteButtonSelector);
			if (listEntryDeleteButton.any()) {
				listEntryDeleteButton.moveTo();
			} else {
				throw new Error(`Could not find "${listEntry}" list entry's - delete button.`);
			}
			return listEntryDeleteButton;
		};

		optionEditor._deleteListEntrySet = (listEntry) => {
			optionEditor._setFocusOnListEntryDeleteButton(listEntry).click();
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			setTimeout(() => {}, 2000);
		};

		optionEditor._moveUpASet = (listEntry) => {
			//First set focus on delete button of the respective list entry.
			// So that the move up arrow is visible for further actions.
			optionEditor._setFocusOnListEntryDeleteButton(listEntry);

			const upArrowSelector = `.${listEntry} .move-up-list-entry-button.icon-arrow-up`;
			const moveUpListEntryButton = optionEditor.webElement.findIfAny(upArrowSelector);
			if (moveUpListEntryButton.any()) {
				moveUpListEntryButton.moveTo();
				moveUpListEntryButton.click();
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				setTimeout(() => {}, 2000);
			} else {
				throw new Error(`Could not find "${listEntry}" list entry's - move up button.`);
			}
			return optionEditor;
		};

		optionEditor._moveDownASet = (listEntry) => {
			//First set focus on delete button of the respective list entry.
			// So that the move down arrow is visible for further actions.
			optionEditor._setFocusOnListEntryDeleteButton(listEntry);

			const downArrowSelector = `.${listEntry} .move-down-list-entry-button.icon-arrow-down`;
			const moveDownListEntryButton = optionEditor.webElement.findIfAny(downArrowSelector);
			if (moveDownListEntryButton.any()) {
				moveDownListEntryButton.moveTo();
				moveDownListEntryButton.click();
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				setTimeout(() => {}, 2000);
			} else {
				throw new Error(`Could not find "${listEntry}" list entry's - move down button.`);
			}
			return optionEditor;
		};

		optionEditor.getNewOptionsDetails = () => {
			const options = [];

			const openOptionDialog = jQuery(optionEditor.webElement.getHTML());
			const optionEditorsCount = openOptionDialog.find(`[data-option-index="0"]`).length;
			let optionsOrder = 0;
			for (let index = 0; index < optionEditorsCount; index++) {
				// Get the Option WebElement
				const optionWebElement = openOptionDialog.find(
					`[data-option-index="0"]:eq(${index})`
				);
				const labelValue = optionWebElement.find(`label[for]`).attr("for");

				// Is Option Visible
				const isOption_Visible = browser.execute((optionIndex) => {
					const $ = window.jQuery;
					let isOptionVisible = false;
					if ($) {
						isOptionVisible = $(
							`.awf-optiondialog.open .open [data-option-index="0"]:eq(${optionIndex}) label:first`
						).isVisible();
					}
					return isOptionVisible;
				}, index);

				if (isOption_Visible) {
					const optionWebElementClasses = optionWebElement.attr("class");

					const groupName = optionWebElement.find(`label:first`).attr("data-group-name");

					// Option Name
					const optionName = optionWebElement.find(`label:first[data-group-name]`).text();

					// Is New or Old Option Type
					const isOldOptionType = optionWebElementClasses.includes(
						"old-literal-or-aimms-single-line-option-editor"
					);

					// Value
					let option_ValueSet = "";
					if (optionWebElementClasses.includes("enum") || isOldOptionType) {
						option_ValueSet = $$$(
							`.awf-optiondialog.open .open [data-option-index="0"]:eq(${index}) input:last`
						).getValue();

						option_ValueSet = option_ValueSet
							.replace(/identifier:/, "")
							.replace(/literal:/, "");
					} else if (labelValue !== undefined) {
						option_ValueSet = $$$(
							`.awf-optiondialog.open .open [data-option-index="0"]:eq(${index}) input[id=${labelValue}].literal-input:first`
						).getAttribute("value");

						option_ValueSet =
							optionWebElementClasses.includes("boolean ") && option_ValueSet === ""
								? "false"
								: option_ValueSet;
					}

					if (groupName !== undefined) {
						options.push({
							Group: groupName !== undefined ? groupName : "",
							Name: optionName !== undefined ? optionName : "",
							Value: option_ValueSet,
							Index: optionsOrder++,
						});
					}
				}
			}

			return options;
		};

		optionEditor.getOptions = () => {
			const options = [];

			const openOptionDialog = jQuery(optionEditor.webElement.getHTML());
			const optionEditorsCount = openOptionDialog.find(`[data-option-index="0"]`).length;
			let optionsOrder = 0;
			for (let index = 0; index < optionEditorsCount; index++) {
				// Get the Option WebElement
				const optionWebElement = openOptionDialog.find(
					`[data-option-index="0"]:eq(${index})`
				);

				// Is Option Visible
				const isOption_Visible = browser.execute((optionIndex) => {
					const $ = window.jQuery;
					let isOptionVisible = false;
					if ($) {
						isOptionVisible = $(
							`.awf-optiondialog.open .open [data-option-index="0"]:eq(${optionIndex}) label:first`
						).isVisible();
					}
					return isOptionVisible;
				}, index);

				if (isOption_Visible) {
					const optionWebElementClasses = optionWebElement.attr("class");

					// Option Name
					const optionName = optionWebElement.find(`label:first`).text();

					// Is New or Old Option Type
					const isOldOptionType = optionWebElementClasses.includes(
						"old-literal-or-aimms-single-line-option-editor"
					);
					const isNewOptionType = !isOldOptionType;

					// Value
					let option_ValueSet = "";
					if (optionWebElementClasses.includes("enum") || isOldOptionType) {
						option_ValueSet = $$$(
							`.awf-optiondialog.open .open [data-option-index="0"]:eq(${index}) input:last`
						).getValue();

						option_ValueSet = option_ValueSet
							.replace(/identifier:/, "")
							.replace(/literal:/, "");
					} else {
						option_ValueSet = $$$(
							`.awf-optiondialog.open .open [data-option-index="0"]:eq(${index}) input.literal-input:first`
						).getValue();

						option_ValueSet =
							optionWebElementClasses.includes("boolean ") && option_ValueSet === ""
								? "false"
								: option_ValueSet;
					}

					const {
						optionEditorAction_icon,
						optionEditorAction_tooltip,
					} = getActionDetails({ isNewOptionType, optionWebElement });

					options.push({
						Name: optionName,
						// Visible: isOption_Visible,
						NewOptionType: isNewOptionType,
						Value: option_ValueSet,
						Index: optionsOrder++,
						"Option-Entry Action Tooltip": optionEditorAction_tooltip,
						"Option-Entry Action Icon": optionEditorAction_icon,
					});
				}
			}

			return options;
		};

		// Returns the tooltip of the inheritance icon of the option entry (if any).
		optionEditor.OptionIsInheritedFrom = (expectedOptionName) => {
			const getInheritanceIndicator = (selector) => {
				const theOption = optionEditor.webElement.find(
					`label[title="${expectedOptionName}"]`
				);

				if (!theOption || !theOption.any()) {
					return null;
				}

				const inheritanceIndicator = theOption.parent().findIfAny(selector);
				return inheritanceIndicator && inheritanceIndicator.any()
					? inheritanceIndicator
					: null;
			};

			// Define selectors for old and new option entry types
			const oldSelector = ".select2-container .select2-search-choice-close[title]";
			const newSelector = ".option-editor-action.derives-from";

			// Get the appropriate inheritance indicator based on the option entry type
			const inheritanceIndicator = getInheritanceIndicator(
				optionEditor.IsOldOptionEntryType ? oldSelector : newSelector
			);

			// Return the title attribute if the inheritance indicator is found
			return inheritanceIndicator ? inheritanceIndicator.getAttribute("title") : "";
		};

		optionEditor.TabInheritsFrom = () => {
			const theIcon = optionEditor.webElement.findIfAny(`.inherited-from-template-icon`);

			if (theIcon.any()) {
				return theIcon.getAttribute("title");
			}

			return "";
		};

		optionEditor.getListEntryDetails = () => {
			const ListEntry = [];

			const openOptionDialog = jQuery(optionEditor.webElement.getHTML());
			const listEntryCount = openOptionDialog.find(`.add-or-delete-list-entry-option-editor`)
				.length;
			let listEntryOrder = 0;

			// Loop through each of the List Entry Header WebElements
			for (let index = 0; index < listEntryCount; index++) {
				let optionsOrder = 0;
				const options = [];

				// Get the List Entry WebElement
				const listEntryWebElement = openOptionDialog.find(
					`.add-or-delete-list-entry-option-editor:eq(${index})`
				);

				// Is List Entry Visible
				const isListEntry_Visible = browser.execute((optionIndex) => {
					const $ = window.jQuery;
					let isListEntryVisible = false;
					if ($) {
						isListEntryVisible = $(
							`.awf-optiondialog.open .open .add-or-delete-list-entry-option-editor:eq(${optionIndex}) label:first`
						).isVisible();
					}
					return isListEntryVisible;
				}, index);

				// If List Entry is visible, then further fetch its details.
				if (isListEntry_Visible) {
					// List Entry Name
					const listEntryName = listEntryWebElement.find(`label:first .header`).text();

					// Is List Entry Collapsed or Expanded
					const listEntryState_CollapsedOrExpanded = listEntryWebElement
						.attr("class")
						.includes("expanded")
						? "Expanded"
						: "Collapsed";

					// If List Entry is Expanded, fetch further details like that of its options
					if (listEntryState_CollapsedOrExpanded === "Expanded") {
						// List Entry Data-Option Index
						const dataOptionIndexNumber = parseInt(
							listEntryWebElement.attr("data-option-index"),
							10
						);

						const listEntryUniqueClass = listEntryWebElement
							.attr("class")
							.split(" ")[1];
						const optionsCountUnderEachListEntry = openOptionDialog.find(
							`.list-entry-item.${listEntryUniqueClass}`
						).length;

						for (
							let optionNo = 1;
							optionNo <= optionsCountUnderEachListEntry;
							optionNo++
						) {
							const dataOptionIndex = dataOptionIndexNumber + optionNo;

							// Get the Option WebElement
							const optionWebElement = openOptionDialog.find(
								`[data-option-index="${dataOptionIndex}"]`
							);

							// Is Option Visible
							const isOption_Visible = browser.execute((data_option_index) => {
								const $ = window.jQuery;
								let isOptionVisible = true;
								if ($) {
									isOptionVisible = $(
										`.awf-optiondialog.open .open .list-entry-item[data-option-index="${data_option_index}"] label:first`
									).isVisible();
								}
								return isOptionVisible;
							}, dataOptionIndex);

							// If Option is Visible, fetch its further details
							if (isOption_Visible) {
								const optionWebElementClasses = optionWebElement.attr("class");

								// Option Name
								const optionName = optionWebElement.find(`label:first`).text();

								// Is New or Old Option Type
								const isOldOptionType = optionWebElementClasses.includes(
									"old-literal-or-aimms-single-line-option-editor"
								);
								const isNewOptionType = !isOldOptionType;

								// Value
								let option_ValueSet = "";
								if (optionWebElementClasses.includes("enum") || isOldOptionType) {
									option_ValueSet = $$$(
										`.awf-optiondialog.open .open .list-entry-item[data-option-index="${dataOptionIndex}"] input:last`
									).getValue();

									option_ValueSet = option_ValueSet
										.replace(/identifier:/, "")
										.replace(/literal:/, "");
								} else {
									option_ValueSet = $$$(
										`.awf-optiondialog.open .open .list-entry-item[data-option-index="${dataOptionIndex}"] input.literal-input:first`
									).getValue();

									option_ValueSet =
										optionWebElementClasses.includes("boolean ") &&
										option_ValueSet === ""
											? "false"
											: option_ValueSet;
								}

								const {
									optionEditorAction_icon,
									optionEditorAction_tooltip,
								} = getActionDetails({ isNewOptionType, optionWebElement });

								options.push({
									Name: optionName,
									// Visible: isOption_Visible,
									NewOptionType: isNewOptionType,
									Value: option_ValueSet,
									Index: optionsOrder++,
									"Option-Entry Action Tooltip": optionEditorAction_tooltip,
									"Option-Entry Action Icon": optionEditorAction_icon,
								});
							}
						}
					}

					ListEntry.push({
						ListEntryTitle: listEntryName,
						ListEntryState: listEntryState_CollapsedOrExpanded,
						ListEntryOrder: listEntryOrder++,
						Options: options,
					});
				}
			}

			return ListEntry;
		};

		optionEditor.getDefaultListEntryDetails = () => {
			const DefaultListEntry = [];

			const openOptionDialog = jQuery(optionEditor.webElement.getHTML());
			const defaultEntryCount = openOptionDialog.find(
				`.group-Defaults [data-group-name="Defaults"]`
			).length;

			// Loop through each of the List Entry Header WebElements
			for (let index = 0; index < defaultEntryCount; index++) {
				const defaultOptionName = openOptionDialog
					.find(`.group-Defaults [data-group-name="Defaults"]:eq(${index})`)
					.text();
				const getOptionValue = openOptionDialog
					.find(`.group-Defaults input:eq(${index})`)
					.attr("value");

				const defaultOptionsInfo = {
					OptionName: defaultOptionName,
					Value: getOptionValue,
				};
				DefaultListEntry.push(defaultOptionsInfo);
			}
			return DefaultListEntry;
		};

		optionEditor._getDataOptionName = (groupName, optionDisplayName) => {
			const optionEntryLabelElement = groupName
				? optionEditor.webElement.find(
						`label[data-group-name="${groupName}"][title="${optionDisplayName}"]`
				  )
				: optionEditor.webElement.find(`label[title="${optionDisplayName}"]`);

			if (!optionEntryLabelElement) {
				throw new Error(`Could not find an option with '${optionDisplayName}' name.`);
			}

			return optionEntryLabelElement.parent().getAttribute("data-option-name");
		};

		optionEditor.setOptions = (optionsData) => {
			optionsData.forEach((individualOptionInfo) => {
				log.debug(`${JSON.stringify(individualOptionInfo)}`);
				const valueType = individualOptionInfo.valueType
					? individualOptionInfo.valueType
					: "IDENTIFIER";

				const optionEditorType = individualOptionInfo.optionEditorType
					? individualOptionInfo.optionEditorType
					: "IDENTIFIER";

				optionEditor._setValue(
					optionEditor._getDataOptionName(
						individualOptionInfo.groupName,
						individualOptionInfo.name
					),
					optionEditorType,
					valueType,
					individualOptionInfo.value,
					individualOptionInfo.sliceInfo,
					null // defaulting this input to Null, as there is no scope for Store-focus.
				);
			});

			return optionEditor;
		};

		optionEditor.clearOptions = (optionsData) => {
			optionsData.forEach((individualOptionInfo) => {
				optionEditor.clearSetValue(
					optionEditor._getDataOptionName(
						individualOptionInfo.groupName,
						individualOptionInfo.name
					)
				);
			});

			return optionEditor;
		};

		optionEditor.getListEntryButtonText = () =>
			optionEditor.webElement
				.find(`.option-template .add-list-entry-button .ui-button-text`)
				.getText();

		return optionEditor;
	};
	// This one is mixable with a widget and operates from that widget, it only exposes
	// the basic set-function and access to the underlying option-editor for detailed
	// option-editor interaction.
	const theWithOptionEditorMixable = mixable(
		AbstractWidget,
		(_) =>
			class extends _ {
				[mainMethodName](...args) {
					log.debug(`${JSON.stringify(args)}`);
					const theOptionEditor = this[`open${name}OptionEditor`](...args);

					return theOptionEditor[mainMethodName](...args) || this;
				}
				[`open${name}OptionEditor`](...args) {
					return theOptionEditorClass.open(this, ...args);
				}
			}
	);

	return {
		[`${name}OptionEditorMixable`]: theOptionEditorMixable,
		[`${name}OptionEditor`]: theOptionEditorClass,
		[`With${name}OptionEditor`]: theWithOptionEditorMixable,
	};
};

module.exports = {
	generateOptionEditorConstructs,
};
